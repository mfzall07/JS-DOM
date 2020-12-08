//Manipulasi Element

//element.innerHTML

// const judul = document.getElementById('judul');
// judul.innerHTML='<i>Muh Faizal</i>';

// const sectionA = document.querySelector('section#a p');
// sectionA[1].innerHTML='ICHALLL';

//element.style.<propertyCSS>

// const judul = document.getElementById('judul');
// judul.style.backgroundColor='lightblue';
// judul.style.fontSize='20px';
// judul.style.color='white';
// judul.style.fontFamily ='cursive';

//element.setAtribute()

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');
// const p2 = document.getElementsByTagName('p')[1];
// p2.setAttribute('class','label');
// judul.setAttribute('name','ichal');
// a.getAttribute('href');
// a.removeAttribute('href');


//element.classList

// const p2 = document.querySelector('.p2');
// p2.classList.toggle('label');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.item('2');
// p2.classList.contains('label');
// p2.classList.replace('label','ichal');



//Manipulasi Node

// document.createElement() & document.createTextNode() & Node.appendChild()

const pBaru = document.createElement('p');
const teks = document.createTextNode('Paragraf Baru');

//simpan tulisan ke paragraf 

pBaru.appendChild(teks);

//simpan pBaru diakhir section a

const sectionA = document.getElementById ('a');
sectionA.appendChild(pBaru)


// Node.insertBefore()

const liBaru = document.createElement('li');
const teksli = document.createTextNode('Item 2-1');

liBaru.appendChild(teksli);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// parentNode.remoceChild()

const link = document.querySelector('section#a a');
sectionA.removeChild(link);

// parentNode.repalceChild()

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement ('h2');
const teksH2 = document.createTextNode ('BARUUU');

h2Baru.appendChild(teksH2);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor='lightgreen';
liBaru.style.backgroundColor='lightgreen';
h2Baru.style.backgroundColor='lightgreen';

// selesai