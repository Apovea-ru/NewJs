/* Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:

1. Получить все товары, у которых есть фотографии, можете использовать метод filter 

https://mzl.la/2qROQkT

2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать

метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например

здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.

const products = [

{

id: 3,

price: 127,

photos: [

"1.jpg",

"2.jpg",

]

},

{

id: 5,

price: 499,

photos: []

},

{

id: 10,

price: 26,

photos: [

"3.jpg"

]

},

{

id: 8,

price: 78,

},

];

В первом пункте у вас должен получиться такой массив из двух элементов https://yadi.sk/i/9IBcmLEP6nId9w

Во втором пункте массив должен стать таким https://yadi.sk/i/-xKIq_prDx3Txg
*/

'use strict';
// 1
const products = [{ id: 3, price: 127, photos: [ "1.jpg", "2.jpg",]},
    
    { id: 5, price: 499, photos: []},   
    { id: 10, price: 26, photos: [ "3.jpg" ]},
    { id: 8, price: 78,},];

console.log(products[0].photos.length);

let newList = products.filter(function(listNew) {
    if (typeof listNew.photos !== 'undefined'){
        return (listNew.photos.length>0);
    }
});

console.log(newList);

// 2

let listSorted = products.sort(function(a,b) {
    if (a.price > b.price) {
        return 1; }
    if (a.price < b.price) {
        return -1; }
    return 0; 
})

console.log(listSorted);



