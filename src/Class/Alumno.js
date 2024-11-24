class Alumno {
    constructor(id, nombre) {
        this.id = id; // Identificación única del alumno
        this.nombre = nombre; // Nombre del alumno
        this.calificaciones = []; // Calificaciones individuales
        this.asistencias = []; // Asistencias individuales
        this.avisos = []; // Avisos específicos subidos por Maestro
        this.horarios = []; // Horarios específicos subidos por Secretario
    }

    // Cargar calificaciones específicas del alumno
    cargarCalificaciones(calificaciones) {
        this.calificaciones = calificaciones.filter(c => c.alumnoId === this.id);
        console.log(`Calificaciones cargadas para ${this.nombre}:`);
        this.calificaciones.forEach(c => {
            console.log(`Curso: ${c.curso}, Fecha: ${c.fecha}, Calificación: ${c.calificacion}`);
        });
    }

    // Cargar asistencias específicas del alumno
    cargarAsistencias(asistencias) {
        this.asistencias = asistencias.filter(a => a.alumnoId === this.id);
        console.log(`Asistencias cargadas para ${this.nombre}:`);
        this.asistencias.forEach(a => {
            console.log(`Curso: ${a.curso}, Fecha: ${a.fecha}, Asistencia: ${a.asistencia}`);
        });
    }

    // Cargar avisos subidos por Maestro
    cargarAvisos(avisos) {
        this.avisos = avisos; // Todos los avisos subidos por Maestro
        console.log(`Avisos cargados para ${this.nombre}:`);
        this.avisos.forEach(a => {
            console.log(`Aviso: ${a.aviso}, Fecha: ${a.fechaSubida}, Maestro: ${a.creadoPor.nombreUsuario}`);
        });
    }

    // Cargar horarios subidos por Secretario
    cargarHorarios(horarios) {
        this.horarios = horarios; // Todos los horarios subidos por Secretario
        console.log(`Horarios cargados para ${this.nombre}:`);
        this.horarios.forEach(h => {
            console.log(`Materia: ${h.materia}, Hora: ${h.hora}, Maestro: ${h.maestro}, Salón: ${h.salon}`);
        });
    }

    // Mostrar todos los datos cargados
    mostrarDatos() {
        console.log(`Información para el alumno ${this.nombre}:`);
        console.log("\nCalificaciones:");
        this.calificaciones.forEach(c => {
            console.log(`Curso: ${c.curso}, Fecha: ${c.fecha}, Calificación: ${c.calificacion}`);
        });

        console.log("\nAsistencias:");
        this.asistencias.forEach(a => {
            console.log(`Curso: ${a.curso}, Fecha: ${a.fecha}, Asistencia: ${a.asistencia}`);
        });

        console.log("\nAvisos:");
        this.avisos.forEach(a => {
            console.log(`Aviso: ${a.aviso}, Fecha: ${a.fechaSubida}, Maestro: ${a.creadoPor.nombreUsuario}`);
        });

        console.log("\nHorarios:");
        this.horarios.forEach(h => {
            console.log(`Materia: ${h.materia}, Hora: ${h.hora}, Maestro: ${h.maestro}, Salón: ${h.salon}`);
        });
    }
}

export default Alumno;
