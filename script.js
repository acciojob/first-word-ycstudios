function firstWord(str) {
    let trimmed = str.trim();
    if (trimmed === '') {
        return '';
    } else {
        let words = trimmed.split(' ');
        return words[0];
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
