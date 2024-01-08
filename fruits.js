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
// Write the code as shown in the video below:
//  QuerySelector and QuerySelectorAll usd
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';


const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

const fruits =  document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.margin  ='30px';
fruits.style.padding  ='30px';
fruits.style.width  ='50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruit =  document.querySelectorAll('.fruit');
for(let i =0; i<fruit.length; i++){
  fruit[i].style.backgroundColor = 'white';
  fruit[i].style.margin = '10px';
  fruit[i].style.padding = '10px';
  fruit[i].style.borderRadius = '5px';
}
const oddSelectors = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i =0; i<oddSelectors.length; i++){
  oddSelectors[i].style.backgroundColor = 'lightgray';
  }
const evenSelectors = document.querySelectorAll('.fruit:nth-child(even)');
  for(let i =0; i<evenSelectors.length; i++){
  evenSelectors[i].style.backgroundColor = 'red';
     evenSelectors[i].style.color = 'white';
  }                                      


// Write answer to the questions asked below:
// Create elements
// Write your code below:
const head3 = document.createElement('h3');
const headNode = document.createTextNode('Buy high quality organic fruits online');
head3.appendChild(headNode);
head3.style.fontStyle = 'italic';

const div = document.getElementsByTagName('div');
const firstDiv = div[0];
firstDiv.appendChild(head3);

const para = document.createElement('p');
const paraNode = document.createTextNode('Total fruits: 4');
para.appendChild(paraNode);

const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];

const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para,fruits);
para.id = 'fruits-total';
