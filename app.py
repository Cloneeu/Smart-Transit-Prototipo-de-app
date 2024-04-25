# app.py
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    # Muestra la página de inicio de sesión
    return render_template('login.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    # Maneja el envío del formulario de inicio de sesión
    if request.method == 'POST':
        # Aquí iría la lógica para verificar las credenciales del usuario
        return redirect(url_for('map_view'))
    # Si no es POST, simplemente renderiza la página de inicio de sesión
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    # Maneja el envío del formulario de registro
    if request.method == 'POST':
        # Aquí iría la lógica para registrar al nuevo usuario
        return redirect(url_for('map_view'))
    # Si no es POST, simplemente renderiza la página de registro
    return render_template('register.html')

@app.route('/map')
def map_view():
    # Renderiza la página del mapa
    return render_template('map.html')

if __name__ == '__main__':
    # Inicia la aplicación en modo de depuración, que es útil para el desarrollo.
    app.run(debug=True)
