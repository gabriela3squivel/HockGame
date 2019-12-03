colorP1 = "#f2f";
colorP2 = "#fff";
var player1, player2, ficha = new Ficha(440, 250);
var canvas = document.getElementById("lienzo");
var c = canvas.getContext("2d");
var tablaPuntos = document.getElementById("puntuacion"); //SCORE 
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
/* window.requestAnimationFrame informa al navegador que quieres realizar una animación y 
solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. 
El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
En este caso se especifican los diferentes tipos de navegadores en los que podría estarse ejecutando
el juego*/

var init = requestAnimationFrame(start);
/**Función que inicializa el juego */
function start() {
    dibujarPorterías();
    crearFicha();
}

function tableroPuntos() {

    tablaPuntos.innerHTML = "Jugador 1 SCORE: " + player1.score + "<br> Jugador 2 SCORE: " + player2.score;

}
/**Función que pinta las porterías en el tablero */
function dibujarPorterías() {
    c.save(); /** Añade las modificaciones que hemos aplicado al canvas. Las guarda, literalmente */
    c.beginPath();
    c.moveTo(99, 195);
    c.lineTo(99, 340);
    c.strokeStyle = "rgba(184, 183, 183, 0.561)";
    c.lineWidth = 7;
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo(775, 195);
    c.lineTo(775, 345);
    c.strokeStyle = "rgba(184, 183, 183, 0.561)";
    c.lineWidth = 7;
    c.stroke();
    c.closePath();
    c.restore(); /**Las últimas actualizaciones se ponen en el "top" y se conservan para los siguientes cambios */
}

function crearFicha() {
    c.save();
    c.beginPath();
    c.fillStyle = "yellow";
    c.arc(440, 250, 20, 0, Math.PI * 2);
    c.fill();
    c.closePath();
    c.restore();
}

/**Función que elimina todo lo que existe en el canvas */
function clear() {
    c.clearRect(0, 0, canvas.width, canvas.height);
}

/**función que muestra los colores para el Jugador 1 */
function showColorsP1() {
    var coloresP1 = document.getElementById("player1");
    coloresP1.style.display = "block";
    coloresP1.style.paddingLeft = "250px";
    coloresP1.style.paddingTop = "90px";
    coloresP1.style.fontSize = "30px";

    var coloresP2 = document.getElementById("player2");
    coloresP2.style.paddingLeft = "250px";
    coloresP2.style.paddingTop = "90px";
    coloresP2.style.fontSize = "30px";

}
/**Función que crea a un jugador con todos sus atributos:
 * posición en X, en Y, tamaño, velocidad en X, en Y, su aceleración, como lo inverso y 
 * su velocidad máxima para moverse
 */
function Player(x, y) {
    /**Xvel and Yvel data variables are created 
     * to remember how quickly a sprite is going in the X direction and the Y direction. */
    this.x = x;
    this.y = y;
    this.size = 35;
    this.xVel = 0;
    this.yVel = 0;
    this.score = 0;
    this.accel = 0.55;
    this.decel = 0.55;
    this.maxSpeed = 3;
}
/**Función que crea la ficha  con todos sus atributos:
 * posición en X, en Y, tamaño, velocidad en X, en Y, su aceleración, como lo inverso y 
 * su velocidad máxima para moverse
 */
function Ficha(x, y) {
    this.x = x;
    this.y = y;
    this.xVel = 0;
    this.yVel = 0;
    this.decel = 0.1;
    this.size = 5;
}
/**Función que crea al primer jugador de la partida */
function createP1() {
    player1 = new Player(100, 250);
    c.save();
    c.fillStyle = colorP1;
    c.beginPath();
    c.arc(player1.x, player1.y, player1.size, 0, Math.PI * 2);
    c.fill();
    c.closePath();
    c.restore();
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "block";
}

/**Función que crea al segundo jugador de la partida */
function createP2() {
    player2 = new Player(770, 250);
    c.save();
    c.fillStyle = colorP2;
    c.beginPath();
    c.arc(player2.x, player2.y, player2.size, 0, Math.PI * 2);
    c.fill();
    c.closePath();
    c.restore();
    document.getElementById("player2").style.display = "none";
    document.getElementById("btnJugadores").style.display = "none";
    tableroPuntos();
}