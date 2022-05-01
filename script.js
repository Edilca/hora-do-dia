function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  //var hora = ;
  msg.innerHTML = `Agora são ${hora} hora e ${min} minutos.`;
  if (hora >= 0 && hora < 12) {
    img.src = './img/dia.jpg';
    document.body.style.background = '#e2cd9f';
  } else if (hora >= 12 && hora <= 18) {
    img.src = './img/tarde.jpg';
    document.body.style.background = '#b9846f';
  } else {
    img.src = './img/noite.jpg';
    document.body.style.background = '#515154';
  }
}
