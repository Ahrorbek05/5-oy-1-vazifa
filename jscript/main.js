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
// function words(str) {
//     return str.filter(string => string.length >= 5).map(string => string.charAt(0).toUpperCase() + string.slice(1));
// }
// const str = ['hello world', 'bye', 'dreams', 'bye'];
// const result = words(str);
// console.log(result);

// function words(str) {
//     return str.filter(b => b.length >= 5).map(b => b.charAt(0).toUpperCase() + b.slice(1));
// }
// const res = ['dreams', 'bye', 'hello world'];
// const result = words(res);
// console.log(result); 

// 7.
// const talabalar = [
//     { name: "Ahmadjon", age: 19 },
//     { name: "Ozodbek", age: 21 },
//     { name: "Ravshanbek", age: 18 },
//     { name: "Abduraxmon", age: 24 }
// ];

// function yigirma(talabalar) {
//     const student = talabalar.find(student => student.age > 20);
//     if (student) {
//         return student.name.toUpperCase();
//     } else {
//         return "Talaba topilmadi";
//     }
// }
// const res = yigirma(talabalar);
// console.log(res);

// 8.
// const narxlar = [50, 200, 150, 30, 400, 75, 125];
// function mahsulotNarxi(Narxlar) {
//     const narxlari = Narxlar.filter(narx => narx > 100);
//     const umumiy = narxlari.reduce((sum, narx) => sum + narx, 0);
    
//     return umumiy;
// }
// const summa = mahsulotNarxi(narxlar);
// console.log(summa);

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
// let hodimlarMaoshi = [1800, 2000, 1900, 2200, 2100, 1990];
// let sum = 0;
// function maosh(hodim) {
//     let a = hodim.filter(m < 2000)
//         let b = a.map(sum => sum * 1.1);
//         let c = b.reduce((sum, el) => sum + el, 0);
//         return sum
// }
// let res = maosh(hodimlarMaoshi);
// console.log(res);
// ishlolmadim

// 12.

