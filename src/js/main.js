
const links = document.getElementsByTagName('nav')[0];
links.addEventListener('click',function(e){
  console.log('here are some links')
});

const name = document.querySelector('.name');
name.addEventListener('click',function(e){
  alert(' name and intro')
});

document.addEventListener('load',loadThePage());
function loadThePage(){
  console.log('Welcome to Amazing Company X! ')
};

bodyElement = document.getElementsByTagName('body')[0];
bodyElement.addEventListener('mouseover',function(e){
  console.log('The content!')
})

function toggle(){
  document.body.classList.toggle('dark');
  }
  