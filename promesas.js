

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

const getEmpleado = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        const empleadoDB = empleados.find( empleado => empleado.id === id );

        if ( !empleadoDB ) {
            reject( `No existe empleado con el id ${id}`);
        } else {
            resolve( empleadoDB );
        }

    } );

    
};

const getSalario =  ( empleado ) => {


    return new Promise( ( resolve, reject ) => {
        const salarioDB = salarios.find( salario => salario.id === empleado.id );

    if (!salarioDB ) {
        return reject( `No se encontró un salario para el empleado ${empleado.nombre }`);
    } else {
        return resolve( {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
    } )

    
};


getEmpleado(5).then( empleado => {
    console.log('El empleado es', empleado );

    /* getSalario( empleado ).then( resp => {
        console.log( resp );
    });  */

    return getSalario( empleado );

})
.then( resp => {
    console.log( resp );
})
.catch( err => {
    console.log( err );
});


