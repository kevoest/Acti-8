const panelaoChilito = () => {
    Nombre = document.getElementById('Nombre').value;
    Identidad = document.getElementById('Identidad').value;
        
    document.getElementById('mensaje').innerHTML = Identidad == "Hombre" ? (`Bienvenido ${Nombre}`) : (`Bienvenida ${Nombre}`);
    
}