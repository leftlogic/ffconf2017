var element = document.querySelector('section.main');
var root = document.documentElement;

function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
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
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}

function run(s, bufferList) {
  return new Promise(resolve => {
    let [str, delay = 1000, sound = true] = s;
    if (!Array.isArray(s)) {
      [str, delay, sound] = [s, 1000, true];
    }

    console.log(str)
    if (sound) {
      const sound = audioContext.createBufferSource();
      sound.buffer = bufferList[0];

      sound.connect(audioContext.destination);
      sound.start(0);
    }

    element.innerHTML = str + '<span class="chr">L</span>';

    setTimeout(resolve, delay);

  });
}

function sequencer(s, bufferList) {
  s.reduce((acc, curr) => {
    return acc.then(() => run(curr, bufferList))
  }, Promise.resolve());

//   p.then(() => console.log('done')).catch(e => console.log(e))
}

function main(bufferList) {
  setTimeout(function () {
    root.className += ' loading';
    const sequence = [
      '',
      'LOAD ',
      ['LOAD "', 500],
      'LOAD ""',
      // TODO show count down to event
    ];
    sequencer(sequence, bufferList)
  }, 2000);
}

const audioContext = new window.AudioContext();
const bufferLoader = new BufferLoader(audioContext, ['/chr.m4a'], main);

bufferLoader.load()
