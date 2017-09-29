 function getRandomArbitrary(min, max) {
     return Math.random() * (max - min) + min;
 }

 export default {
     excludeFromWindowsArray: (arr, element) => {
         return arr.filter(el => {
             return el[0] !== element;
         });
     },

     generateId: (len) => {
         const DICTIONARY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

         let text = "";

         for (var i = 0; i < len; i++){
             text += DICTIONARY.charAt(Math.floor(Math.random() * DICTIONARY.length));
         }

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