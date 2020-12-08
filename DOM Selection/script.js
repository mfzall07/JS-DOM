//DOM Selection

//getElementByid() -> element

// const judul = document.getElementById("judul");
// judul.innerHTML = 'Muh Faizal';
// judul.style.color = 'maroon';
// judul.style.backgroundColor = 'gray';

//--------------------------------------------------------

// //getElementByTagName() -> HTML COllecttion
// const p = document.getElementsByTagName('p');
// for ( let i = 0 ; i < p.length ; i++){
//     p[i].style.backgroundColor='lightblue';
// }

//--------------------------------------------------------

// //getElementByClassName -> HTML Collection
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = 'Coba Lihat Aku !!';
// p1[0].style.backgroundColor='grey';

//--------------------------------------------------------

//querySelector() -> Element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '20px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.background = 'orange';

// // const p = document.querySelector('p');
// // p.innerHTML = 'JavaScript';

// //--------------------------------------------------------

// //querySelectorAll() -> nodeList
// // const p = document.querySelectorAll('p');
// // p[2].style.background='orange'; 

// const p = document.querySelectorAll('p');
// for (let i = 0 ; i < p.length ; i++){
//     p[i].style.background='orange'; 
// }

//-----------------------------------------------------------

// const sectionB = document.getElementById ('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor='red';

const sectionC = document.querySelector ('section#b');
const p4 = sectionC.getElementsByTagName('p')[0];
p4.style.backgroundColor='red';