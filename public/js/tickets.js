/* global document, window */
const element = document.querySelector('section.main');
const root = document.documentElement;

const FREQ = 854; // Also speccy t-state for single bit

const audioContext = new window.AudioContext();
const gain = generateGain(); // we'll always connect to this for generated audio
const toBinary = s => (parseInt(s, 16)).toString(2).padStart(8, '0');

function fileToBinary(file) {
  return new Promise(resolve => {
    const reader = new window.FileReader();

    reader.onloadend = function () {
      const binary = [];
      const bytes = [];
      const result = reader.result;
      for (let n = 0; n < result.length; ++n) {
        const aByte = result.charCodeAt(n);
        bytes.push(aByte);
        let byteStr = aByte.toString(16);
        if (byteStr.length < 2) {
          byteStr = '0' + byteStr;
        }
        binary.push(toBinary(byteStr));
      }

      resolve({ binary, result: bytes });
    };

    reader.readAsBinaryString(file);
  });
}

function loadimage(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  canvas.toBlob(file => fileToBinary(file).then(({ binary }) => {
    play(binary.join(''));
  }));

}

function play(data) {
  // 1 pulse length = (T-855 * (1/3,500)) = 0.244ms
  // 1 pulse = 0 bit
  // 2 pulse = 1 bit
  // pulses per second = (1 / 44100) / (1/3,500,000)
  //                   = 1 / (rate / T)
  // 4098 = lowest sample rate
  // The lower the sample rate, the more data fits into a sample, but the lower quality sound
  //
  // @ 44.1KHz - 79 pulses per sample
  // @ 4098Hz  - 854 pulses per sample

  // Stereo
  let ptr = 0;
  const RATE = 44100; //4098; //audioContext.sampleRate;
  // const REAL_TIME_FREQUENCY = 855; // this changes based on the 0 and 1 - 860 for 1, 1720 for 2
  const ONE = 855;
  const ZERO = ONE * 2;
  let REAL_TIME_FREQUENCY = data[ptr] == 1 ? ONE : ZERO;
  let ANGULAR_FREQUENCY = REAL_TIME_FREQUENCY * 2 * Math.PI;

  const FACTOR = 2; // 0 = 265 (smallest sample rate), 6 = 16384 (largest sample rate)
  const src = audioContext.createScriptProcessor(256 * Math.pow(2, FACTOR), 1, 1);

  // Give the node a function to process audio events
  src.onaudioprocess = (audioProcessingEvent) => {
    // The input buffer is the song we loaded earlier
    const inputBuffer = audioProcessingEvent.inputBuffer;

    // The output buffer contains the samples that will be modified and played
    const outputBuffer = audioProcessingEvent.outputBuffer;

    // Loop through the output channels (in this case there is only one)
    const channel = 0;
    const outputData = outputBuffer.getChannelData(channel);

    // Loop through the samples rate
    for (let sample = 0; sample < inputBuffer.length; sample++) {

      if (ptr > data.length) {
        src.disconnect();
        gain.disconnect();
        return;
      }

      // make output equal to the same as the input
      outputData[sample] = generateSample(sample, RATE, ANGULAR_FREQUENCY);
      if (sample % REAL_TIME_FREQUENCY === 0) { // honestly, I don't remember why…
        const byte = data[++ptr];
        if (byte !== undefined) {
          if (byte == 0) {
            REAL_TIME_FREQUENCY = ZERO;
            // console.log('switch to 0 - fast', i);
          } else {
            REAL_TIME_FREQUENCY = ONE;
            // console.log('switch to 1 - slow', i);
          }
          ANGULAR_FREQUENCY = REAL_TIME_FREQUENCY * 2 * Math.PI;
        } else if (ANGULAR_FREQUENCY !== 0) {
          ANGULAR_FREQUENCY = 0;
          src.disconnect();
          gain.disconnect();
          return;
          break;
        }
      }
    }
  };

  src.connect(gain);
}



function generateGain() {
  const gain = audioContext.createGain();
  const fraction = 30 / 100; // keep the volume down to 30%
  gain.gain.value = fraction * fraction;
  // Connect the source to the gain node.
  gain.connect(audioContext.destination);
  return gain;
}

const generateSample = (sampleNumber, RATE, ANGULAR_FREQUENCY) => {
  const sampleTime = sampleNumber / RATE;
  const sampleAngle = sampleTime * ANGULAR_FREQUENCY;
  const noise = 0; //Math.random() * 0.05;
  return Math.sin(sampleAngle) < 0 ? (-1 + noise) : (1 - noise);
};

function generateTone() {
  // create Oscillator node
  const oscillator = audioContext.createOscillator();

  // value in Hz, we'll change this
  oscillator.frequency.value = FREQ;

  // now connect it to the audio output
  oscillator.connect(gain);

  // now we hear the sound
  oscillator.start();
  return oscillator;
}

function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

BufferLoader.prototype.load = function() {
  for (let i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}

function run(s, bufferList) {
  return new Promise(resolve => {
    let [str, delay = 1000, sound = true, chr = true] = s;
    if (!Array.isArray(s)) {
      [str, delay, sound, chr] = [s, 1000, true, true];
    }

    if (sound) {
      const sound = audioContext.createBufferSource();
      sound.buffer = bufferList[0];

      sound.connect(audioContext.destination);
      sound.start(0);
    }

    if (chr) str += '<span class="chr">L</span>';
    element.innerHTML = str;

    setTimeout(resolve, delay);

  });
}

function sequencer(s, bufferList, done) {
  s.reduce((acc, curr) => {
    return acc.then(() => run(curr, bufferList))
  }, Promise.resolve()).then(done);
}

function main(bufferList) {
  setTimeout(function () {
    root.className += ' loading';
    const sequence = [
      ['', 1000, 0],
      'LOAD ',
      ['LOAD "', 500],
      ['LOAD ""', 500],
      ['LOAD ""', 500],
      ['', 2000, 0, 0],
      // TODO show count down to event
    ];
    setTimeout(() => {
      sequencer(sequence, bufferList, startAudio)
    }, 2000)
  }, 2000);
}

function startAudio() {
  const tone = generateTone();

  root.className += ' countdown tone';
  setTimeout(() => {
    tone.disconnect();
    root.classList.remove('tone');
    draw();
    loadimage(document.querySelector('img'));
  }, 4000);

  const target = new Date('2017-07-20 10:00:00').getTime();
  const draw = () => {
    const delta = target - Date.now();
    if (delta <= 0) {
      element.innerHTML = `R Tape loading error, 0:1<br>`;
      return;
    }
    requestAnimationFrame(draw);
    // this is super filth, but meh…
    const str = new Date(delta).toJSON().split('-').pop();
    const [_h, m, s] = str.split(':');
    let [d, h] = _h.split('T');
    h = (parseInt(d, 10) * 24 - 24) + parseInt(h, 10);

    element.innerHTML = `Loading, please wait...<br><br>Available in ${h}:${m}:${s}`;
  };
}

const bufferLoader = new BufferLoader(audioContext, ['/chr.m4a'], main);

window.onload = () => {
  bufferLoader.load();
};

console.log('Come back soon, I\'ll be doing more later…');
