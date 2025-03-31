const arrayOfLoveWishes = [
    "Їжте більше овочів і фруктів – мінімум 5 порцій на день.",
    "Включайте у раціон цільнозернові продукти.",
    "Обмежте споживання цукру та рафінованих вуглеводів.",
    "Вживайте більше білкової їжі – рибу, яйця, бобові, горіхи.",
    "Пийте достатньо води – не менше 1,5-2 літрів на день.",
    "Уникайте надмірного вживання солі.",
    "Відмовтеся від фастфуду та оброблених продуктів.",
    "Їжте маленькими порціями, але регулярно.",
    "Уникайте переїдання, особливо перед сном.",
    "Замінюйте шкідливі жири (трансжири) на корисні (оливкова олія, авокадо).",
    "Регулярно займайтеся спортом – хоча б 30 хвилин на день.",
    "Робіть зарядку вранці, щоб розбудити організм.",
    "Ходіть пішки не менше 10 000 кроків на день.",
    "Використовуйте сходи замість ліфта.",
    "Робіть перерви на розминку під час роботи за комп’ютером.",
    "Практикуйте йогу або розтяжку для гнучкості.",
    "Плавайте – це корисно для всіх груп м’язів.",
    "Ведіть активний спосіб життя навіть у вихідні (велопрогулянки, піші походи).",
    "Робіть дихальні вправи для покращення роботи легенів.",
    "Виконуйте силові тренування хоча б 2 рази на тиждень.",
    "Дотримуйтеся режиму сну – спіть не менше 7-8 годин.",
    "Уникайте стресів – навчіться керувати емоціями.",
    "Практикуйте медитацію або техніки релаксації.",
    "Обмежте час перед екраном, особливо перед сном.",
    "Проводьте більше часу на свіжому повітрі.",
    "Спілкуйтеся з близькими – соціальна підтримка важлива для здоров’я.",
    "Знайдіть хобі, яке приносить радість і розслаблення.",
    "Регулярно проходьте медичні обстеження.",
    "Відмовтеся від шкідливих звичок – куріння, надмірного вживання алкоголю.",
    "Радійте життю і більше смійтеся – це зміцнює імунітет!"
 ];
    
     let countOfPills = 5;
    document.getElementById('count-of-tablets').innerText='💊'.repeat(countOfPills)

    document.getElementById('btn_love_wishes').addEventListener('click', ()=> {
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
    document.getElementById('love_wishes').innerText = arrayOfLoveWishes[index];
    
 countOfPills--
   console.log(countOfPills);

   document.getElementById('count-of-tablets').innerText = '💊'.repeat(countOfPills) + "❌".repeat(5-countOfPills)
   console.log("💊".repeat(countOfPills) + "❌".repeat(5-countOfPills))

   if (countOfPills == 0) {
    console.log('countOfPills = 0') 
  document.getElementById('btn_love_wishes').style.display = 'none'
   }
 })

 document.getElementById('btn-buy-tablets').addEventListener('click', ()=> { 
countOfPills = 5
document.getElementById('count-of-tablets').innerText='💊'.repeat(countOfPills)
document.getElementById('btn_love_wishes').style.display = 'inline-block'
 } )

 let galleryImage = 1;
 const mainImage = document.getElementById("main-image");
 
 // Додаємо тінь до картинки
 mainImage.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.5)";
 
 mainImage.setAttribute('src', `img/gallery/${galleryImage}.jpg`);
 
 document.getElementById('right-arrow').addEventListener('click', () => {
     galleryImage++;
     if (galleryImage > 4) galleryImage = 1; // Якщо у вас 4 зображення
     mainImage.setAttribute('src', `img/gallery/${galleryImage}.jpg`);
 });
 
 document.getElementById('left-arrow').addEventListener('click', () => {
     galleryImage--;
     if (galleryImage < 1) galleryImage = 4; // Якщо у вас 4 зображення
     mainImage.setAttribute('src', `img/gallery/${galleryImage}.jpg`);
 });
 const arrayOfObjects = [
{
id:1,
title:"Вітамін А",
photo:"",
description:"",
rating:"",
type:"",
},
{
  id:2,
  title:"Вітамін Б",
  photo:"",
  description:"",
  rating:"",
  type:"",
  },
  {
    id:3,
    title:"Вітамін С",
    photo:"",
    description:"",
    rating:"",
    type:"",
    },
    {
      id:4,
      title:"Омега-3",
      photo:"",
      description:"",
      rating:"",
      type:"",
      },
      {
        id:5,
        title:"Вітамін В3", 
        photo:"",
        description:"",
        rating:"",
        type:"",
        },
        
 ]
 console.log(arrayOfObjects)


 arrayOfObjects.forEach((item) => {
  console.log(item);

  let divVitamin = document.createElement('div')
  divVitamin.innerText = item.title
  divVitamin.classList.add('vitamins') 
  document.getElementById("p-vitamin").appendChild(divVitamin)
  })
 //console.log(arrayOfVitamins)
 arrayOfVitamins.forEach((item,index)=>{
 //console.log("елемент №",index,item)
let divVitamin = document.createElement('div')
//divVitamin.innerText = item.title
divVitamin.classList.add('vitamin')

document.getElementById("p-vitamins").appendChild(divVitamin)
 })
divVitamin.innerHTML=
 
          `<h3>${item.title}</h3>
          <hr>
          <img src="img/vitamins/vitamin-a.png" alt="">
          <p>${item.description}</p>
          <span>${'💚'.repeat(item.rating)+'🤍'.repeat(5-item.rating)}</span>
          <p>type<p>
            <span>id</span>`
        
