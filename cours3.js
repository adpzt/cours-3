"use strict"

// tableau

let tableauFruit = ["Grenade", "Mangue", "Cerise", "Banane", "Fraise"]
//               =   index 0,  index 1,  index 2, index 3,  index 4
    // tableau commence tjrs par 0

console.log (typeof tableauFruit)
console.log (tableauFruit)
console.log (tableauFruit [2]) // = Grenade
console.log (tableauFruit.length) // taille du tableau
console.log (tableauFruit.push("Passion")) // pour ajouter ds le tableau
tableauFruit[1] = "Goyave" // pour changer un élément du texte
console.log (tableauFruit) // faire un nouveau tableau mis a jour

// creation d'une boucle dans un tableau pour afficher chaque éléments
    // forEach = pour chaque
// tableauFruit.forEach((fruit) => (console.log (fruit)))

// creation d'une boucle simple pour afficher chaque éléments
for(let i=0 ; i < tableauFruit.length ; i++){
    console.log(tableauFruit[i])
}
 
// i++ = i+1
// i-- = i-1
// i+=2 = i+2
// ! = différent de

// crée "bonjour 1" à "bonjour 10" 
for(let i=0 ; i<=10 ; i++){
    console.log("Bonjour n°", i)
}

// crée un compteur de 10 à 1 + Bonne Année
for(let i=9 ; i>=0 ; i--){
    console.log(i+1)
    if (i==0) {
        console.log("Bonne Année")
    }
}