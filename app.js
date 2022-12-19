
/* const persona = {
    name: 'james',
    nickName: 'mejia',
} 

persona = {
    name:'parchita',
    nickName: 'mejia'
}

persona.name = 'enrique';
console.log(persona);

for ( let i = 0; i <= 10; i++) {
    
} 

console.log(i); */

/* const saludo = 'Hola Parchita';

console.log(saludo.startsWith('Hola')  );
console.log( saludo.endsWith('Parchita')  );

console.log( saludo.indexOf('P') );
console.log( saludo.includes('ch') );
console.log( saludo.startsWith('P',3 ) );
console.log( saludo.includes('a',5)  ); */

let text = 'Hello Micho ';

console.log( text.repeat(2) );
console.log( '0'.repeat(2) );

const spaces = 12;

let names = ['Doris','juan'];
let phones = ['5812646','5894130'];

for( i in names ){
    let dif = spaces - names[i].length;
    console.log( names[i] + ' '.repeat(dif) + '|' + phones[i] );
}

let nemo = 'Andres';
let nickname = 'Bernal';

let completeName = nemo + ' ' + nickname;

console.log( completeName );

let nuemo = 'Andres';
let nicknuome = 'Bernie';

let newCompleteName = ` complete name is ${nuemo} ${nicknuome}`;
console.log( newCompleteName );


function saludo( mensaje = 'Hey Parchis', tiempo = 3000 ) {
    setTimeout(() => {
        console.log( mensaje ); 
    }, tiempo);
}

saludo();

function saludar( fn = temporal, persona = { nombre:'James'} ) {

    console.log( typeof fn );

    if ( typeof fn ==='undefined') {
        console.log( 'no es una función' );
        return;
    }
    fn();

    console.log( persona );
}

function temporal() {
    console.log('Hey Parchi FN')
}

let persona = {
    nombre: 'olimar'
}

saludar( temporal, persona );

/* Next stage */

function sumar( a,b ){
    console.log( arguments );
}

sumar( 1, 2, 5, 'fernando',{a:1,b:2} );


/* Rest parameter */

function addAlums( arrAlums, ...alumns  ) {
    console.log( arguments );

    for (let i= 0; i < alumns.length; i++) {
        arrAlums.push( alumns[i] );
        
    }

    return arrAlums;
}

let alumns_arr = ['james'];

let alumns_two = addAlums( alumns_arr, 'chepe','parchita','micho','thunder');
console.log( alumns_two );

//  restrictions from Rest parameter
// must be the last parameter
function addNames( names, ...nicknames ){
    // function content

}

/* spread operator */

var num1 = 10;
    num2 = 30;

var numbars = [1,5,10,20,100,234];
// var max = Math.max.apply( Math, numbars );

let numvars = [1,5,10,20,100,234];
let max = Math.max( ...numvars );


/* breaking relation from objects */

let person = {
    name: 'James',
    age: 29
}

let persona2 = {
    name: 'Juan',
    age: 18,
    address: 'Liberty city',
    drive: true,
    vegan: false,
    married: true
};

person1 = {
    ...persona2,
    ...person
}

console.log( person1 );

let personCopy = { ...person };
personCopy.name = 'Bernal';

function saludarRest( saludo, ...nombres ) {
    
    for( i in nombres ){
        console.log( `${saludo} ${nombres[i]}`)
    }

}

function saludarSpread( saludo, ...nombres ) {
    console.log( `${saludo} ${nombres}`);
}

saludarRest( "Hola", "Parchita","Chepito","Gata mami" );

let pets = [ "jerry", "cacho", "candas","orejas" ];

saludarSpread( "Que tal!", pets );


let parts = [ "brazos","piernas"];
let body = [ "cabeza","cuello", ...parts, "pies", "dedos" ];


console.log( body );

/* function ente( nombre ) {

    if ( typeof new.target !== "undefined" ) {
        this.nombre = nombre;
    } else {
        throw Error("esta función debe de ser utilizada con el new");
    }


    this.nombre = nombre;
}

let alguien = new ente("Chepito");

let noAlguien = ente.call( alguien,"Parchita"); */

// console.log( alguien );
// console.log( noAlguien );


var manejador = {
    id: '123',
    init: function() {

        document.addEventListener( "click", 
        event => this.clickEnPagina( event.type ) );

        document.addEventListener( "click", (function(event) {
            this.clickEnPagina( event.type );
        }).bind( this ), false);
    },

    clickEnPagina:function( type ){
        console.log( "Manejando" + type + " para el id: " + this.id );
    }
};

manejador.init();


let arreglo = [ 5,10,11,2,1,9,20];

let ordenado = arreglo.sort( function(a, b ) {
    return a-b;
})

let ordenadoES6 = arreglo.sort( ( a, b) => a-b );

console.log(ordenado);
console.log( ordenadoES6  );

var restar = ( a, b ) => a - b;

console.log( typeof restar );
console.log( restar instanceof Function );

// var restar_two = new restar( 1, 2 );

function ejemplo( x, y) {
    ( (a,b) => {
        console.log( arguments[0] );
    } )();    
}

ejemplo( 10, 20 );

var objeto = {
    nombre: "Doris"
}

function crearPersona(nombre, apellido, edad) {
    return  {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

var Doris = crearPersona( "Doris", "Aparicio", 57 );

console.log( Doris );


/* metodos concisos */

var personne = {
    name: "Sebastian",
    getName() {
        console.log( this.name );
    }
}

personne.getName();

/* nombres de propiedades computadas */

var someOne = {};

var nickName = "apellido";

someOne["primer nombre"] = "Andrés" ;
someOne[nickName] = "Bernal";

console.log( someOne["primer nombre"] );
console.log( someOne[ nickName ] );

var lenom = "primer apellido";

var apellido = "primer apellido";
var individu = {
    "primer nombre": "liz",
    [apellido]: "clameran",
}

console.log( individu[ "primer nombre"] );
console.log( individu[ apellido ]  );


var subFijo = " nombre";

var pessoa = {
    [ "primer" + subFijo ]: "Parchita",
    [ "segundo" + subFijo ]: "Chepito",
}

console.log(  pessoa[ "primer nombre"] );
console.log(  pessoa[ "segundo" + subFijo ] );

function mix(receptor, donator) {
    Object.keys( donator ).forEach( function (key) {
        receptor[key] = donator[key];
    });

    return receptor;
}

var receptor = {};
var donator = {
    // name: "my-file.js"
    get name() {
        return "my-file.js"
    }
}

console.log( donator.name );
console.log( donator );
// console.log( mix( receptor, donator  )  );

console.log( Object.assign( receptor, donator ) );


























