class Admin {
    constructor() {
        this.escuelas = []; // Lista de escuelas
        this.directores = []; // Lista de directores
    }

    // Validación de Contraseña
    validarContrasena(contrasena) {
        if (contrasena.length < 8) {
            throw new Error("La contraseña debe tener al menos 8 caracteres.");
        }
        if (!/[A-Z]/.test(contrasena)) {
            throw new Error("La contraseña debe incluir al menos una letra mayúscula.");
        }
        if (!/[0-9]/.test(contrasena)) {
            throw new Error("La contraseña debe incluir al menos un número.");
        }
        if (!/[!@#$%^&*]/.test(contrasena)) {
            throw new Error("La contraseña debe incluir al menos un carácter especial (!@#$%^&*).");
        }
    }

    // Validación de Correo Electrónico
    validarCorreo(correoElectronico) {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correoElectronico)) {
            throw new Error("El formato del correo electrónico es inválido.");
        }
    }

    agregarEscuela(nombre, correoElectronico, celular, contrasena, repetirContrasena) {
        try {
            if (contrasena !== repetirContrasena) {
                throw new Error("Las contraseñas no coinciden.");
            }
            this.validarContrasena(contrasena);
            this.validarCorreo(correoElectronico);

            if (this.escuelas.some(escuela => escuela.correoElectronico === correoElectronico)) {
                throw new Error("Ya existe una escuela con este correo electrónico.");
            }

            const nuevaEscuela = {
                id: this.escuelas.length + 1,
                nombre,
                correoElectronico,
                celular,
                contrasena
            };
            this.escuelas.push(nuevaEscuela);
            console.log(`Escuela agregada: ${nombre}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    eliminarEscuela(id) {
        this.escuelas = this.escuelas.filter(escuela => escuela.id !== id);
        console.log(`Escuela con ID ${id} eliminada`);
    }

    agregarDirector(nombre, correoElectronico, celular, contrasena, repetirContrasena) {
        try {
            if (contrasena !== repetirContrasena) {
                throw new Error("Las contraseñas no coinciden.");
            }
            this.validarContrasena(contrasena);
            this.validarCorreo(correoElectronico);

            if (this.directores.some(director => director.correoElectronico === correoElectronico)) {
                throw new Error("Ya existe un director con este correo electrónico.");
            }

            const nuevoDirector = {
                id: this.directores.length + 1,
                nombre,
                correoElectronico,
                celular,
                contrasena
            };
            this.directores.push(nuevoDirector);
            console.log(`Director agregado: ${nombre}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    eliminarDirector(id) {
        this.directores = this.directores.filter(director => director.id !== id);
        console.log(`Director con ID ${id} eliminado`);
    }

    // Ver cambios realizados por los directores
    verCambiosPorDirector(director, lista, tipo) {
        const cambios = lista.filter(item => item.creadoPor && item.creadoPor.usuarioId === director.usuarioId);
        console.log(`Cambios realizados por el director ${director.nombreUsuario} (${tipo}):`);
        cambios.forEach(cambio => {
            console.log(`ID: ${cambio.id}, Nombre: ${cambio.nombre}, Creado por: ${cambio.creadoPor.nombreUsuario}`);
        });
    }
}

export default Admin;
