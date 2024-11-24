class Director {
    constructor(usuarioId, nombreUsuario) {
        this.usuarioId = usuarioId; // Identificación única del director
        this.nombreUsuario = nombreUsuario; // Nombre del director
        this.secretarios = [];
        this.maestros = [];
        this.alumnos = [];
        this.grupos = [];
    }

    // CRUD para Secretarios
    agregarSecretario(nombre) {
        const nuevoSecretario = { 
            id: this.secretarios.length + 1, 
            nombre, 
            creadoPor: { usuarioId: this.usuarioId, nombreUsuario: this.nombreUsuario } 
        };
        this.secretarios.push(nuevoSecretario);
        console.log(`Secretario agregado por ${this.nombreUsuario}: ${nombre}`);
    }

    eliminarSecretario(id) {
        this.secretarios = this.secretarios.filter(secretario => secretario.id !== id);
        console.log(`Secretario con ID ${id} eliminado por ${this.nombreUsuario}`);
    }

    // CRUD para Maestros
    agregarMaestro(nombre) {
        const nuevoMaestro = { 
            id: this.maestros.length + 1, 
            nombre, 
            creadoPor: { usuarioId: this.usuarioId, nombreUsuario: this.nombreUsuario } 
        };
        this.maestros.push(nuevoMaestro);
        console.log(`Maestro agregado por ${this.nombreUsuario}: ${nombre}`);
    }

    eliminarMaestro(id) {
        this.maestros = this.maestros.filter(maestro => maestro.id !== id);
        console.log(`Maestro con ID ${id} eliminado por ${this.nombreUsuario}`);
    }

    // CRUD para Alumnos
    agregarAlumno(nombre) {
        const nuevoAlumno = { 
            id: this.alumnos.length + 1, 
            nombre, 
            creadoPor: { usuarioId: this.usuarioId, nombreUsuario: this.nombreUsuario } 
        };
        this.alumnos.push(nuevoAlumno);
        console.log(`Alumno agregado por ${this.nombreUsuario}: ${nombre}`);
    }

    eliminarAlumno(id) {
        this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
        console.log(`Alumno con ID ${id} eliminado por ${this.nombreUsuario}`);
    }

    // CRUD para Grupos
    agregarGrupo(nombre) {
        const nuevoGrupo = { 
            id: this.grupos.length + 1, 
            nombre, 
            creadoPor: { usuarioId: this.usuarioId, nombreUsuario: this.nombreUsuario } 
        };
        this.grupos.push(nuevoGrupo);
        console.log(`Grupo agregado por ${this.nombreUsuario}: ${nombre}`);
    }

    eliminarGrupo(id) {
        this.grupos = this.grupos.filter(grupo => grupo.id !== id);
        console.log(`Grupo con ID ${id} eliminado por ${this.nombreUsuario}`);
    }

    // Mostrar los datos de cada lista
    mostrarDatos(lista, tipo) {
        console.log(`Lista de ${tipo} gestionados por ${this.nombreUsuario}:`);
        lista.forEach(item => {
            console.log(`ID: ${item.id}, Nombre: ${item.nombre}, Creado por: ${item.creadoPor.nombreUsuario}`);
        });
    }
}

export default Director;
