console.log('\x1Bc');

var twirlTimer = (function(logo) {
  var frames = 6;
  var frame = 1;
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
    console.log('\x1Bc', "\x1b[36m",'\x1b[0m',"\r" + current_logo);
    frame++;
    if (frame >= frames) {
      frame = 1;
    }
  }, 250);
});

function moveFish(fish, frame, frames, logo) {
  var current_logo = logo;
  var lines = logo.split("\n");
  var diff_line = Math.ceil((fish.topLeft.line - fish.end.line) / (frames));
  var diff_column = Math.ceil((fish.topLeft.column - fish.end.column) / (frames));
  var current_position = {
    topLeft: {
      line: parseInt(fish.topLeft.line - diff_line * frame),
      column: parseInt(fish.topLeft.column - diff_column * frame)
    },
    bottomRight: {
      line: parseInt(fish.bottomRight.line - diff_line * frame),
      column: parseInt(fish.bottomRight.column - diff_column * frame)
    }
  };
  console.log(frame);
  console.log(current_position);
  lines.forEach(function(line, number){
    if (number >= current_position.topLeft.line && number <= current_position.bottomRight.line) {
      line = line.substr(0, current_position.topLeft.column - diff_column) + line.substr(current_position.topLeft.column);
      line = line.substr(0, current_position.bottomRight.column) + "M".repeat(diff_column) + line.substr(current_position.bottomRight.column);
      lines[number] = line;
      console.log(line);
      
      
    }
  });

  return lines.join('');
}

fs = require('fs');
fs.readFile('./logo.txt', 'utf8', function(err, logo){
  if (err) {
    return console.log(err);
  }
  twirlTimer(logo);
});