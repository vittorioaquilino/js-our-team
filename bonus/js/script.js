// MILESTONE 2 + bonus:
// stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// organizzare i singoli membri in card/schede

// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri
// del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito 
// nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// stampo con Dot notation 
// creo un nuovo oggetto 
const newUser = {
  name: 'Will Smith',
  role: 'Actor',
  image: 'will-smith.jpg'
}
team.push(newUser);

let informationElement = "";

for (let i = 0; i < team.length; i++) {
    informationElement = team[i];
    console.log(informationElement["name"], informationElement["role"], informationElement["image"]);
    
    // stampo in html
    const teamComplete = document.getElementById("information");
    teamComplete.innerHTML += `<img src="img/${informationElement.image}"> <br> ${informationElement.name} <br>  ${informationElement.role} <br> `;

}

// al click del bottone aggiungo una persona al team

