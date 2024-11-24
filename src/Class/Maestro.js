class Maestro {
    constructor(usuarioId, nombreUsuario) {
        this.usuarioId = usuarioId; // Identificación única del maestro
        this.nombreUsuario = nombreUsuario; // Nombre del maestro
        this.calificaciones = [];
        this.asistencias = [];
        this.avisos = [];
        this.alumnos = []; // Lista de alumnos que el maestro maneja
    }

    // Validar que el alumno exista
    validarAlumno(alumnoId) {
        const alumnoExiste = this.alumnos.some(alumno => alumno.id === alumnoId);
        if (!alumnoExiste) {
            throw new Error(`El alumno con ID ${alumnoId} no está registrado.`);
        }
    }

    // Agregar alumnos (para gestionar en esta clase)
    agregarAlumno(alumnoId, nombre) {
        if (this.alumnos.some(alumno => alumno.id === alumnoId)) {
            throw new Error(`El alumno con ID ${alumnoId} ya está registrado.`);
        }
        this.alumnos.push({ id: alumnoId, nombre });
    }

    // Gestión de Calificaciones
    agregarCalificacion(alumnoId, calificacion, fecha, curso) {
        try {
            this.validarAlumno(alumnoId);
            const nuevaCalificacion = {
                alumnoId,
                calificacion,
                fecha,
                curso,
                creadoPor: { usuarioId: this.usuarioId, nombreUsuario: this.nombreUsuario },
            };
            this.calificaciones.push(nuevaCalificacion);
            console.log(
                `Calificación agregada por ${this.nombreUsuario} para el alumno ${alumnoId}: ${calificacion}, Curso: ${curso}, Fecha: ${fecha}`
            );
        } catch (error) {
            console.error(error.message);
        }
    }

    eliminarCalificacion(alumnoId) {
        this.calificaciones = this.calificaciones.filter(c => c.alumnoId !== alumnoId);
        console.log(`Calificación eliminada por ${this.nombreUsuario} para el alumno ${alumnoId}`);
    }

    // Gestión de Asistencias
    agregarAsistencia(alumnoId, asistencia, fecha, curso) {
        try {
            this.validarAlumno(alumnoId);
            const nuevaAsistencia = {
                alumnoId,
                asistencia,
                fecha,
                curso,
                creadoPor: { usuarioId: this.usuarioId, nombreUsuario: this.nombreUsuario },
            };
            this.asistencias.push(nuevaAsistencia);
            console.log(
                `Asistencia registrada por ${this.nombreUsuario} para el alumno ${alumnoId}: ${asistencia}, Curso: ${curso}, Fecha: ${fecha}`
            );
        } catch (error) {
            console.error(error.message);
        }
    }

    eliminarAsistencia(alumnoId) {
        this.asistencias = this.asistencias.filter(a => a.alumnoId !== alumnoId);
        console.log(`Asistencia eliminada por ${this.nombreUsuario} para el alumno ${alumnoId}`);
    }

    // Gestión de Avisos
    agregarAviso(aviso, fechaSubida) {
        const nuevoAviso = {
            aviso,
            fechaSubida,
            creadoPor: { usuarioId: this.usuarioId, nombreUsuario: this.nombreUsuario },
        };
        this.avisos.push(nuevoAviso);
        console.log(`Aviso agregado por ${this.nombreUsuario}: ${aviso}, Fecha: ${fechaSubida}`);
    }

    eliminarAviso(aviso) {
        this.avisos = this.avisos.filter(a => a.aviso !== aviso);
        console.log(`Aviso eliminado por ${this.nombreUsuario}: ${aviso}`);
    }

    // Ver Horarios
    verHorarios(horarios) {
        const horariosMaestro = horarios.filter(horario => horario.maestro === this.nombreUsuario);
        console.log(`Horarios para el maestro ${this.nombreUsuario}:`);
        horariosMaestro.forEach(horario => {
            console.log(
                `Materia: ${horario.materia}, Hora: ${horario.hora}, Salón: ${horario.salon}, Creado por: ${horario.creadoPor.nombreUsuario}`
            );
        });
    }
}

export default Maestro;
