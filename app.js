
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

/* orden propiedades de objetos */

var object = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1
};

object.d = 1;
object["2"] = 1;
object["a"] = 1;

console.log( Object.getOwnPropertyNames( object ).join(",") );
console.log( Object.keys( object ) );
console.log( JSON.stringify( object ) );

for (const i in Object.keys( object ) ) {
    console.log( Object.keys( object )[i] )
    
}

/* POO en ES6 */

let gato = {
    sonido(){
        console.log('meow');
    },
    chillido(){
        console.log('miau');
    }
};

let perro = {
    sonido(){
        console.log('guau');
    },
};

let angora = Object.create(  gato );
console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.chillido();

Object.setPrototypeOf( angora, perro );

console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
// angora.chillido();

/* acceso al protoypo con la referencia SUPER */

let chamo = {
    saludar(){
        return "Hola";
    }
};

let amico = {
    saludar(){
        return super.saludar() + ", saludos";
    }
};

// Object.setPrototypeOf( amico, chamo );

// console.log( amico.saludar() );


/* Desestructuracion de objetos */

let ajustes = {
    nombre: "James Mejía",
    email: "james@google.com",
    facebook: "james.mejia.0421",
    google: "james.mejia.0421",
    premium: true,
    twitter: "codingjames"
};

/* let nombre = ajustes.nombre,
    email = ajustes.email,
    facebook = ajustes.facebook; */


let {nombre, email, facebook,google, premium: dePago, twitter: cuentaTwi = "codingjhames"  } = ajustes;

console.log(nombre, email, facebook, google, dePago, cuentaTwi );


/* Desestructuracion de objetos anidados */

let autoGuardado = {

    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo: {
        subNodo:{
            cursor: {
                linea:11,
                columna:11
            }
        }
    }

};

let { cursor: cursorActivo } = autoGuardado;
console.log( cursorActivo );

let { ultimoArchivo:{ cursor: ultimoArchivo }  } = autoGuardado;
console.log( ultimoArchivo );

let { otroNodo:{ subNodo: { cursor:otroSuperNodo } } } = autoGuardado;
console.log( otroSuperNodo );

let anotherSuperNodo = autoGuardado.otroNodo.subNodo.cursor;
console.log(anotherSuperNodo  );

/* Desestructuracion de arreglos */

let frutas = ['pera','uva','naranjas','cerezas'];

let [ fruta1, fruta2 ] = frutas;

console.log( fruta1, fruta2  );

let [,,fruta3] = frutas;
console.log( fruta3 );

let otraFruta = 'manzana';

[ otraFruta ] = frutas;
console.log( otraFruta );

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

console.log( a, b );

[a,b] = [ b,a];

console.log( a, b );

let arrObjects = [{}];

/* Desestructuracion de arreglos anidados */

let colores_one = [ 'rojo',['verde','amarillo'],'morado','naranja'];
let [ color1,[color2]  ] = colores_one;
console.log( color1, color2 );

let colores_dos = ['rojo','verde','amarillo','morado','naranja'];
let [ colorPrincipal, colorSecundario, ...demasColores ] = colores_dos;
console.log( colorPrincipal );
console.log( colorSecundario );
console.log( demasColores );

let fruits = [ 'cherry', 'pera' ];
let [ fruta_one, fruta_two = 'manzana' ] = fruits;
console.log( fruta_one, fruta_two );

let opciones = {
    nuome:'Omar',
    appel: 'Bernal'
};

let { nuome, appel = 'Mejía' } = opciones;
console.log( nuome, appel );

/* Desestructuracion de parametros */

function createPlayer( nickname,{ hp, sp, clase } = { hp: 100, sp: 50, clase: 'mago' }  ) {
    
    /* options = options || {};

    let hp = options.hp,
        sp = options.sp,
        clase = options.clase; */

    console.log( nickname, hp, sp, clase );   
}

createPlayer( "Bernie", {
    hp: 500,
    sp: 100,
    clase: 'warrior'
} );

/* Symbols */

let primerNombre = Symbol('primer nombre');
let segNombre = Symbol( 'segundo nombre');


let gente = {
    [ segNombre ]:'Herrera'
};

gente[ primerNombre ] = 'Parchita';

console.log( gente[primerNombre] );
console.log( gente[segNombre] );
console.log( primerNombre );
console.log( segNombre );

let simbolo_one = Symbol('simbolo');
let simbolo_dos = Symbol('simbolo');

console.log( simbolo_one == simbolo_dos );
console.log( simbolo_one === simbolo_dos );
console.log( Object.is( simbolo_one, simbolo_dos ) );

let userID = Symbol.for('userID');
let objecto = {};

objecto[userID] = '12345';
console.log( objecto[userID] );
console.log(userID);

let userID2 = Symbol.for('userID');
console.log( userID2 == userID2 );
console.log( userID2 === userID2 );
console.log( Object.is( userID, userID2 ) );

console.log( objecto[ userID2 ]  );
console.log(  userID2 );

let id = Symbol.for('id único');
console.log( Symbol.keyFor( id ) );

let id2 = Symbol.for('id único');
console.log( Symbol.keyFor( id2 ) );

console.log( id === id2 );

let id3 = Symbol( 'id único');
console.log( Symbol.keyFor( id3 ) );

/* Coerción de Símbolos */

let Id = Symbol.for("id");
let namba = 10;
let testo = "10";
let bool  = true;
let NotAn = NaN;

console.log( namba + testo );
console.log( namba + Number( testo ) );
console.log( namba + NaN );
console.log( bool + bool );
console.log( "My Simbol is: " + String( Id )  );

/* Recuperando las propiedades símbolo */

let aid = Symbol.for('aid');
let active = Symbol.for('active');

let nikka = {
    [aid]: '123',
    [active]: true,
    ['code']: 'xy123',
    name:'micho',
    apellido: 'mejia',
    edad: 29
};

console.log( Object.keys( nikka ) );

for ( key in nikka ) {
    console.log( key, nikka[key] );
}

let simbols = Object.getOwnPropertySymbols( nikka );
console.log( simbols );

for ( i in simbols ) {
    console.log( simbols[i], Symbol.keyFor( simbols[i] ) );
}
























