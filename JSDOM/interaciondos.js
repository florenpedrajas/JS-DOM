// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div$$ = document.createElement("div");
document.body.appendChild(div$$);
console.log(div$$);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2$$ = document.createElement("div");
const p$$ = document.createElement("p");
div2$$.appendChild(p$$);
document.body.appendChild(div2$$);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3$$ = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const p$$ = document.createElement("p");
    div3$$.appendChild(p$$);
}
document.body.appendChild(div3$$);
 
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p3$$ = document.createElement("p");
p3$$.textContent = "Soy dinámico!";
document.body.appendChild(p3$$);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const text1 = document.querySelector(".fn-insert-here");
text1.textContent = 'Wubba Lubba dub dub';



// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const ul$$ = document.createElement("ul");
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (let i = 0; i <apps.length; i++) {
    let li$$ = document.createElement ("li");
    li$$.textContent = apps[i];
ul$$.appendChild(li$$);    
}
document.body.appendChild(ul$$);


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let elementRemove$$ = document.querySelectorAll(".fn-remove-me");
for(let element of elementRemove$$) {
    element.remove();
}



// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.


let newP$$ = document.createElement("p");
selectDivs$$ = document.querySelectorAll("div");

newP$$.textContent = "Voy en medio!";

document.body.insertBefore(newP$$, selectDivs$$[1]);



// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


let selectDivs2$$ = document.querySelectorAll(".fn-insert-here");

for (const typeclase of selectDivs2$$) {
    let newP2$$ = document.createElement("p");
    newP2$$.textContent = "Voy dentro!"

    typeclase.appendChild(newP2$$);
}


