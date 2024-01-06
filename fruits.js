// Write your code below:
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = "Fruit World";
mainHeading.style.color =  'orange';

const mainHeader = document.getElementById('header'); 
mainHeader.style.backgroundColor ='green';

mainHeader.style.borderBottom ='3px solid orange';

const basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';

const greeting = document.getElementById('thanks');
greeting.innerHTML ='<p>Please visit us again</p>';

// --Bg color yellow-->
const fruitLists = document.getElementsByClassName('fruit');
fruitLists[2].style.backgroundColor = 'yellow';
for (let i = 0; i < fruitLists.length; i++) {
      fruitLists[i].style.fontWeight = 'bold';
    }
// list color & font changed
const list = document.getElementsByTagName('li');
list[3].style.color  ='blue';
for(let i =0; i<list.length;i++){
    list[i].style.fontStyle = 'italic';
}
