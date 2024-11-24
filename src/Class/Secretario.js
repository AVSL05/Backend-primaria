class Secretario {
    constructor(usuarioId, nombreUsuario) {
        this.usuarioId = usuarioId; // Identificación única del secretario
        this.nombreUsuario = nombreUsuario; // Nombre del secretario
        this.maestros = [];
        this.alumnos = [];
        this.grupos = [];
    }

    // Método genérico para gestionar CRUD
    gestionarEntidad(accion, lista, entidad, atributos) {
        const { id, nombre } = atributos;

        switch (accion) {
            case "agregar":
                if (lista.some(item => item.nombre === nombre)) {
                    throw new Error(`Ya existe un ${entidad} con el nombre: ${nombre}`);
                }
                const nuevoItem = {
                    id: lista.length + 1,
                    nombre,
                    creadoPor: { usuarioId: this.usuarioId, nombreUsuario: this.nombreUsuario },
                };
                lista.push(nuevoItem);
                console.log(`${entidad} agregado por ${this.nombreUsuario}: ${nombre}`);
                break;

            case "eliminar":
                const indiceEliminar = lista.findIndex(item => item.id === id);
                if (indiceEliminar === -1) {
                    throw new Error(`No se encontró el ${entidad} con ID: ${id}`);
                }
                lista.splice(indiceEliminar, 1);
                console.log(`${entidad} con ID ${id} eliminado por ${this.nombreUsuario}`);
                break;

            case "actualizar":
                const indiceActualizar = lista.findIndex(item => item.id === id);
                if (indiceActualizar === -1) {
                    throw new Error(`No se encontró el ${entidad} con ID: ${id}`);
                }
                lista[indiceActualizar] = { ...lista[indiceActualizar], ...atributos };
                console.log(`${entidad} con ID ${id} actualizado por ${this.nombreUsuario}`);
                break;

            default:
                throw new Error("Acción no válida. Usa agregar, eliminar o actualizar.");
        }
    }

    // CRUD para Maestros
    agregarMaestro(nombre) {
        this.gestionarEntidad("agregar", this.maestros, "Maestro", { nombre });
    }

    eliminarMaestro(id) {
        this.gestionarEntidad("eliminar", this.maestros, "Maestro", { id });
    }

    actualizarMaestro(id, nombre) {
        this.gestionarEntidad("actualizar", this.maestros, "Maestro", { id, nombre });
    }

    // CRUD para Alumnos
    agregarAlumno(nombre) {
        this.gestionarEntidad("agregar", this.alumnos, "Alumno", { nombre });
    }

    eliminarAlumno(id) {
        this.gestionarEntidad("eliminar", this.alumnos, "Alumno", { id });
    }

    actualizarAlumno(id, nombre) {
        this.gestionarEntidad("actualizar", this.alumnos, "Alumno", { id, nombre });
    }

    // CRUD para Grupos
    agregarGrupo(nombre) {
        this.gestionarEntidad("agregar", this.grupos, "Grupo", { nombre });
    }

    eliminarGrupo(id) {
        this.gestionarEntidad("eliminar", this.grupos, "Grupo", { id });
    }

    actualizarGrupo(id, nombre) {
        this.gestionarEntidad("actualizar", this.grupos, "Grupo", { id, nombre });
    }

    // Mostrar entidades
    mostrarEntidades(lista, entidad) {
        console.log(`Lista de ${entidad}s gestionados por ${this.nombreUsuario}:`);
        lista.forEach(item => {
            console.log(`ID: ${item.id}, Nombre: ${item.nombre}, Creado por: ${item.creadoPor.nombreUsuario}`);
        });
    }
}

export default Secretario;
