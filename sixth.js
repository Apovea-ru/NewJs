/* Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,

только у вашей горки должно быть 20 рядов, а не 5:

x

xx

xxx

xxxx

xxxxx
*/

'use strict';

let a = 'x';

for (let i = 0; i<20 ; i++) {
    if (i%2 == 0) {
        console.log(a);
        a +='x';         
    } else {
        console.log('');
    };

};   