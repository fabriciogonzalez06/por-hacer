const fs = require('fs');



let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}


//metodo para traer listado 
const getListado = () => {


    cargarDb();
    return listadoPorHacer;


}


const actualizar = (descripcion, estado = true) => {

    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listadoPorHacer[index].completado = estado;
        guardarDB();
        return true;
    }

    return false;
}

const crear = (descripcion) => {

    //cargar la data para seguir agregando
    cargarDb();


    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}


const borrar = (descripcion) => {


    cargarDb();

    let listado = listadoPorHacer.filter(listado => listado.descripcion !== descripcion);

    listadoPorHacer = listado;

    if (listadoPorHacer.length == listado.length) {
        return false;
    } else {
        listadoPorHacer = listado;
        guardarDB();
        return true;
    }






}

//metodo para cargar data 
const cargarDb = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}