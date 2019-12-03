function mostrarTablero() {
    showInstructions();
    document.getElementById("tablero").style.display = "block";
    document.getElementById("tablero").style.marginLeft = "250px";
    document.getElementById("start").style.display = "none";
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function showInstructions() {

    var br = document.createElement("BR");
    var br2 = document.createElement("BR");
    var br3 = document.createElement("BR");
    var br4 = document.createElement("BR");
    var br5 = document.createElement("BR");
    var br6 = document.createElement("BR");

    var art = document.getElementById("instrucciones");

    var titulo = document.createElement("h1");
    var txtTitle = document.createTextNode("INSTRUCCIONES");
    titulo.appendChild(txtTitle);

    var lbl1 = document.createElement("label");
    var txtLbl1 = document.createTextNode("1.Cada jugador debe elegir el color de su ficha.");
    lbl1.appendChild(txtLbl1);

    var lbl2 = document.createElement("label");
    var txtLbl2 = document.createTextNode("2. El Jugador 1 se mueve con las teclas AWSD");
    lbl2.appendChild(txtLbl2);

    var lbl3 = document.createElement("label");
    var txtLbl3 = document.createTextNode("3. El Jugador 2 se mueve con las fechas IZQ-ARRIBA-ABAJO-DER");
    lbl3.appendChild(txtLbl3);

    var lbl4 = document.createElement("label");
    var txtLbl4 = document.createTextNode("4. Si desean guardar la partida, den clic en el botón 'Guardar partida'. Para esto ambos deben estar registrados con un usuario y contraseña.");
    lbl4.appendChild(txtLbl4);

    var lbl5 = document.createElement("label");
    var txtLbl5 = document.createTextNode("5. ¡Diviertánse! ");
    lbl5.appendChild(txtLbl5);

    art.appendChild(titulo);
    insertAfter(br, titulo);

    art.appendChild(lbl1);
    insertAfter(br2, lbl1);

    art.appendChild(lbl2);
    insertAfter(br3, lbl2);

    art.appendChild(lbl3);
    insertAfter(br4, lbl3);

    art.appendChild(lbl4);
    insertAfter(br5, lbl4);

    art.appendChild(lbl5);
    insertAfter(br6, lbl5);

    var button = document.createElement("button");
    var txtButton = document.createTextNode("Crear jugadores");
    button.setAttribute("onclick", "showColorsP1()");
    button.setAttribute('id', 'btnJugadores');
    button.style.marginRight = "500px";
    button.appendChild(txtButton);


    art.appendChild(button);


}

function dibujar() {
    var c = document.getElementById("lienzo");
    var ctx = c.getContext("2d");
    ctx.rect(70, 70, 730, 400);
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(95, 95, 10, 100);
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(100, 80, 330, 10);
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(435, 80, 10, 380);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(450, 80, 330, 10);
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(770, 95, 10, 100);
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(95, 340, 10, 105);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(100, 450, 330, 10);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(450, 450, 330, 10);
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "blue";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(770, 345, 10, 100);
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "blue";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(440, 250, 80, 0, 2 * Math.PI);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(440, 250, 70, 0, 2 * Math.PI);
    ctx.strokeStyle = "white";
    ctx.stroke();


}
window.addEventListener("load", dibujar, false);