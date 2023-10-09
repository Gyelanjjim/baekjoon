function solution(phoneBook) {
    return !phoneBook.sort().some((_, i) => {
        if(i === phoneBook.length - 1) return false;
        return phoneBook[i+1].startsWith(phoneBook[i]);   
    })
}