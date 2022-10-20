//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

const team =[
    {
        Name: "Wayne Barnett",
        Role: "Founder & CEO",
        Image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        Name: "Angela",
        Role: "Chief Editor",
        Image: "angela-caroll-chief-editor.jpg",
    },
    {
        Name: "Waleter gordon",
        Role: "Chief Editor",
        Image: "walter-gordon-office-manager.jpg",
    },
    {
        Name: "Angela lopez",
        Role: "Social Media Manager",
        Image: "angela-lopez-social-media-manager.jpg",
    },
    {
        Name: "Scott Estrada",
        Role: "Developer",
        Image: "scott-estrada-developer.jpg",
    },
    {
        Name: "Barbara Ramos",
        Role: "Grafic designer",
        Image: "barbara-ramos-graphic-designer.jpg",
    },
]

//MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
    const componentTeam = team[i];
    //console.log(componentTeam);
    console.log(componentTeam.Name);
    console.log(componentTeam.Role);
    console.log(componentTeam.Image);
    //creo un elemento della dom h
    let componentName = document.createElement("h4")
    let componentRole = document.createElement("p")
    let componentImage = document.createElement("P")
    //appendo i dati dei componenti del team
    componentName.append(componentTeam.Name)
    componentRole.append(componentTeam.Role)
    componentImage.append(componentTeam.Image)
    //seleziono dalla dom la card
    let card =document.querySelector(".carta")
    //appendo il nome alla car
    card.append(componentName)
    card.append(componentRole)
    card.append(componentImage)
}







//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe