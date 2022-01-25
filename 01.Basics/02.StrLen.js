function strLen(first, second, third){
    let firstLen = first.length;
    let secondLen = second.length;
    let thirdLen = third.length;

    let result = firstLen + secondLen + thirdLen;

    console.log(result);
    console.log(Math.floor(result / 3));
}

strLen('chocolate', 'ice cream', 'cake');