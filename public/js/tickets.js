const element = document.querySelector('section.main');
const root = document.documentElement;

const RATE = 60;
const FREQ = 854; // Also speccy t-state for single bit

const audioContext = new window.AudioContext();
const gain = generateGain(); // we'll always connect to this for generated audio

function generateGain() {
  const gain = audioContext.createGain();
  const fraction = 30 / 100; // keep the volume down to 30%
  gain.gain.value = fraction * fraction;
  // Connect the source to the gain node.
  gain.connect(audioContext.destination);
  return gain;
}

const generateSample = (sampleNumber, method = 'sin') => {
  const sampleTime = sampleNumber / RATE;
  const sampleAngle = sampleTime * 2 * Math.PI * FREQ;
  return Math[method](sampleAngle);
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
  }, 4000);

  const target = new Date('2017-06-21 22:24:00').getTime();
  const now = Date.now(); // start point
  const draw = (timestamp) => {
    const delta = target - Date.now();
    if (delta <= 0) {
      element.innerHTML = `R Tape loading error, 0:1`;
      return;
    }
    requestAnimationFrame(draw);
    // this is super filth, but meh…
    const str = new Date(delta).toJSON().split('-').pop();
    const [_h, m, s] = str.split(':');
    let [d, h] = _h.split('T');
    h = (parseInt(d, 10) * 24 - 24) + parseInt(h, 10);

    element.innerHTML = `Loading, please wait...<br><br>Available in ${h}:${m}:${s}`;
  }
}

const bufferLoader = new BufferLoader(audioContext, ['/chr.m4a'], main);

bufferLoader.load()
