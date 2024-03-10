/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'William Osiakwan';
let date = new Date();
let currentYear = date.getFullYear();
let profilePicture = 'images/dv photo.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName}</strong>`;
year.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);
 


/* Step 5 - Array */
let myfavoriteFoods = ['Rice','Pizza','Steak','Fufu and Peanut Soup','Kenkey'];
foodElement.innerHTML += `${myfavoriteFoods}`;

let anotherFavoriteFood='Tacos';
myfavoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${myfavoriteFoods}`;
myfavoriteFoods.shift();
foodElement.innerHTML += `<br>${myfavoriteFoods}`;
myfavoriteFoods.pop();
foodElement.innerHTML += `<br>${myfavoriteFoods}`;
