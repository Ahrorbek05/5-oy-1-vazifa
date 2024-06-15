// 1.
// function toUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(toUpperCase('ahmadjon'));

// 2.
// const toUpperCasestr = function(arg) {
//   let res;
//   res = arg.toUpperCase();

//   return res;
// }
// console.log(toUpperCase("hello world"));

// 3.
// const toUpperCase = (arg) => {
//     let res;
//     res = arg.toUpperCase();

//     return res;
//   }
//   console.log(toUpperCase("hello world"));


// 2.
// function includes(a, n) {
//     return a.includes(n);
// }
// const a = "hello, world!";
// const n = "bye";
// console.log(includes(a,n));

// const includes = function(arg) {
//     let res;
//     res = arg.includes("substring")

//     return res;
// }
// console.log(includes("substring string str"));


// const includescheck =  (arg) => {
//     let res;
//     res = arg.includes("substring")

//     return res;
// }
// console.log(includes("substring substr string"));

// 3.
// function replaceAll(str) {
//     return str.replace('JavaScript', 'JS');
// }
// console.log(replaceAll('JavaScript dasturlash tili haqida qanday malumotga egasiz?'));


// const replaceAll = function(arg) {
//     let res;
//       res = arg.replaceAll("JavaScript","JS")
//     return res;
//   }
//   console.log(replaceAll('JavaScript dasturlash tili haqida qanday malumotga egasiz?'));


// const replaceAll =  (arg) => {
//     let res;
//       res = arg.replaceAll("JavaScript","JS")
//     return res;
//   }
//   console.log(replaceAll('JavaScript dasturlash tili haqida qanday malumotga egasiz?'));

// 4.
// function almashtirish(str) {
//     let a = str.split(' ');
//     let b = a.reverse();
//     let ab = b.join(' ');
//     return ab;
// }
// console.log(almashtirish('gap! nima Ahmadjon'));


// const almashtirish = function(arg) {
//     let res;
//     res = arg.split("");
//     res = res.reverse();
//     res = res.join("");

//     return res;
// }
// console.log(almashtirish("gap! nima Ahmadjon"));


// const almashtirish =  (arg) => {
//     let res;
//     res = arg.split("");
//     res = res.reverse();
//     res = res.join("");

//     return res;
// }
// console.log(almashtirish("gap! nima Ahmadjon"));


// 5.
// function olibTashlash(str) {
    // return str.trim();
// }
// console.log(olibTashlash('      salom       '));


// const olibTashlash = function(arg) {
//     let res;
//     res = arg.trim()

//     return res;
// }
// console.log(olibTashlash("        salom        "));


// const olibTashlash =  (arg) => {
//     let res;
//     res = arg.trim()

//     return res;
// }
// console.log(olibTashlash("       salom        "));

// 6.
// let arr = ['apple', 'bye', 'guys', 'hello', 'world'];
// function strArray(arr) {
//     let res = arr.filter(function (value) {
//         return value.length >= 5
//     })
//     res = res.map(function (value) {
//         value = value.replace(value[0], value[0].toUpperCase())
//         return value;
//     })

//     return res
// }
// console.log(strArray(arr));

// 7.
// const talabalar = [
//     { name: "Ahmadjon", age: 19 },
//     { name: "Ozodbek", age: 21 },
//     { name: "Ravshanbek", age: 18 },
//     { name: "Abduraxmon", age: 24 }
// ];

// const findStudents = (arr) => {
//     let result = arr.find(function (value) {
//         return value.age > 20
//     })
//     if(result){
//         return result.name.toUpperCase();
//     } else {
//         return 'Yoshi 20 dan katta talaba mavjud emas'
//     }
// }
// console.log(findStudents(talabalar));

// 8.
// let prices = [10, 120, 200, 100, 50];
// let sum = 0;
// prices.forEach(el => {
//     if ( el > 100){
//         sum += el
//     }
// })
// console.log(sum);

// 9.
// const num = [10, 101, 50, 51, 60];
// function obs(arg){
//     let a = num.every(value => value > 0);
//     let b = num.some(value => value > 100);
//     if (a){
//         console.log('Barcha sonlar musbat');
//     } else {
//         console.log('Musbat bolmagan sonlar bor');
//     }
//     if(b){
//         console.log('Katta son bor');
//     }
// }
// obs(num);

// 10.
// let a = [2, 5, 7, 9, 11];
// function kvadratHisoblash(arr) {
//     let b = arr.map(el => el ** 2);
//     return b;
// }
// function hisoblaymiz(arr) {
//     arr.forEach(el => {
//         console.log(el);
//     });
// }
// let kvadrat = kvadratHisoblash(a);
// hisoblaymiz(kvadrat);

// 11.
// let arr = [ 1200, 2200, 5000, 3000, 900, 1500];
// function salary(arr) {
//     let res = arr.map(function (value) {
//         if( value >= 2000){
//             value = Math.floor(value * 1.1)
//         }
//         return value
//     })
//     return res;
// }
// console.log(salary(arr));

// 12.
// let student = [
//     {name: 'Ahmadjon', age: 18, ball: 85 },
//     {name: 'Abdumajid', age: 21, ball: 80 },
//     {name: 'Ozodbek', age: 22, ball: 75 },
//     {name: 'Javohir', age: 15, ball: 65 },
// ];

// function studentFind(arr) {
//     let res = arr.map(function (value) {
//         return value.ball >= 80
//     })
//     let succsess = arr.filter(function (value) {
//         return value.ball >= 80 
//     })

//     console.log(succsess);
//     return [res.name, res.age]
// }
// console.log(studentFind(student));
