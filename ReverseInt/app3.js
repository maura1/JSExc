function revInt(int) {
    const revIntg = int.toString().split('').reverse().join('');
    return parseInt(revIntg) * Math.sign(int); //to accomadate for negtive numbers
}
console.log(revInt([-123456789]));
