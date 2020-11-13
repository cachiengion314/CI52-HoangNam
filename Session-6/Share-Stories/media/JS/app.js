function merge(str1, str2) {

    var a = str1.split("");

    var b = str2.split("");

    var mergedString = '';


    for (var i = 0; i < a.length || i < b.length; i++) {
        if (i < a.length)
            mergedString += a[i];
        if (i < b.length)
            mergedString += b[i];
    }
    return mergedString;

}
console.log(merge('abc', '123'));
console.log(merge('abc', '0123'));
console.log(merge('abcd', '123'));