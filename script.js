function firstWord(s) {
    let str = s.trim();
    if (str === '') {
        return '';
    } else {
        let words = str.split(' ');
        return words[0];
    }
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
