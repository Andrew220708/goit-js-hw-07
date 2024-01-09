const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];
// *************1. Рішення.****************
// const firstEl = document.createElement('li');
// const catEl = document.createElement('img');
// catEl.src = 
//   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// catEl.alt = 'White and Black Long Fur Cat';
// catEl.width = 360;
// catEl.height = 300;

// const secondEl = document.createElement('li');
// // secondEl.classList.add(gallery_item); Підкажіть чьому я не можу добавити клас?
// const fishEl = document.createElement('img');
// fishEl.src =
//   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// fishEl.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// fishEl.width = 360;
// fishEl.height = 300;

// const thirdEl = document.createElement('li');
// // thirdEl.classList.add(gallery_item);
// const horsesEl = document.createElement('img');
// horsesEl.src =
//   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// horsesEl.alt = 'Group of Horses Running';
// horsesEl.width = 360;
// horsesEl.height = 300;

// const fourthEl = document.createElement('li');
// // fourthEl.classList.add(gallery_item);
// const elephantEl = document.createElement('img');
// elephantEl.src =
//   'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
// elephantEl.alt = 'Elephant Beside on Baby Elephant';
// elephantEl.width = 360;
// elephantEl.height = 300;

// const fifthEl = document.createElement('li');
// // fifthEl.classList.add(gallery_item);
// const parrotEl = document.createElement('img');
// parrotEl.src =
//   'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
// parrotEl.alt = 'Blue Geeen and Orange Parrot';  
// parrotEl.width = 360;
// parrotEl.height = 300;

// const sixthEl = document.createElement('li');
// // sixthEl.classList.add(gallery_item);
// const zebraEl = document.createElement('img');
// zebraEl.src =
//   'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
// zebraEl.alt = 'Zebras on Zebra';
// zebraEl.width = 360;
// zebraEl.height = 300;
// const galleryEl = document.querySelector('.gallery');
// firstEl.append(catEl);
// secondEl.append(fishEl);
// thirdEl.append(horsesEl);
// fourthEl.append(elephantEl);
// fifthEl.append(parrotEl);
// sixthEl.append(zebraEl);

// galleryEl.append(firstEl, secondEl, thirdEl, fourthEl, fifthEl, sixthEl);

// *************2. Рішення.******************
const galleryEl = document.querySelector('.gallery');


const createMarkup = ({ url, alt }) =>
  `
  <li>
   <img class="image" src=${url} alt=${alt} width='360' height='300'
  </li>
 
  `; 

const markup = images.map(createMarkup).join('');
  
galleryEl.insertAdjacentHTML('beforeend', markup);

