console.log('\x1Bc');

var twirlTimer = (function(logo) {
  var frames = 4;
  var frame = 0;
  var current_logo = logo;
  var fish1 = {
    topLeft: {
      line: 12,
      column: 50
    },
    bottomRight: {
      line: 17,
      column: 73
    },
    end: {
      line: 10,
      column: 24
    }
  };
  return setInterval(function() {
    current_logo = moveFish(fish1, frame, frames, logo);
    //console.log('\x1Bc', "\x1b[36m",'\x1b[0m',"\r" + current_logo);
    frame++;
    frame &= (frames-1);
  }, 250);
});

function moveFish(fish, frame, frames, logo) {
  var current_logo = logo;
  var lines = logo.split("\n");
  var current_position = {
    topLeft: {
      line: parseInt(fish.topLeft.line - ((fish.topLeft.line - fish.end.line) / (frames) * frame )),
      column: parseInt(fish.topLeft.column - ((fish.topLeft.column - fish.end.column) / (frames) * frame ))
    },
    bottomRight: {
      line: parseInt(fish.bottomRight.line - ((fish.topLeft.line - fish.end.line) / (frames) * frame )),
      column: parseInt(fish.bottomRight.column - ((fish.topLeft.column - fish.end.column) / (frames) * frame ))
    }
  };

  lines.forEach(function(line, number){
    for (var i = 0; i < line.length; i++) {
      if (i ) {

      }
    }
    console.log(current_position);
    //console.log(number, line);
  });
  return current_logo;
}

fs = require('fs');
fs.readFile('./logo.txt', 'utf8', function(err, logo){
  if (err) {
    return console.log(err);
  }
  twirlTimer(logo);
});