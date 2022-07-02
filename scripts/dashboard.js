window.onload = () => {
    if (localStorage.logged == "false") {
        cerrarSesion();
    }
    document.getElementById("logout").onclick = cerrarSesion;
    realizarRequest();
}

function realizarRequest() {
    let url = "https://basic-server-one.vercel.app/users";
    fetch(url)
        .then(response => response.json())
        .then(usuarios => llenarTabla(usuarios.data))
        .catch(error => console.log(error))
}

function llenarTabla(usuarios){
    let head = "<tr><th>Nombre</th><th>Ciudad</th><th>Teléfono</th><th>Nombre de usuario</th><th>Email</th></tr>";
    let body = "";
    for (let i = 0; i < usuarios.length; i++) {
        body += `<tr><td>${usuarios[i].name}</td><td>${usuarios[i].address.city}</td>
        <td>${usuarios[i].phone}</td><td>${usuarios[i].username}</td><td>${usuarios[i].email}</td></tr>`;
    }
    document.getElementById("encabezado").innerHTML = head;
    document.getElementById("contenido").innerHTML = body;
}

function cerrarSesion(){
    localStorage.logged = "false";
    location = "./login.html";
}