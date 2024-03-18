const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  q1: 'What\'s your name? Nicknames are also acceptable :) ', 
  q2: 'What\'s an activity you like doing? ', 
  q3: 'What do you listen to while doing that? ',
  q4: 'Which meal is your favourite (eg: dinner, brunch, etc.)? ',
  q5: 'What\'s your favourite thing to eat for that meal? ',
  q6: 'Which sport is your absolute favourite?',
  q7: 'What is your superpower? In a few words, tell us what you are amazing at! '
}

let questionKeys = Object.keys(questions);
let questionVals = Object.values(questions);

function askQ(index, answer) {
  answer += answer;
  if (index >= questionKeys.length) {
    console.log(`Your answer: ${answer}`);
    rl.close(); 
  }

  rl.question(questionVals[index], (answer) => {
    // console.log(`Your answer: ${answer}`);
    askQ(index + 1, answer);
  });
}

askQ(0);

