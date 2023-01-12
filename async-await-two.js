

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


const getEmpleado = async( id ) => {

    const empleadoDB = empleados.find( empleado => empleado.id === id );

    if ( !empleadoDB ) {
        throw Error(`No se encontró un salario para el empleado ${empleado.nombre }`);
    } else {
        return empleadoDB;
    }
    
};

const getSalario =  async( empleado ) => {

    const salarioDB = salarios.find( salario => salario.id === empleado.id );

    if ( !salarioDB ) {
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre }`);
    } else {
        return ( {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

    
};


const getInfo = async ( id ) => {

    const empleado = await getEmpleado( id );
    const resp = await getSalario( empleado );

    return `${ empleado.nombre } tiene un salario de ${ resp.salario }`;

};

getInfo(1).then( mensaje => console.log( mensaje ) );



