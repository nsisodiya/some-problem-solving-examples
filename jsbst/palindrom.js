function isPalindrome(str) {
    console.clear();
    str = str.toLowerCase().replace(/[^a-zA-Z]/g, '');
    console.log("-->", str);
    var revStr = str.split("").reverse().join("");
    console.log("--->", str === revStr);
    
    return str === revStr;
}

isPalindrome("Cigar? ??? %% Toss it in a can. It is so tragic")