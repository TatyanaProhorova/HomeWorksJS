let n = Math.floor(Math.random() * 1000);
console.log(n);
let flag = 0;
while (flag != 1) {
    let a = prompt("guess a number between 0 and 999");
        if (isNaN(a+1)) {
        alert("not a number");
        }
        else if (a > n) {
            alert("secret number is less then yours!");
        }
        else if (a < n) {
            alert("secret number is greater then yours!");
        }
        else if (a == n) {
            alert("right you are!");
            flag = 1;
        }
}
