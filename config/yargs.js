const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'es la descripcion o nombre de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'define si una tarea esta completada o no'
    }
}

//requerir yargs y sus parametros
const argv = require('yargs').command(
        'crear', 'Crea un elemento por hacer', opts
    ).command(
        'actualizar', 'actualiza el estado completado de una tarea', opts
    ).command('borrar', 'borra una tarea de la lista de tareas', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'elimina una tarea por hacer, ingresando el nombre'
        }
    })
    .help().argv;


//exportar el obeto creado
module.exports = {
    argv
}