var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

var x1 = 250;
var y1 = 420;
var lpm = 0;
var x, e;



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
var coin1 = {
  url: "coin1.png",
  cargaOK: false
};
var coin2 = {
  url: "coin2.png",
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

coin1.imagen = new Image();
coin1.imagen.src = coin1.url;
coin1.imagen.addEventListener("load", cargarCoin1);

coin2.imagen = new Image();
coin2.imagen.src = coin2.url;
coin2.imagen.addEventListener("load", cargarCoin2);



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
  dibujar();
}
function cargarCoin1()
{
  coin1.cargaOK = true;
  dibujar();
}
function cargarCoin2()
{
  coin2.cargaOK = true;
  dibujar();
}


function dibujar()
{

  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(cerdo.cargaOK == true)
  {
    papel.drawImage(cerdo.imagen, x1, y1);
  }
  if (x1 <= 30 && y1 <= 160 && y1 >= 90 )
  {
    coin.cargaOK = false;
  }
  else
  {
    if(coin.cargaOK == true)
    {
      if(x1 >= 30 || y1 >= 160 || y1 <= 90)
      {
         papel.drawImage(coin.imagen, 0, 150);
      }
    }
  }
  if (x1 >= 130 && x1 <= 230 && y1 <= 45 && y1 >= -30 )
  {
    coin1.cargaOK = false;
  }
  else
  {
    if(coin1.cargaOK == true)
    {
      if(x1 <= 130 ||x1 >= 230 || y1 >= 45 || y1 <= -30)
      {
         papel.drawImage(coin1.imagen, 200, 30);
      }
    }
  }
  if (x1 >= 330 && x1 <= 430 && y1 <= 315 && y1 >= 240 )
  {
    coin2.cargaOK = false;
  }
  else
  {
    if(coin2.cargaOK == true)
    {
      if(x1 <= 330 ||x1 >= 430 || y1 >= 290 || y1 <= 240)
      {
         papel.drawImage(coin2.imagen, 400, 300);
      }
    }
  }
}


function dibujarTeclado(evento)
{

  var movimiento = 5;


  switch(evento.keyCode)
  {
    case teclas.UP:
      y1 = y1 - movimiento;
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
