/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = { name:'William Osiakwan',
                photo:'images/dv photo.jpg',
                favoriteFoods:['Rice','Steak','Fufu with meat','Jollof Rice'],
                hobbies:['Playing video games','Programming'],
                placesLived:[],
    };

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place:'Calabar, Nigeria', length:'2 years'});
myProfile.placesLived.push({place:'Accra, Ghana', length:'5 years'});
myProfile.placesLived.push({place:'Tema, Ghana', length:'6 months'});



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent= myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', `Photo of ${myProfile.name}`);

/* Favorite Foods List*/
const favoriteFoodsList = document.querySelector('#favorite-foods'); 

myProfile.favoriteFoods.forEach((food) => { 
  const listItem = document.createElement('li'); 
  listItem.textContent = food; 
  favoriteFoodsList.appendChild(listItem); 
});

/* Hobbies List */
const hobbies = document.querySelector('#hobbies');
myProfile.hobbies.map((myhobby)=>{
  const myelement = document.createElement('li');
  myelement.textContent=myhobby;
  hobbies.appendChild(  myelement);
}); 

/* Places Lived DataList */
const placesLived = document.querySelector('#places-lived');
const myPlaces = myProfile.placesLived;
myPlaces.map((place) => {

  const myElementPlace= document.createElement('dt');
  myElementPlace.textContent=place.place;

  const myElementlength= document.createElement('dd');
  myElementlength.textContent=place.length;

  placesLived.appendChild(myElementPlace);
  placesLived.appendChild(myElementlength);
 
});


