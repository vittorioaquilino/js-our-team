// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe

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
let informationElement = "";

for (let i = 0; i < team.length; i++) {
    informationElement = team[i];
    console.log(informationElement["name"], informationElement["role"], informationElement["image"]);
    
    // stampo in html
    const teamComplete = document.getElementById("information");
    teamComplete.innerHTML += `nome: ${informationElement.name} <br> professione: ${informationElement.role} <br> ${informationElement.image} <hr>`;
}

