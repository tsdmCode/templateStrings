/* Opgave 1*/

// din kode her
const name = 'SpørgeJørgen';
const years = 5;
const message = `Hej ${name}, du har nu arbejdet i vores virksomhed i ${years} år`;
const aitchTwo = document.createElement('h2');
aitchTwo.innerHTML = message;
document.getElementById('message').append(aitchTwo);
/* Opgave 1*/

// din kode her
const produktListe = document.getElementById('produktListe');
const myData = [
  { navn: 'T-shirt', beskrivelse: 'En t-shirt lavet af bomuld', pris: 99 },
  { navn: 'Jeans', beskrivelse: 'Blå denim jeans med straight fit', pris: 299 },
  { navn: 'Hættetrøje', beskrivelse: 'En grå hættetrøje med lynlås', pris: 199 },
];

myData.forEach((Element) => {
  const { navn, beskrivelse, pris } = Element;

  const article = document.createElement('article');
  article.classList.add('produkt');
  const header = document.createElement('h2');
  header.innerHTML = navn;
  const description = document.createElement('p');
  description.innerHTML = beskrivelse;
  const price = document.createElement('p');
  price.innerHTML = `Pris: ${pris} kr.`;

  article.append(header);
  article.append(description);
  article.append(price);
  produktListe.append(article);
});

/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];

// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName('input');

  myPersons.push({ name: inputs[0].value, age: inputs[1].value });

  myPersons.sort((a, b) => a.age - b.age);
  console.log(myPersons);

  updateList();
});

function updateList() {
  const personList = document.getElementById('person-liste');
  personList.innerHTML = '';
  myPersons.forEach((element) => {
    const { name, age } = element;

    const person = document.createElement('p');
    person.innerHTML = `${name}, ${age}`;

    personList.append(person);
  });
}
