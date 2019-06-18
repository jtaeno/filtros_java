function main() {
  console.log("En main()....")

  var imagen = document.getElementById('imagenhole1')
  var imagen1 = document.getElementById('imagenhole1')
  var canvas = document.getElementById('display');

  rojo = document.getElementById('rojo')
  verde = document.getElementById('verde')
  azul = document.getElementById('azul')
  trans = document.getElementById('trans')
  range_value = document.getElementById('range_value')
  canvas.width = imagen.width;
  canvas.height = imagen.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(imagen, 0,0,300,200);
  function print_imagen(data){
    barra_rojo = rojo.value
    barra_verde = verde.value
    barra_azul = azul.value
    barra_trans = trans.value
    console.log(data.length/2)
    console.log(data.h)
    for (var i = 0; i < imagenData.height/2; i+=4) {
        if (data[i] > barra_rojo){
          data[i] = barra_rojo;
      }
    }
    for (var i = 0; i < data.length/2; i+=4) {
      if (data[i+1] > barra_verde){
        data[i+1] = barra_verde;
      }
    }
    for (var i = 0; i < data.length/2; i+=4) {
      if (data[i+2] > barra_azul){
        data[i+2] = barra_azul;
      }
    }
    for (var i = data.length/2; i < data.length ; i+=4) {
      if (data[i+3] > barra_trans){
        data[i+3] = barra_trans;
      }
    }
  }
  rojo.oninput = () => {
    range_value.innerHTML = rojo.value
    ctx.drawImage(imagen, 0,0,300,200);
    var imagenData = ctx.getImageData(0, 0, 300, 200);
    console.log(imagenData)
    console.log(imagenData.height)
    var data = imagenData.data
    print_imagen(data);
    ctx.putImageData(imagenData, 0, 0);
  }
  verde.oninput = () => {
    range_value.innerHTML = verde.value
    ctx.drawImage(imagen, 0,0,300,200);
    var imagenData = ctx.getImageData(0, 0, 300, 200);
    var data = imagenData.data
    print_imagen(data)
    ctx.putImageData(imagenData, 0, 0);
  }
  azul.oninput = () => {
    range_value.innerHTML = azul.value
    ctx.drawImage(imagen, 0,0,300,200);
    var imagenData = ctx.getImageData(0, 0, 300, 200);
    var data = imagenData.data
    print_imagen(data)
    ctx.putImageData(imagenData, 0,0 );
  }
  trans.oninput = () => {
    range_value.innerHTML = trans.value
    ctx.drawImage(imagen,0,0,300,200);
    var imagenData1 = ctx.getImageData(0, 0, 300, 200);
    var data1 = imagenData1.data
    print_imagen(data1)
    ctx.putImageData(imagenData1,0,0);
  }
}
