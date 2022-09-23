const someAll =document.querySelectorAll('section');
for(const section of someAll){
    section.style.border='2px solid red';
    section.style.margin='10px';
    section.style.padding='10px';
}
const className =document.getElementsByClassName('container');
for(const classStyle of className){
    classStyle.style.color='red';
}
const titles =document.getElementById('power');
titles.classList.add('added')