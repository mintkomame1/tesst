'use strict';

let small = prompt('好きな英語を入力してください。\n二つ目の文字を入力しましす。', '');
let index = 1;
let sentence = '';

for(let char of small){
    if(index % 2 == 0){
        sentence += char.toUpperCase();
    } else {
        sentence += char;
    }
    index++;
}
console.log(sentence);