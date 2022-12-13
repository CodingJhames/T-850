
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





























