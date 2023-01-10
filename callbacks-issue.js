

const empleados = [{
    id: 1,
    nombre: 'Parchita'
},{
    id:2,
    nombre: 'Micho'
},{
    id:3,
    nombre:'Chepito'
}];

const salarios = [{
    id: 1,
    salario: '3000'
},{
    id:2,
    salario: '1000'
}];

const getEmpleado = ( id, callback ) => {

    const empleadoDB = empleados.find( empleado => empleado.id === id );

    if ( !empleadoDB ) {
        callback( `No existe empleado con el id ${id}`);
    } else {
        callback( null, empleadoDB );
    }

};

const getSalario =  ( empleado, callback ) => {

    const salarioDB = salarios.find( salario => salario.id === empleado.id );

    if (!salarioDB ) {
        return callback( `No se encontró un salario para el empleado ${empleado.nombre }`);
    } else {
        return callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
} ;


/*  Uso */

getEmpleado( 3, ( err, empleado ) => {

    if ( err ) {
        return console.log( err );
    }

    getSalario( empleado, ( err, resp ) => {

        if ( err ) {
            return console.log(err);
        }

        console.log( `El salario de ${ resp.nombre } es de ${ resp.salario }` );

    } );
    // console.log( 'empelado', empleado );

} );



