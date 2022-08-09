// Write your code here!
const main = document.getElementById('main');
main.remove(); 

//const newHeader = document.createElement('header');
//newHeader.setAttribute('id', 'h1#victory')

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', "victory")
newHeader.className = "h1#victory";


newHeader.textContent = 'YOUR-NAME is the champion';

