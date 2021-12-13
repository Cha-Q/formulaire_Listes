// exo List
// 1ère partie

// Bon j'ai pas réussi du tout l'exercice et j'en suis vraiment désolé...




// déclaration de l'objet déjà rempli

const userlist = [
    {id: 1, prenom: "Jonathan", age: 40, role: "utilisateur"},
    {id: 2, prenom: "Florence", age: 18, role: "administrateur"},
    {id: 3, prenom: "Morgane", age: 20, role: "utilisateur"},
    {id: 4, prenom: "Rodolphe", age: 30, role: "utilisateur"}
];



// déclaration des éléments réutilisables dans le code
let list = document.getElementById("usersList");

let listeOl = document.getElementsByTagName("ol");
let buttonValider = document.getElementById("sub");



// bouton de validation qui ajoute une ligne supplémentaire à la liste des utilisateurs.




// affichage des éléments de la liste.
userlist.map(user => {
    
    let newlist = document.createElement("ol");
        newlist.textContent = 
                `ID: ${user.id};
                Prénom: ${user.prenom};
                Age: ${user.age};
                Role: ${user.role}`;
        
    if(user.role =='administrateur'){
        newlist.style.color = 'red';
    } else {
        newlist.style.color = 'pink';
    };

    list.appendChild(newlist);
    
    newlist.addEventListener("mouseenter", () => {
    newlist.style.backgroundColor = 'white'});
    newlist.addEventListener("mouseleave", () => {
    newlist.style.backgroundColor = 'rgb(48, 48, 48)'});
    
        // création du bouton de suppression
        
    let buttonSppr = document.createElement('input');
    buttonSppr.setAttribute('type', 'button');
    buttonSppr.value = "supprimer";
    buttonSppr.setAttribute('style', 'background-color: green');
    buttonSppr.style.marginLeft = "10px ";
    newlist.appendChild(buttonSppr);
        
        // event bouton de suppression
    buttonSppr.addEventListener("click", () => {
        list.removeChild(newlist);      
    });
    console.log(user);

});


buttonValider.addEventListener("click", () => {
    let prenom = document.getElementById("prenomForm").value;
    let age = document.getElementById("ageForm").value;
    let role = document.getElementById("roleForm").value;
userlist.push({id: userlist.length+1, prenom, age, role});
    
    let newlist = document.createElement("ol");
        newlist.textContent = 
                `ID: ${userlist.length+1};
                Prénom: ${prenom};
                Age: ${age};
                Role: ${role}`;
    

    if(role =='administrateur'){
        newlist.style.color = 'red';
    } else {
        newlist.style.color = 'pink';
    };
    
    list.appendChild(newlist);

    newlist.addEventListener("mouseenter", () => {
    newlist.style.backgroundColor = 'white'});
    newlist.addEventListener("mouseleave", () => {
    newlist.style.backgroundColor = 'rgb(48, 48, 48)'});

    let buttonSppr = document.createElement('input');
    
    buttonSppr.setAttribute('type', 'button');
    buttonSppr.value = "supprimer";
    buttonSppr.setAttribute('style', 'background-color: green');
    buttonSppr.style.marginLeft = "10px ";
    newlist.appendChild(buttonSppr);

    buttonSppr.addEventListener("click", () => {
    list.removeChild(newlist);

    });
    console.log(userlist);
    
});
// ajout d'une nouvelle entrée dans l'objet et dans le html






