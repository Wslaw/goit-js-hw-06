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
];
const list = document.querySelector(".gallery");

const gallery = images.map((image) =>
  
  `<li class = js-item>
  <img src = "${image.url}" alt = "${image.alt}">
  </li>`
  
  );
  list.insertAdjacentHTML("beforeend", gallery.join(""));
  
const items = document.querySelectorAll('.js-item');
const image = document.querySelectorAll("img");
console.log(image);
  
// list.style.flexDirection = 'column';
list.style.display = 'flex';
list.style.listStyleType = 'none';
list.style.gap = '30px';
list.style.paddingRight = "40px";
// list.style.wrap = 'flexWrap';
image.forEach((img) => {
  // img.style.maxHeight = '215px';
  img.style.width = '100%';
  img.style.height = 'auto';
  
});
items.forEach((item) => {
  
});