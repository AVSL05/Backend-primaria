import mysql.connector
from tkinter import Tk, Toplevel, Label, Entry, Button, messagebox

conn = mysql.connector.connect(
    host="localhost",      
    user="macbook",        
    password="",           
    database="CONEXION_PYTHON"  
)
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)
''')
conn.commit()

def insertar_usuario(nombre, email, password):
    cursor.execute("INSERT INTO usuarios (nombre, email, password) VALUES (%s, %s, %s)", (nombre, email, password))
    conn.commit()

def iniciar_sesion(email, password):
    cursor.execute("SELECT * FROM usuarios WHERE email = %s AND password = %s", (email, password))
    resultado = cursor.fetchone()
    if resultado:
        messagebox.showinfo("Inicio de sesión", "¡Inicio de sesión exitoso!")
    else:
        messagebox.showerror("Error", "Correo o contraseña incorrectos.")

def abrir_popup():
    popup = Toplevel(app)
    popup.title("Registro de Usuario")

    Label(popup, text="Nombre").pack()
    entry_nombre = Entry(popup)
    entry_nombre.pack()

    Label(popup, text="Email").pack()
    entry_email = Entry(popup)
    entry_email.pack()

    Label(popup, text="Contraseña").pack()
    entry_password = Entry(popup, show="*")
    entry_password.pack()

    def enviar():
        nombre = entry_nombre.get()
        email = entry_email.get()
        password = entry_password.get()
        if nombre and email and password:  
            insertar_usuario(nombre, email, password)
            messagebox.showinfo("Registro", "Usuario registrado con éxito.")
            popup.destroy()
        else:
            messagebox.showwarning("Advertencia", "Todos los campos son obligatorios.")

    Button(popup, text="Registrar", command=enviar).pack()

def abrir_inicio_sesion():
    popup = Toplevel(app)
    popup.title("Inicio de Sesión")

    Label(popup, text="Email").pack()
    entry_email = Entry(popup)
    entry_email.pack()

    Label(popup, text="Contraseña").pack()
    entry_password = Entry(popup, show="*")
    entry_password.pack()

    def enviar():
        email = entry_email.get()
        password = entry_password.get()
        iniciar_sesion(email, password)
        entry_email.delete(0, 'end')
        entry_password.delete(0, 'end')
        popup.destroy()

    Button(popup, text="Iniciar Sesión", command=enviar).pack()

app = Tk()
app.title("Gestión de Usuarios")

Button(app, text="Agregar Usuario", command=abrir_popup).pack()
Button(app, text="Iniciar Sesión", command=abrir_inicio_sesion).pack()

app.mainloop()

conn.close()
