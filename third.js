/*  Перед вами находится массив с продуктами, сегодня  распродажа и вам нужно на каждый!

товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :

const products = [

{

id: 3,

price: 200,

},

{

id: 4,

price: 900,

},

{

id: 1,

price: 1000,

},

];*/

'use strict';

const products = [ { id: 3, price: 200,}, { id: 4, price: 900,}, { id: 1, price: 1000,},];

let newlist = products.map(function (listnew) {
        console.log(listnew);
        console.log(typeof(listnew.price));
        listnew.price = listnew.price*0.85;
        return listnew;
});


console.log(newlist);
