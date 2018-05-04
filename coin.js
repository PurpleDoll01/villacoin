var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

var x1 = 250;
var y1 = 420;
var lpm = 0;



document.addEventListener("keydown", dibujarTeclado);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var coin = {
  url: "coin.png",
  cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

coin.imagen = new Image();
coin.imagen.src = coin.url;
coin.imagen.addEventListener("load", cargarCoin);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}
function cargarCoin()
{
  coin.cargaOK = true;
  var intentando = 1;
  dibujar();

}


function dibujar()
{
  intentando = 1;
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(coin.cargaOK == true)
  {
    papel.drawImage(coin.imagen, 200, 30);
    papel.drawImage(coin.imagen, 400, 300);
  }
  if(cerdo.cargaOK == true)
  {
    papel.drawImage(cerdo.imagen, x1, y1);
  }
  if(coin.cargaOK == true)
  {
    if(x1 != 0 || y1 != 150)
    {
      if(intentando == 1)
      {
        papel.drawImage(coin.imagen, 0, 150);
        intentando = intentando + 1;
        nodibujar();

      }
    }
  }
}

function nodibujar()
{
  intentando = 2;
}


function dibujarTeclado(evento)
{

  var movimiento = 5;


  switch(evento.keyCode)
  {
    case teclas.UP:
      y1 = y1 - movimiento;
      if(y1 == 150)
      {
        intentando = 2;
      }
      dibujar();
    break;
    case teclas.DOWN:
      y1 = y1 + movimiento;
      dibujar();
    break;
    case teclas.RIGHT:
      x1 = x1 + movimiento;
      dibujar();
    break;
    case teclas.LEFT:
      x1 = x1 - movimiento;
      dibujar();
    break;
  }
}



function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
