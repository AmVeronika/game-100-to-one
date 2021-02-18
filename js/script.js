var card = document.querySelectorAll('.mistake-block-back');
var front = document.querySelectorAll('.mistake-block-front');

for (i = 0; i < card.length; i++) {
   card[i].addEventListener("click", function () {
      this.classList.toggle('mistake-back');
   });
};

/* 

окно с ошибками №1

*/

var mistakeLeft = document.querySelectorAll('.mistakeLeft');
var windLeft = document.querySelector('.windLeft');
var countLeft = 3;

for (i = 0; i < mistakeLeft.length; i++) {
   mistakeLeft[i].addEventListener("click", function () {
      this.classList.toggle('mistake_yellow');
      if (this.classList.contains('mistake_yellow')) {
         countLeft--;
         if (countLeft > 0) {
            windLeft.innerHTML = countLeft;
         } else {
            windLeft.innerHTML = 0;
         }
      } else {
         countLeft++;
         windLeft.innerHTML = countLeft;
      }
   });
};

/* 

окно с ошибками №2

*/

var mistakeRight = document.querySelectorAll('.mistakeRight');
var windRight = document.querySelector('.windRight');
var countRight = 3;

for (i = 0; i < mistakeRight.length; i++) {
   mistakeRight[i].addEventListener("click", function () {
      this.classList.toggle('mistake_yellow');
      if (this.classList.contains('mistake_yellow')) {
         countRight--;
         if (countRight > 0) {
            windRight.innerHTML = countRight;
         } else {
            windRight.innerHTML = 0;
         }
      } else {
         countRight++;
         windRight.innerHTML = countRight;
      }
   });
};

