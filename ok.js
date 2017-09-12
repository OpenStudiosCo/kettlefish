var prompt = require('prompt'),
    options = {
      'Create': [
        'Application',
        'Game',
        'Website'
      ],
      'Status': [],
      'Util': [
        'Delete and re-install NPM packages',
        'Delete and rebuild CSS',
        'Watch for changes and regenerate cache',
        'Debug using Kettlefish Hook'
      ]
    },
    menu_options = {},
    rendered = [];

fs = require('fs');
fs.readFile('./logo.txt', 'utf8', function(err, logo){
  if (err) {
    return console.log(err);
  }
  console.log('\n\n');
  console.log(logo);
  console.log('\n' + '\='.repeat(100));
  console.log('\n\t\t\tBehold, we are the Kettlefish! Tell us your desire.\n');
  console.log('\='.repeat(100));
  console.log(createMenu());
  handleInput();
});

function handleInput() {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please select an option from the menu above. (e.g. 1 or 3.2) ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${menu_options[answer]}`);

    rl.close();
  });
}

function createMenu() {
  var menu = '', item_no = 1;
  for (var option in options) {
    menu += "\t\t" + item_no + ". " + option + "\n";
    menu_options[item_no.toString()] = option;
    if (options[option].length > 0) {
      var sub_item_no = 1;
      for (var sub_item in options[option]) {
        menu_options[item_no.toString() + "." + sub_item_no.toString()] = options[option][sub_item];
        menu += "\t\t " + item_no + "." + sub_item_no + ". " + options[option][sub_item] + "\n";
        sub_item_no++;
      }
    }

    item_no++;
  }
  return menu;
}