'use strict'


function unique(word){
    
    var wordArray = [...word];
    
    for (var i=0;i<wordArray.length;i++){
        if (word.indexOf(wordArray[i]) != word.lastIndexOf(wordArray[i])){
            return false;
        }
    }
    return true;
}

console.log(unique("hello"));
console.log(unique("zasdfghz"));
console.log(unique("asdfghhjkl"));
console.log(unique("fghjklnbvcmxz092345"));