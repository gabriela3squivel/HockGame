/**
 * Tipo de componente: JavaScript
 * Descripción: Código que prepara los componentes para dibujar en el canvas
 * Última modificación: 1:27 pm 4/12/2019
 * Desarrolladores: Andrea, Tania, Alfredo y Jair
 */

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