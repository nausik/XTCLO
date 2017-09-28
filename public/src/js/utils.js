 function getRandomArbitrary(min, max) {
     return Math.random() * (max - min) + min;
 }

 export default {
     deleteFrom2DArray: (arr, element) => {
         return arr.filter(el => {
             return el[0] !== element;
         });
     },

     generateId: () => {
         let text = "";
         const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

         for (var i = 0; i < 5; i++)
             text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));

         return text;
     },

     getNewWindowCoordinate: (axis) => {
         let size = 0;

         if (axis === 'x') {
             size = window.innerWidth;
         } else if (axis === 'y') {
             size = window.innerHeight;
         }

         return Math.floor(size / 3 + getRandomArbitrary(0, 150));
     }
 }