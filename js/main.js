/* 
var num = 15;
var num1 = 10;
var isHasHouse = true;

if (num == 5 || isHasHouse) {
    console.log("ну а ты что думал?");
}
else if (num < 10) {
    console.log("OK!");
}
else if (num == 7) {
    console.log("okidoki")
}
else if (num >= 15) {
    console.log("ok!!")
}

console.log("Результат: " + (num + num1));

var stroka = "5";

switch (stroka) {
    case "4":
        console.log("пуременная со значением 4");
        break;
    case "40":
        console.log("пуременная со значением 40");
        break;
    case "word":
        console.log("пуременная со значением word");
        break;
    default:
        console.log("error!");
        break;
}
*/

/*
var arr = [5, true, "stroka", 5.7, 0, -100];
arr[2] = 11000;
console.log(arr.length);
*/

/*
var matrix = [
    [4, 5, 6], ["dadafrw", 45], [100.13123, "qpeoqws"]
];

matrix[1][0] = 0;
console.log(matrix)
*/

/*
for (var i = 100; i > 5; i /= 2) {
    console.log(i);
}
*/

/*
var i = 1000;
while (i > 100) {
    i -= 100;
    console.log(i);
}
*/

/*
var isHasCar = true;
while (isHasCar) {
    console.log(isHasCar);
}
*/

/*
var x = 0;
do {
    console.log(x);
    x++;
}

while (x < 11);
*/

/*
for (var i = 10; i <= 20; i += 2) {
    if (i / 2 == 0)
        continue;
    break;
    console.log(i);

}
*/

/*
var arr = [5, 7, 3, 9, 2, 91];

for (i = 0; i < arr.length; i++) {
    arr[i] *= 2;

    console.log("Элемент: " + i + "-" + arr[i]);
}
*/

//alert("fuck you!!!");

/*
var date = confirm("you daun?");
if (date) {
    alert("hahaa loh");
}
*/

//var data = prompt("скок лет?");
//console.log(data);

/*
var person = null;
if (confirm("ты человек?")) {
    person = alert("Харош");
} else {
    alert("Уберайся отсюда лох");
}
*/

// function summa(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }

// var array = [6, 7, 8, 9, 9, 1,];

// var res = summa(array);
// console.log("Результат: " + res);
// summa(array);

// var num = 10;

// function info() {
//     var num = 20;
//     console.log(num);    
// }

// info();

// console.log(num);

// var counter = 0;

// function onClickButton(el) {
//     counter++;
//     el.innerHTML = "Вы нажали на кнопку " + counter;
//     // el.style.background = "#000";
//     // el.style.color = "#000";

//     el.style.cssText = "border-radius:5px; background:black; color:#fff; border:0;font-size:20px"
// }

// function onInput(el) {
//     if (el.value == "Hello")
//         alert("И тебе привет");
//     console.log(el.value);
// }

// var text = document.getElementById('text');
// text.title = "New text";
// text.style.color = "blue";
// text.style.backgroundColor = "yellow";
// text.innerHTML = "New<br>string";
// console.log(text.title);

// document.getElementById("text").style.color = "red";

// var spans = document.getElementsByTagName("span");

// var spans = document.getElementsByClassName("simple__text");

// for (var i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }

// document.getElementById('main_form').addEventListener("submit", checkForm);

// function checkForm(event) {
//     event.preventDefault();
//     var el = document.getElementById("main_form");

//     var name = el.name.value;
//     var pass = el.pass.value;
//     var repass = el.repass.value;
//     var state = el.state.value;

//     var fail = "";

//     if (name == "" || pass == "" || state == "")
//         fail = "заполните все поля";
//     else if (name.length <= 3 || name.length > 50)
//         fail = "Введите коректное имя";
//     else if (pass != repass)
//         fail = "Пароли должны совпадать";
//     else if (pass.split("@").length > 1)
//         fail = "Error";

//     if (fail != "") {
//         document.getElementById("Error").innerHTML = fail;
//         return false;
//     } else {
//         alert("Все данные коректно заплоненны");
//         window.location = "https://itproger.com";
//     }
// }

// var id = setInterval(my_func, 1000);
// var counter = 0;

// function my_func() {
//     counter++;
//     console.log("Counter: " + counter);

//     if (counter == 3)
//     clearInterval(id)
// }


// setInterval(function () {
//     counter++;
//     console.log("Counter: " + counter);
// }, 1000);

// setTimeout(function () {
//     console.log("timer is working!")
// }, 2000);

// setTimeout(my_func, 2000);

// function my_func() {
//     console.log("timer is working!")
// }

// var date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log("Дата: " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear());

// var arr = [5, 7, 6, 0];
// console.log(arr.join(", "));
// console.log(arr.reverse())
// console.log(arr.sort())
// var stroka = arr.reverse().join(", ");

// console.log(stroka.split(", "));

// class Person {
//     constructor(name, age, happiness) {
//         this.name = name;
//         this.age = age;
//         this.happiness = happiness;
//     }

//     info() {
//         console.log("Person: " + this.name + ". Age: " + this.age);
//     }
// }


// var alex = new Person("Alex", 27, true);
// var bob = new Person("Bob", 23, false);

// alex.info();
//     bob.info();
//     console.log(alex.name + " and " + bob.name);