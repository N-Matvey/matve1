
//первое задание
function reverseStr(str) {
    var newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
alert(reverseStr(prompt("введите слово")));



//второе задание
const arr = [10, 20];

function multiple(items){
    return items.reduce((current, item) => (current + item)) / items.length;
}

console.log(multiple(arr))
