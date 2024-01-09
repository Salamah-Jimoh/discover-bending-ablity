let cards = [
  {
    "image":"/assets/katara.jpg",
    "title": 'WATER BENDING',
    "text": 'Waterbending, a fluid and versatile bending art, allows practitioners to manipulate water in various forms. Skilled waterbenders can shape water into powerful streams, solidify it into ice, or turn it into mist. Drawing inspiration from the push and pull of the moon, waterbending embodies adaptability and resilience. Waterbenders often use their abilities defensively, creating barriers and healing wounds. Their connection to the ebb and flow of nature reflects the harmony essential to mastering this bending discipline',
  },
  {
    "image":"/assets/toph.jpg",
    "title": 'EARTH BENDING',
    "text": 'Earthbending, a grounded and steadfast bending art, empowers practitioners to manipulate the earth beneath their feet. Earthbenders exhibit strength and resilience, shaping rock and soil with precise movements. They can create defensive walls, launch boulders, and even sense vibrations in the ground. Rooted in a philosophy of stability and endurance, earthbending aligns with the solid foundation of the earth itself. Its practitioners often display a tough and determined demeanor, embodying the unyielding force of the element they command',
  },
  {
    "image":"/assets/zuko1.jpg",
    "title": 'FIRE BENDING',
    "text": 'Firebending, an intense and aggressive bending form, grants its wielders control over fire and heat. Firebenders create and manipulate flames with dynamic, forceful movements, unleashing both destructive and controlled fire. Rooted in the drive for power and passion, firebending practitioners can generate heat, propel fiery projectiles, and even redirect lightning. The discipline embodies strength and determination, often aligning with the fiery nature of its wielders. Mastery of firebending requires balance, as harnessing its power carries the risk of becoming consumed by its intensity',
  },
  {
    "image":"/assets/aang.jpg",
    "title": 'AIR BENDING',
    "text": 'Airbending is a mystical and agile elemental art in the world of bending, granting its practitioners the ability to manipulate the air around them. Airbenders harness the power of wind, using swift and graceful movements to create powerful gusts, soar through the skies, and even control the very breath in their lungs. Guided by the philosophy of freedom and non-aggression, airbenders are known for their evasive maneuvers and a deep connection to the spiritual aspects of their craft',
  }
]

let myForm = document.querySelector('form');
let selectedOne;
let selectedTwo;
let selectedThree;
let selectedFour;
let selectedFive;
let selectedSix;
let selectedSeven;
const radioButtons = document.querySelectorAll('input[type = "radio"]');
radioButtons.forEach(button=>{
    button.addEventListener('click', (event)=>{
        const category = event.target.name;
        handleRadioClick(event, category)
    })
}) 
myForm.addEventListener('submit', submitForm)
// get values
function handleRadioClick (event, category){
  switch(category){
    case 'one':
      selectedOne = event.target.value;
      break;
    case 'two':
      selectedTwo = event.target.value;
      break;
    case 'three':
      selectedThree = event.target.value;
      break;
    case 'four':
      selectedFour = event.target.value;
      break;
    case 'five':
      selectedFive = event.target.value;
      break;
    case 'six':
      selectedSix = event.target.value;
      break;
    case 'seven':
      selectedSeven = event.target.value;
      break;
    default:
      console.log('no answer was chosen');
      break;       
  }
}


// function to get answers in a array
function getSelectedAnswers(){
    const selectedValues =[];
    selectedValues.push(selectedOne, selectedTwo, selectedThree, selectedFour, selectedFive, selectedSix, selectedSeven)
    return selectedValues;
}

// find most frequently occuring answer
function getFrequentAnswer(arr){
  let mf = 1;
  let m = 0;
  let item;
  for(let i = 0; i<arr.length; i++){
      for(let j=i; j<arr.length; j++){
          if(arr[i] === arr[j]){
            m++;
          }
          if(m > mf){
            mf = m;
            item = arr[i]
          }
      } 
      m = 0
  }
  return item;
}

// function to change Display based on options

function changeDisplay(){
  let selectedValues = getSelectedAnswers();
  let value = getFrequentAnswer(selectedValues);
  let card = document.querySelector('.card');
  let cardHead = document.querySelector('.card-h2');
  let cardImage= document.querySelector('.card-image');
  let cardText = document.querySelector('.card-text');
  let cardLink= document.querySelector('.card-link');
  switch(value){
    case 'A':
      card.classList.add('water-bg');
      cardImage.setAttribute("src", cards[0].image);
      cardHead.innerHTML = cards[0].title;
      cardHead.classList.add('water-text');
      cardText.innerHTML = cards[0].text;
      cardLink.classList.add('water-link');
      break;
    case 'B':
      card.classList.add('earth-bg');
      cardImage.setAttribute("src", cards[1].image);
      cardHead.innerHTML = cards[1].title;
      cardHead.classList.add('earth-text');
      cardText.innerHTML = cards[1].text;
      cardLink.classList.add('earth-link');
     break;
    case 'C':
      card.classList.add('fire-bg');
      cardImage.setAttribute("src", cards[2].image);
      cardImage.classList.add('top');
      cardHead.innerHTML = cards[2].title;
      cardHead.classList.add('fire-text');
      cardText.innerHTML = cards[2].text;
      cardLink.classList.add('fire-link');
     break;
    case 'D':
      card.classList.add('air-bg');
      cardImage.setAttribute("src", cards[3].image);
      cardImage.classList.add('top');
      cardHead.innerHTML = cards[3].title;
      cardHead.classList.add('air-text');
      cardText.innerHTML = cards[3].text;
      cardLink.classList.add('air-link');
      break;
    default:
      cardHead.innerHTML =' AVATAR';
      break;
   }
}
// Change questions

let formFieldOne = document.getElementById('form-field-1');
let formFieldTwo = document.getElementById('form-field-2');
let formFieldThree = document.getElementById('form-field-3');
let formFieldFour = document.getElementById('form-field-4');
let formFieldFive = document.getElementById('form-field-5');
let formFieldSix = document.getElementById('form-field-6');
let formFieldSeven = document.getElementById('form-field-7');
let nameField = document.getElementById('name-field');
let nameClick = document.getElementById('nameBtn');
let titleCaseName;
let bigHeading = document.querySelector('h1');
//field One

let radioButtons1 = document.querySelectorAll('input[name="one"]');
  radioButtons1.forEach(button=>{
    button.addEventListener('click', ()=>{
      formFieldTwo.style.display = 'block';
      bigHeading.textContent = 'Question 2';
      formFieldOne.style.display = 'none';
    })
});
//field Two

let radioButtons2 = document.querySelectorAll('input[name="two"]');
  radioButtons2.forEach(button=>{
    button.addEventListener('click', ()=>{
      formFieldThree.style.display = 'block';
      bigHeading.textContent = 'Question 3';
      formFieldTwo.style.display = 'none';
    })
});
//field Three

let radioButtons3 = document.querySelectorAll('input[name="three"]');
  radioButtons3.forEach(button=>{
    button.addEventListener('click', ()=>{
      formFieldFour.style.display = 'block';
      bigHeading.textContent = 'Question 4';
      formFieldThree.style.display = 'none';
    })
});

//field four

let radioButtons4 = document.querySelectorAll('input[name="four"]');
  radioButtons4.forEach(button=>{
    button.addEventListener('click', ()=>{
      formFieldFive.style.display = 'block';
      bigHeading.textContent = 'Question 5';
      formFieldFour.style.display = 'none';
    })
});

//field five

let radioButtons5 = document.querySelectorAll('input[name="five"]');
  radioButtons5.forEach(button=>{
    button.addEventListener('click', ()=>{
      formFieldSix.style.display = 'block';
      bigHeading.textContent = 'Question 6';
      formFieldFive.style.display = 'none';
    })
});

//field six

let radioButtons6 = document.querySelectorAll('input[name="six"]');
  radioButtons6.forEach(button=>{
    button.addEventListener('click', ()=>{
      formFieldSeven.style.display = 'block';
      bigHeading.textContent = 'Question 7';
      formFieldSix.style.display = 'none';
    })
});

//fieldSeven

let radioButtons7 = document.querySelectorAll('input[name="seven"]');
  radioButtons7.forEach(button=>{
    button.addEventListener('click', ()=>{
      nameField.style.display = 'block';
      bigHeading.textContent = 'Question 8';
      formFieldSeven.style.display = 'none';
    })
});

//namefield
nameClick.addEventListener('click', ()=>{
  let nameValue = document.getElementById('name').value;
  if(nameValue === ''){
    document.getElementById('name').style.border = '2px solid red';
    alert('Pls enter your name')
  }else{
    nameValue= nameValue.toLowerCase()
    nameValue = nameValue.split(" ")
    for(let i=0; i<nameValue.length; i++){
      nameValue[i] = nameValue[i].charAt(0).toUpperCase() + nameValue[i].slice(1);   
  } 
     titleCaseName = nameValue.join(' ')
        submitField.style.display = 'flex';
        bigHeading.style.fontSize = '1.8rem';
        bigHeading.style.width = '80%';
        bigHeading.innerHTML = ''+titleCaseName+ ', your bending result is coming up- <br> get ready!';
        nameField.style.display = 'none';
        document.querySelector('.card-name').innerHTML = `${titleCaseName}! Your bending ability is:`;
  }
 
    });

//form Display

let submitBtn = document.getElementById('submit');
let submitField = document.getElementById('submit-field')

//function to submit form

function submitForm(e){
    e.preventDefault();
    changeDisplay();
    document.getElementById('form-container').style.display = 'none'
    document.getElementById('card').style.display = 'block';
    myForm.style.display = 'none';
}
