var s1 = "abcd";
var s2 = "aad";
var count = 0;

function match(s1, s2) {
    for (let i in s1)
        s2.includes(s1[i]) ? count++ : false;
    console.log(count)
}
match(s1, s2)