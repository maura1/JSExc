function resStr(str) {
    const strArr = str.split(''); //no space
    strArr.reverse();
    return strArr.join('');
}
console.log(resStr('hi there!'));

//Using arrow functions

const strRev = (str1) => str1.split('').reverse().join('');
console.log(strRev('well howdy!'));

//for loop

function strRev3(str2) {
    let revStr1 = '';
    for (let i = 0; i < str2.length; i++) {
        revStr1 = str2[i] + revStr1;
    }
    return revStr1;
}
console.log(strRev3('Howdy'));

//for of loop
function strRev4(str4) {
    let revStr4 = '';
    for (let char of str4) {
        revStr4 = char + revStr4;
    }
    return revStr4;
}
console.log(strRev4('Madman'));

//forEach- only works on arrays

function strRev5(str5) {
    let revStr5 = '';
    str5.split('').forEach((char) => (revStr5 = char + revStr5));
    return revStr5;
}
console.log(strRev5('Reversing this!'));

//reduce ()

const revStr6 = (str6) => str6.split('').reduce((rev, char) => char + rev, '');
console.log(revStr6('reverse again'));
