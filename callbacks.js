
/* Callbaks */

const getUsuarioById = ( id, callback ) => {

    const user = {
        nombre: 'James',
        id
    };


    if( id === 20 ){
        callback( `El usuario con el id ${id}, no existe` );
    } else {
        callback( null, user );
    }
    

}

getUsuarioById( 5, (err, user ) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de Base de datos', user );
} );

/* Problemas con los Callbacks */