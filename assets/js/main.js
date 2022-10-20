//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

const team =[
    {
        Name: "Wayne Barnett",
        Role: "Founder & CEO",
        Image: "./assets/img/wayne-barnett-founder-ceo.jpg",
    },
    {
        Name: "Angela",
        Role: "Chief Editor",
        Image: "./assets/img/angela-caroll-chief-editor.jpg",
    },
    {
        Name: "Waleter gordon",
        Role: "Chief Editor",
        Image: "./assets/img/walter-gordon-office-manager.jpg",
    },
    {
        Name: "Angela lopez",
        Role: "Social Media Manager",
        Image: "./assets/img/angela-lopez-social-media-manager.jpg",
    },
    {
        Name: "Scott Estrada",
        Role: "Developer",
        Image: "./assets/img/scott-estrada-developer.jpg",
    },
    {
        Name: "Barbara Ramos",
        Role: "Grafic designer",
        Image: "./assets/img/barbara-ramos-graphic-designer.jpg",
    },
]
let card =document.querySelector(".row")
//MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const componentTeam = team[i];
    //console.log(componentTeam);
    console.log(componentTeam.Name);
    console.log(componentTeam.Role);
    console.log(componentTeam.Image);
    //creo un elemento della dom h
    let cards = document.createElement("div")
    cards.classList.add("col", "text-center")
    let componentName = document.createElement("h2")
    let componentRole = document.createElement("p")
    componentRole.classList.add("fs-4")
    let componentImage = document.createElement("img")
    componentImage.src = componentTeam.Image
    //appendo i dati dei componenti del team
    card.append(cards)
    componentName.append(componentTeam.Name)
    componentRole.append(componentTeam.Role)
    componentImage.append(componentTeam.Image)
    //seleziono dalla dom la card
    
    //appendo il nome alla car
    cards.append(componentImage)
    cards.append(componentName)
    cards.append(componentRole)
}







//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe