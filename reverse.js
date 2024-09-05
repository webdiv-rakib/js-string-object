const sentence = 'I am learning Web Dev.';
let reverse = ''
for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

// ignore this solution
let rev = '';
for (let i = 0; i < sentence.length; i++) {
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}

// shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);