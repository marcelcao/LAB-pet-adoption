const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog".charAt(0).toUpperCase() + "dog".slice(1),
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog".charAt(0).toUpperCase() + "dog".slice(1),
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog".charAt(0).toUpperCase() + "dog".slice(1),
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog".charAt(0).toUpperCase() + "dog".slice(1),
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog".charAt(0).toUpperCase() + "dog".slice(1),
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog".charAt(0).toUpperCase() + "dog".slice(1),
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog".charAt(0).toUpperCase() + "dog".slice(1),
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog".charAt(0).toUpperCase() + "dog".slice(1),
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat".charAt(0).toUpperCase() + "cat".slice(1),
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino".charAt(0).toUpperCase() + "dino".slice(1),
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }
  ];

// this function takes a specified div ID and renders the html for it
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  //this variable tells the function to find all of the instances within the HTML of the specific ID passed through it
  selectedDiv.innerHTML = htmlToRender;
  //this statement takes the variable/method above and assigns the innerHTML method to it which enables the selected div to be assigned the html given to it...which is why there's an equal sign meaning that you're assigning the object method to mean htmlrender, which becomes a parameter in the function renderToDom
}

const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    if (pet.type === 'Dog') {
      domString += `<div class="dog" style="width: 18rem;">
      <div class="delete-div-dog">
      <button class="delete-button" id="delete--${pet.id}">X</button>
      </div>
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p class="card-text-head">Color: ${pet.color}</p>
      <p class="card-text-head">Special Skill: ${pet.specialSkill}</p>
      <p class="card-text-head">Type: ${pet.type}</p>
    </div>
  </div>`
    } else if (pet.type === 'Cat') {
      domString += `<div class="cat" style="width: 18rem;">
      <div class="delete-div-cat">
      <button class="delete-button" id="delete--${pet.id}">X</button>
      </div>
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p class="card-text-head">Color: ${pet.color}</p>
      <p class="card-text-head">Special Skill: ${pet.specialSkill}</p>
      <p class="card-text-head">Type: ${pet.type}</p>
    </div>
  </div>`
    } else if (pet.type === 'Dino') {
      domString += `<div class="dino" style="width: 18rem;">
      <div class="delete-div-dino">
      <button class="delete-button" id="delete--${pet.id}">X</button>
      </div>
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p class="card-text-head">Color: ${pet.color}</p>
      <p class="card-text-head">Special Skill: ${pet.specialSkill}</p>
      <p class="card-text-head">Type: ${pet.type}</p>
    </div>
  </div>`
    } else {
      domString += `<div class="card" style="width: 18rem;">
    <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p class="card-text">'Color: ${pet.color}'</p>
      <p class="card-text">${pet.specialSkill}</p>
      <p class="card-text">Type: ${pet.type}</p>
      <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`
    }
  }
  renderToDom("#app", domString);
}
cardsOnDom(pets);

// note that ${pet.id} not pets because we're looping through pets - so its like pie of pies - pet was what i defined as the part of my whole in the beginning.

const filter = (array, typeString) => {
  const typeArray = []; 
  // this is an empty pair of brackets to suggest that an array is going inside here - arrays =brackets
  for (const pet of array) {
    if (pet.type === typeString) {
      typeArray.push(pet);
    }
  }
return typeArray;
}

const showAllCats = document.querySelector("#cats");
const showAllDogs = document.querySelector("#dogs");
const showAllDino = document.querySelector("#dino");
const showAllPets = document.querySelector("#all");

showAllCats.addEventListener('click', () => {
  const allCats = filter(pets, 'Cat');
  cardsOnDom(allCats);
});

showAllDogs.addEventListener('click', () => {
  const allDogs = filter(pets, 'Dog');
  cardsOnDom(allDogs);
});

showAllDino.addEventListener('click', () => {
  const allDino = filter(pets, 'Dino');
  cardsOnDom(allDino);
});

showAllPets.addEventListener('click', () => {
  cardsOnDom(pets);
});

const form = document.querySelector('form');

const createNewPet = (e) => {
e.preventDefault(); 
  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector('#name').value,
    color: document.querySelector('#color').value,
    specialSkill: document.querySelector('#specialSkill').value,
    type: document.querySelector('input[name = "radio-type"]:checked').value,
    imageUrl: document.querySelector('#imageUrl').value,
  }
  pets.unshift(newPetObj);
  cardsOnDom(pets);
  form.reset();
}

form.addEventListener('submit', createNewPet);

const app = document.querySelector('#app');

app.addEventListener('click', (e) => {
  alert(e.target.id);
  //creates the alert pop up, but it will only say delete--undefined until we define the ID
  const [, id] = e.target.id.split("--");
  //this line targets the specific id linked to the card we're trying to delete back to alert pop-up
  const index = pets.findIndex(pet => pet.id === Number(id));
  //now we need to loop through our cards to find the specific card we want to delete using the findindex method. 
  //pets.findIndex finding the index that's on the array of pets 
  //pet, pet.id (in the example they used e) but this is "taco" - it can be whatever we want it to be, think of the syntax of a for of loop. "the pie of pies"
  // === Number(id) : what this means is after it loops through all the id's under pets array, we want the found index to equal in TYPE and VALUE with the ID that was definited in the delete button html. the delete button html is "delete--${pets.id}" which is technically a string. however, we want to make it a number, which is why we're gonna pass the ID of that found index into the number method to convert the string to a number
  pets.splice(index, 1);
  //now that we found the index of the card we want to delete, we need to "cut" it out from the our index of objects. by using splice what it means is splice(start, deletecount, item1, etc) so in this case we're saying start the splice with the given index, and delete 1 card.
  cardsOnDom(pets);
  //now that everything is established, we just need to re-render the cards again to show the updated set with the deleted card.
})
const startApp = () => {
  cardsOnDom(pets);
  // events(); // ALWAYS LAST
}
startApp();
// does this regenerate the cards again? need ryan to re-explain.
