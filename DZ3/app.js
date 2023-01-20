var i = 0;
while (i <= 20){
    i++;
    if (i % 2 === 0) console.log(i)
}


var num1 = 0;
do {
    var num2 = Number(prompt(' введите число - '))
    if (num2 >= 0){
        var num = num1 += num2;
    }
}while(num2 >= 0);
console.log('сумма равна - ', num)