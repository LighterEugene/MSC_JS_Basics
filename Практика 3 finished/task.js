  
  body = prompt('какой цвет будет у страницы?');
document.body.style.backgroundColor=body; 

const col = prompt('какой будет цвет текста на страницы?');
const page = document.querySelector('.page'); 
page.style.color = col;

const name = prompt('как зовут человека,который вас вдохновляет?');	
const person = document.querySelector('.name');
person.innerHTML = name;

const image = document.querySelector('img');
image.setAttribute('src', prompt('Введите адрес картинки'));

const abc = prompt('Введите текст страницы');
const text = document.querySelector('.shortBio');
text.innerHTML = abc; 

const shortBio = document.querySelector('.shortBio');
shortBio.className += ' animated'; 