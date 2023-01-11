
/* ES7 Async */

const getNombre = async() => {

    // return 'James';

    return new Promise( ( resolve, reject )  => {

        setTimeout(() => {
            resolve('James');
        }, 3000);

    });

};

const saludo = async() => {
    
    const nombre = await getNombre();

    return `Hola ${ nombre }`;

}

saludo().then(( mensaje => {
    console.log( mensaje );
} ) );

// console.log( getNombre() );
getNombre().then( nombre => {
    console.log( nombre );
} );

