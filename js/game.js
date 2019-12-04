/**
 * Tipo de componente: JavaScript
 * Descripción: Código que hace posible el juego de la mesa de hockey
 * Última modificación: 1:27 pm 4/12/2019
 * Desarrolladores: Andrea, Tania, Alfredo y Jair
 */

/**Color de las fichas de los jugadores */
colorP1 = "#f2f";
colorP2 = "#fff";
/**Variables de los jugadores y la ficha  */
var player1 = new Player(100, 250),
    player2 = new Player(770, 250),
    ficha = new Ficha(440, 250);
/**Canvas */
var canvas = document.getElementById("lienzo");
var c = canvas.getContext("2d");

/**Tabla de puntos  */
var tablaPuntos = document.getElementById("puntuacion"); //SCORE 
/**Movimientos de los jugadores (teclas) */
var wDown = false;
var sDown = false;
var aDown = false;
var dDown = false;
var upDown = false;
var downDown = false;
var leftDown = false;
var rightDown = false;


/* window.requestAnimationFrame informa al navegador que quieres realizar una animación y 
solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. 
El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
En este caso se especifican los diferentes tipos de navegadores en los que podría estarse ejecutando
el juego*/
window.addEventListener("load", start, false);
var init = requestAnimationFrame(start);

/**Iniciar animación */
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

/**Función que inicializa el tablero del juego */
function start() {
    dibujarPorterías();
    dibujarTablero()
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
    c.arc(440, 250, 5, 0, Math.PI * 2);
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
    this.size = 20;
    this.xVel = 0;
    this.yVel = 0;
    this.score = 0;
    this.accel = 0.55;
    this.decel = 0.55;
    this.velocidadMax = 3;
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
    requestAnimationFrame(play)
}
/**Función por evento en el que detecta qué tecla dejó de ser presionada, si es alguna
 * de las especificadas (AWSD o IZQ-ARRIBA-ABAJO-DER) cambia su estado a falso
 */
document.onkeyup = function(e) {
    if (e.keyCode === 87) {
        wDown = false;
    }
    if (e.keyCode === 65) {
        aDown = false;
    }
    if (e.keyCode === 68) {
        dDown = false;
    }
    if (e.keyCode === 83) {
        sDown = false;
    }
    if (e.keyCode === 38) {
        upDown = false;
    }
    if (e.keyCode === 37) {
        leftDown = false;
    }
    if (e.keyCode === 40) {
        downDown = false;
    }
    if (e.keyCode === 39) {
        rightDown = false;
    }
}

/**Función por evento en el que detecta qué tecla es presionada, si es alguna
 * de las especificadas (AWSD o IZQ-ARRIBA-ABAJO-DER) cambia su estado a falso
 */
document.onkeydown = function(e) {
    if (e.keyCode === 87) {
        wDown = true;
    }
    if (e.keyCode === 65) {
        aDown = true;
    }
    if (e.keyCode === 68) {
        dDown = true;
    }
    if (e.keyCode === 83) {
        sDown = true;
    }
    if (e.keyCode === 38) {
        upDown = true;
    }
    if (e.keyCode === 37) {
        leftDown = true;
    }
    if (e.keyCode === 40) {
        downDown = true;
    }
    if (e.keyCode === 39) {
        rightDown = true;
    }
}

/**Función que mueve a los jugadores en el tablero, revisando el estado de las teclas */

function teclasJugadores() {
    if (wDown) {
        //Si W (arriba) está presionado, entonces.... 
        if (player1.yVel > -player1.velocidadMax) {
            //Si el desplazamiento en Y del J1 es mayor al negativo de su máx.velocidad entonces
            //su desplazamiento en y será restado por su aceleración 
            player1.yVel -= player1.accel;
        } else {
            //de lo contrario, su desplazamiento en Y será igual al negativo de su velocidad Max (-3)
            player1.yVel = -player1.velocidadMax;
        }
    } else {
        //de lo contrario... 
        if (player1.yVel < 0) {
            //si el desplazamiento en Y es menor a 0 entonces
            //se le sumará su desaceleración 
            player1.yVel += player1.decel;
            if (player1.yVel > 0) player1.yVel = 0;
        }
    }
    if (sDown) {
        if (player1.yVel < player1.velocidadMax) {
            player1.yVel += player1.accel;
        } else {
            player1.yVel = player1.velocidadMax;
        }
    } else {
        if (player1.yVel > 0) {
            player1.yVel -= player1.decel;
            if (player1.yVel < 0) player1.yVel = 0;
        }
    }
    if (aDown) {
        if (player1.xVel > -player1.velocidadMax) {
            player1.xVel -= player1.accel;
        } else {
            player1.xVel = -player1.velocidadMax;
        }
    } else {
        if (player1.xVel < 0) {
            player1.xVel += player1.decel;
            if (player1.xVel > 0) player1.xVel = 0;
        }
    }
    if (dDown) {
        if (player1.xVel < player1.velocidadMax) {
            player1.xVel += player1.accel;
        } else {
            player1.xVel = player1.velocidadMax;
        }
    } else {
        if (player1.xVel > 0) {
            player1.xVel -= player1.decel;
            if (player1.xVel < 0) player1.xVel = 0;
        }
    }

    //PLAYER 2

    if (upDown) {
        if (player2.yVel > -player2.velocidadMax) {
            player2.yVel -= player2.accel;
        } else {
            player2.yVel = -player2.velocidadMax;
        }
    } else {
        if (player2.yVel < 0) {
            player2.yVel += player2.decel;
            if (player2.yVel > 0) player2.yVel = 0;
        }
    }
    if (downDown) {
        if (player2.yVel < player2.velocidadMax) {
            player2.yVel += player2.accel;
        } else {
            player2.yVel = player2.velocidadMax;
        }
    } else {
        if (player2.yVel > 0) {
            player2.yVel -= player2.decel;
            if (player2.yVel < 0) player2.yVel = 0;
        }
    }
    if (leftDown) {
        if (player2.xVel > -player2.velocidadMax) {
            player2.xVel -= player2.accel;
        } else {
            player2.xVel = -player2.velocidadMax;
        }
    } else {
        if (player2.xVel < 0) {
            player2.xVel += player2.decel;
            if (player2.xVel > 0) player2.xVel = 0;
        }
    }
    if (rightDown) {
        if (player2.xVel < player2.velocidadMax) {
            player2.xVel += player2.accel;
        } else {
            player2.xVel = player2.velocidadMax;
        }
    } else {
        if (player2.xVel > 0) {
            player2.xVel -= player2.decel;
            if (player2.xVel < 0) player2.xVel = 0;
        }
    }
}

/**Mover las fichas de los jugadores */
function moverJugadores() {
    player1.x += player1.xVel;
    player1.y += player1.yVel;
    player2.x += player2.xVel;
    player2.y += player2.yVel;
}
/**Función que determina en dónde están los jugadores (fuera o dentro del área de juego) */

function ubicacionJugadores() {
    //Jugador 1 en X (ancho)
    if (player1.x + player1.size > canvas.width) {
        player1.x = canvas.width - player1.size;
        player1.xVel *= -0.5;
    }
    if (player1.x - player1.size < 0) {
        player1.x = 0 + player1.size;
        player1.xVel *= -0.5;
    }
    //jugador 1 en Y (alto)
    if (player1.y + player1.size > canvas.height) {
        player1.y = canvas.height - player1.size;
        player1.yVel *= -0.5;
    }
    if (player1.y - player1.size < 0) {
        player1.y = 0 + player1.size;
        player1.yVel *= -0.5;
    }
    //Jugador 2 en X (ancho)
    if (player2.x + player2.size > canvas.width) {
        player2.x = canvas.width - player2.size;
        player2.xVel *= -0.5;
    }
    if (player2.x - player2.size < 0) {
        player2.x = 0 + player2.size;
        player2.xVel *= -0.5;
    }
    //Jugador 2 en Y (alto)
    if (player2.y + player2.size > canvas.height) {
        player2.y = canvas.height - player2.size;
        player2.yVel *= -0.5;
    }
    if (player2.y - player2.size < 0) {
        player2.y = 0 + player2.size;
        player2.yVel *= -0.5;
    }
}
/**Función que hace el juego posible :D */
function play() {

    clear(); //limpia el canvas
    dibujarTablero() //dibuja el tablero
    dibujarPorterías() //dibuja las porterías
    teclasJugadores(); //checa las teclas de los jugadores
    ubicacionJugadores();
    ubicacionFicha();
    choqueFicha(); //checa si algún jugador ha chocado con la pelota 
    moverJugadores(); //desplaza a los jugadores
    moveficha(); //mueve la ficha
    cargarJugadores(); //carga a los jugadores con su nueva posición
    nuevaFicha(); //carga la ficha en su nueva posición 
    tableroPuntos(); //actualiza el tablero 
    requestAnimationFrame(play);
}
/**Función que dibuja a la ficha con la que se juega en su nueva posición */
function nuevaFicha() {
    c.save();
    c.beginPath();
    c.fillStyle = "yellow";
    c.arc(ficha.x, ficha.y, ficha.size, 0, Math.PI * 2);
    c.fill();
    c.closePath();
    c.restore();
}
//Función que carga a los jugadores en su nueva posición en el canvas 
function cargarJugadores() {
    c.save();
    c.fillStyle = colorP1
    c.beginPath();
    c.arc(player1.x, player1.y, player1.size, 0, Math.PI * 2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = colorP2
    c.arc(player2.x, player2.y, player2.size, 0, Math.PI * 2);
    c.fill();
    c.closePath();
    c.restore();
}
//cuando se anota un Gol, la ubicación de los jugadores y la pelota vuelve a su posición inicial, así como el estado
/**de las teclas de los jugadores, el score se conserva */
function reset() {
    var score1 = player1.score;
    var score2 = player2.score;
    player1 = new Player(100, 250);
    player1.score = score1;
    player2 = new Player(600, 250);
    player2.score = score2;
    ficha = new Ficha(350, 250);
    wDown = false;
    sDown = false;
    aDown = false;
    dDown = false;
    upDown = false;
    downDown = false;
    leftDown = false;
    rightDown = false;
}

/**Función que detecta cuando un jugador ha tocado/chocado con la ficha y crea el "rebote" */
function choqueFicha() {
    var distanciaJ1 = separacion(player1.x, player1.y, ficha.x, ficha.y) - player1.size - ficha.size;
    if (distanciaJ1 < 0) {
        choqueFichaXJugador(ficha, player1);
    }
    var distanciaJ2 = separacion(player2.x, player2.y, ficha.x, ficha.y) - player2.size - ficha.size;
    if (distanciaJ2 < 0) {
        choqueFichaXJugador(ficha, player2);
    }
}
/**Función que es invocada cuando la distancia entre la ficha y un jugador es menor a 0 es decir, están cerca.
 * Esta función hace el rebote de la pelota con el jugador, determinando su desplazamiento en X y Y de acuerdo a 
 * la ubicación del jugador que la golpeó. 
 */
function choqueFichaXJugador(ficha, jugador) {
    var dx = (ficha.x - jugador.x) / (ficha.size);
    var dy = (ficha.y - jugador.y) / (ficha.size);
    jugador.xVel = -dx;
    jugador.yVel = -dy;
    ficha.xVel = dx;
    ficha.yVel = dy;
}
/**Función que obtiene la distancia que existe entre un jugador y la ficha */
function separacion(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
/**Mueve la ficha en la posición deseada. 
 * Esta función fue la más fea de codificar, se utiliza la "velocidad" del objeto para crear ese efecto de 
 * "deslice" que en realidad es como los "saltos" en pixeles que da para llegar a cierto lugar y la "velocidad"
 * en lo que lo hace. Crea ese efecto de desplazamiento rápido a lento a una dirección
 */
function moveficha() {
    if (ficha.xVel !== 0) {
        if (ficha.xVel > 0) {
            ficha.xVel -= ficha.decel;
            if (ficha.xVel < 0) ficha.xVel = 0;
        } else {
            ficha.xVel += ficha.decel;
            if (ficha.xVel > 0) ficha.xVel = 0;
        }
    }
    if (ficha.yVel !== 0) {
        if (ficha.yVel > 0) {
            ficha.yVel -= ficha.decel;
            if (ficha.yVel < 0) ficha.yVel = 0;
        } else {
            ficha.yVel += ficha.decel;
            if (ficha.yVel > 0) ficha.yVel = 0;
        }
    }
    ficha.x += ficha.xVel;
    ficha.y += ficha.yVel;
}

/**Función que determina en dónde está la ficha, si pasa los límites del área del juego en una altura en 
 * específica, entonces es un gol y actualiza el score del jugador 
 */
function ubicacionFicha() {
    if (ficha.x + ficha.size > 770) {
        if (ficha.y > 150 && ficha.y < 350) {
            player1.score++;
            reset();
            return;
        }
        ficha.x = canvas.width - ficha.size;
        ficha.xVel *= -1.5;
    }
    if (ficha.x - ficha.size < 70) {
        if (ficha.y > 150 && ficha.y < 350) {
            player2.score++;
            reset();
            return;
        }
        ficha.x = 0 + ficha.size;
        ficha.xVel *= -1.5;
    }
    if (ficha.y + ficha.size > canvas.height) {
        ficha.y = canvas.height - ficha.size;
        ficha.yVel *= -1.5;
    }
    if (ficha.y - ficha.size < 0) {
        ficha.y = 0 + ficha.size;
        ficha.yVel *= -1.5;
    }
}
/**Función que determina la ubicación de los jugadores, por ej. cuando llega a los límites del canvas
 * Si llega al límite, lo retrocede (lo que es el tamaño de la pelota) hacia abajo, arriba, derecha o izquierda
 * de acuerdo al límite o línea que haya intentado pasar
 */
function ubicacionJugadores() {
    if (player1.x + player1.size > canvas.width) {
        player1.x = canvas.width - player1.size;
        player1.xVel *= -0.5;
    }
    if (player1.x - player1.size < 0) {
        player1.x = 0 + player1.size;
        player1.xVel *= -0.5;
    }
    if (player1.y + player1.size > canvas.height) {
        player1.y = canvas.height - player1.size;
        player1.yVel *= -0.5;
    }
    if (player1.y - player1.size < 0) {
        player1.y = 0 + player1.size;
        player1.yVel *= -0.5;
    }
    if (player2.x + player2.size > canvas.width) {
        player2.x = canvas.width - player2.size;
        player2.xVel *= -0.5;
    }
    if (player2.x - player2.size < 0) {
        player2.x = 0 + player2.size;
        player2.xVel *= -0.5;
    }
    if (player2.y + player2.size > canvas.height) {
        player2.y = canvas.height - player2.size;
        player2.yVel *= -0.5;
    }
    if (player2.y - player2.size < 0) {
        player2.y = 0 + player2.size;
        player2.yVel *= -0.5;
    }
}


/**Función que dibuja el tablero o la mesa de hockey. */
function dibujarTablero() {
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