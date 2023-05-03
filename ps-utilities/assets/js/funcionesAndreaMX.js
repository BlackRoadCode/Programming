/* =============== Funciones copiar =============== */

function executeSAlert(){
  let timerInterval
  Swal.fire({
    title: 'Texto copiado',
    html: 'El texto se encuentra en el portapapeles',
    timer: 1000,
    timerProgressBar: true,
    icon: 'success',
    onBeforeOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          if (b) {
            b.textContent = Swal.getTimerLeft()
          }
        }
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('copy success')
    }
  })
}

function copiarMonsterbanner(  ){

  // Elementos Cintillo
  var checkCintillo = document.getElementById('check-cintillo').checked;
  var urlCintillo = document.getElementById('url-cintillo').value;
  var imgCintilloDesktop = document.getElementById('img-cintillo-desktop').value;
  var imgCintilloMovil = document.getElementById('img-cintillo-movil').value;
  var altCintillo = document.getElementById('alt-cintillo').value;

  // Elementos Monsterbanner
  var urlMonsterbanner = document.getElementById('url-monsterbanner').value;
  var imgMonsterbannerDesktop = document.getElementById('img-cintillo-desk-monsterbanner').value;
  var imgMonsterbannerMovil = document.getElementById('img-cintillo-movil-monsterbanner').value;
  var altMonster = document.getElementById('alt-monster').value;

  if( checkCintillo ){
    var monsterbanner = "<div class='primary-banner-wrapper re-central'><div id='carousel-example-generic' class='carousel slide' data-ride='carousel'><!-- Indicators --><!--=============================================>>>>> = Cintillo ================================================>>>>--> <a style='padding-bottom: 2px;' class='banner' href='" + urlCintillo + "' target='_blank'> <img class='desktop' src='/arquivos/" + imgCintilloDesktop + "' alt='"+ altCintillo +"' title='"+ altCintillo +"'> <img class='mobile' src='/arquivos/" + imgCintilloMovil + "' alt='"+ altCintillo +"' title='" + altCintillo + "'> </a> <!--= End of Fin de Cintillo =*/ <!-=============================================<<<<<--> <!-- Wrapper for slides --> <div class='carousel-inner' role='listbox'> <div class='item active'> <a class='banner' target='_blank' href='" + urlMonsterbanner + "'> <img class='desktop' src='/arquivos/" + imgMonsterbannerDesktop + "' alt='"+altMonster+"' title='"+altMonster+"'> <img class='mobile' src='/arquivos/" + imgMonsterbannerMovil + "' alt='"+altMonster+"' title='"+altMonster+"'> </a> </div> </div> </div> </div>";
  } else {
    var monsterbanner = "<div class='primary-banner-wrapper re-central'><div id='carousel-example-generic' class='carousel slide' data-ride='carousel'><!-- Wrapper for slides --> <div class='carousel-inner' role='listbox'> <div class='item active'> <a class='banner' target='_blank' href='" + urlMonsterbanner + "'> <img class='desktop' src='/arquivos/" + imgMonsterbannerDesktop + "' alt='"+altMonster+"' title='"+altMonster+"'> <img class='mobile' src='/arquivos/" + imgMonsterbannerMovil + "' alt='"+altMonster+"' title='"+altMonster+"'> </a> </div> </div> </div> </div>";
  }


  // Empieza copiado
  var aux = document.createElement("textarea");
  aux.innerHTML = monsterbanner;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  // Alert
  executeSAlert('timer');

}

function copiarContentUno(  ){

  // elementos img 1
  var urlc1i1 = document.getElementById('url-c1-i1').value;
  var imgc1i1 = document.getElementById('img-c1-i1').value;
  var altc1i1 = document.getElementById('alt-c1-i1').value;

  // elementos img 2
  var urlc1i2 = document.getElementById('url-c1-i2').value;
  var imgc1i2 = document.getElementById('img-c1-i2').value;
  var altc1i2 = document.getElementById('alt-c1-i2').value;

  // elementos img 3
  var urlc1i3 = document.getElementById('url-c1-i3').value;
  var imgc1i3 = document.getElementById('img-c1-i3').value;
  var altc1i3 = document.getElementById('alt-c1-i3').value;

  var content1 = "<div class='BoardInfo-list'><a href='"+ urlc1i1 +"' class='BoardInfo-item transition-hover'><img src='/arquivos/"+ imgc1i1 +"' alt='"+ altc1i1 +"' title='"+ altc1i1 +"'></a> <a href='"+ urlc1i2 +"' class='BoardInfo-item transition-hover'><img src='/arquivos/"+ imgc1i2 +"' alt='"+ altc1i2 +"' title='"+ altc1i2 +"' class='img-100'></a> <a href='"+ urlc1i3 +"' class='BoardInfo-item transition-hover'><img src='/arquivos/"+ imgc1i3 +"' alt='"+ altc1i3 +"' title='"+ altc1i3 +"' class='img-100'></a></div><div id='BoardBrands01' class='BoardBrands-list'> <a href='/nike' target='_blank' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-nike'></use></svg></a> <a href='/adidas' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-adidas'></use></svg></a> <a href='/reebok' class='BoardBrands-item'><img style='max-width: 63%; opacity: .6;' class='img-brand-logo' src='/arquivos/lnd-reebok-logo.gif' alt=''></a> <a href='/puma' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-puma'></use></svg></a> <a href='/converse' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-converse'></use></svg></a> <a href='/vans' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-vans'></use></svg></a> <a href='/dc-shoes' class='BoardBrands-item'><svg class='svg-icon--square'><use xlink:href='#brand-dc'></use></svg></a> <a href='/under-armour' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-under-armour'></use></svg></a> <a href='/everlast' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-everlast'></use></svg></a> <a href='/jeep' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-jeep'></use></svg></a></div>";

  // empieza copiado
  // Empieza copiado
  var aux = document.createElement("textarea");
  aux.innerHTML = content1;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  // Alert
  executeSAlert('timer');

}

function copiarContentDos(  ){

  // elementos img 1
  var urlImg1 = document.getElementById('url-c2-i1').value;
  var imgImg1 = document.getElementById('img-c2-i1').value;
  var altImg1 = document.getElementById('alt-c2-i1').value;

  // elementos img 2
  var urlImg2 = document.getElementById('url-c2-i2').value;
  var imgImg2 = document.getElementById('img-c2-i2').value;
  var altImg2 = document.getElementById('alt-c2-i2').value;

  // elementos img 3
  var urlImg3 = document.getElementById('url-c2-i3').value;
  var imgImg3 = document.getElementById('img-c2-i3').value;
  var altImg3 = document.getElementById('alt-c2-i3').value;

  // elementos img 4
  var urlImg4 = document.getElementById('url-c2-i4').value;
  var imgImg4 = document.getElementById('img-c2-i4').value;
  var altImg4 = document.getElementById('alt-c2-i4').value;

  // elementos img 5
  var urlImg5 = document.getElementById('url-c2-i5').value;
  var imgImg5 = document.getElementById('img-c2-i5').value;
  var altImg5 = document.getElementById('alt-c2-i5').value;

  // elementos img 6
  var urlImg6 = document.getElementById('url-c2-i6').value;
  var imgImg6 = document.getElementById('img-c2-i6').value;
  var altImg6 = document.getElementById('alt-c2-i6').value;

  // elementos img 7
  var urlImg7 = document.getElementById('url-c2-i7').value;
  var imgImg7 = document.getElementById('img-c2-i7').value;
  var altImg7 = document.getElementById('alt-c2-i7').value;

  var content2 = "<h3 class='tag-title--level-1'>Tendencia</h3><div class='BoardCategory-list'><a href='"+ urlImg1 +"' class='BoardCategory-item transition-hover'><img src='/arquivos/"+ imgImg1 +"' alt='"+ altImg1 +"' title='"+ altImg1 +"' class='img-100'></a> <a href='"+ urlImg2 +"' class='BoardCategory-item transition-hover'><img src='/arquivos/"+ imgImg2 +"' alt='"+ altImg2 +"' title='"+ altImg2 +"' class='img-100'></a></div><div class='BoardCategory-list'><a href='"+ urlImg3 +"' class='BoardCategory-item transition-hover'><img src='/arquivos/"+ imgImg3 +"' alt='"+ altImg3 +"' title='"+ altImg3 +"' class='img-100'></a> <a href='"+ urlImg4 +"' class='BoardCategory-item transition-hover'><img src='/arquivos/"+ imgImg4 +"' alt='"+ altImg4 +"' title='"+ altImg4 +"' class='img-100'></a></div><div id='BoardBrands02' class='BoardBrands-list--own'><a href='http://cdn-img.andrea.com/mx/1/89/' target='_blank' class='BoardBrands-item'><img style='max-width: 90%; opacity: 1;' class='img-brand-logo' src='/arquivos/log-n-confort.png'></a><a href='http://cdn-img.andrea.com/mx/1/331/' target='_blank' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andr'></use></svg></a> <a href='http://cdn-img.andrea.com/mx/1/330/' target='_blank' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-frt'></use></svg></a> <a href='/andrea-premium' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andrea-premium'></use></svg></a> <a href='/Mia-Andrea?fq=B:2000041' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-mia'></use></svg></a> <a href='http://cdn-img.andrea.com/mx/1/18/' target='_blank' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andrea-accesorios'></use></svg></a> <a href='http://cdn-img.andrea.com/mx/25/177/' target='_blank' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-ferrato-sport'></use></svg></a> <a href='http://cdn-img.andrea.com/mx/25/203/' target='_blank' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andrea-sport'></use></svg></a> <a href='/belleza/Unisex?map=c,specificationFilter_363' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andrea-iu'></use></svg></a> <a href='/ferrato' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-ferrato'></use></svg></a></div><div class='BoardCategory-list'><a href='"+ urlImg5 +"' target='_blank' class='BoardCategory-item transition-hover'><img src='/arquivos/"+ imgImg5 +"' alt='"+ altImg5 +"' title='"+ altImg5 +"' class='img-100'></a> <a href='"+ urlImg6 +"' target='_blank' class='BoardCategory-item transition-hover'><img src='/arquivos/"+ imgImg6 +"' alt='"+ altImg6 +"' title='"+ altImg6 +"' class='img-100'></a> <a href='"+ urlImg7 +"' class='BoardCategory-item transition-hover'><img src='/arquivos/"+ imgImg7 +"' alt='"+ altImg7 +"' title='"+ altImg7 +"' class='img-100'></a></div><h3 class='tag-title--level-1' style='padding-top: 5%; margin-bottom: -3%;'>Última Oportunidad</h3>";

  // Empieza copiado
  var aux = document.createElement("textarea");
  aux.innerHTML = content2;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  // Alert
  executeSAlert('timer');

}

function copiarContentTres(  ){

  // elementos looks
  var urlImg1 = document.getElementById('url-c3-i1').value;
  var imgImg1 = document.getElementById('img-c3-i1').value;
  var altImg1 = document.getElementById('alt-c3-i1').value;

  var urlImg2 = document.getElementById('url-c3-i2').value;
  var imgImg2 = document.getElementById('img-c3-i2').value;
  var altImg2 = document.getElementById('alt-c3-i2').value;

  var urlImg3 = document.getElementById('url-c3-i3').value;
  var imgImg3 = document.getElementById('img-c3-i3').value;
  var altImg3 = document.getElementById('alt-c3-i3').value;

  var urlImg4 = document.getElementById('url-c3-i4').value;
  var imgImg4 = document.getElementById('img-c3-i4').value;
  var altImg4 = document.getElementById('alt-c3-i4').value;

  // Elementos Monsterbanner
  var urlImgMB = document.getElementById('url-monsterbanner-down').value;
  var altImgMB = document.getElementById('alt-monsterbanner').value;
  var imgImgMB = document.getElementById('img-monsterbanner').value;

  var urlVideoMB = document.getElementById('url-c3-video').value;
  var idVideoMB = document.getElementById('id-c3-video').value;

  var checkMonsterOpt1 = document.querySelector('#form-monster');
  var checkMonsterOpt2 = document.querySelector('#form-video');

  console.log("esto trae monster", checkMonsterOpt1.classList.contains('active'));

  if( checkMonsterOpt2.classList.contains('inactive') && !checkMonsterOpt1.classList.contains('inactive') ){
    // Crear Banner
    var content3 = "<div class='item active'> <a class='banner' target='_blank' href='" +urlImgMB+ "'> <img class='desktop' src='/arquivos/" +imgImgMB+ "' alt='" +altImgMB+ "' title='" +altImgMB+ "'> </a></div><h3 class='tag-title--level-1'>Looks</h3><div style='padding-bottom:5%;' class='BoardInfo-list'> <div style='padding:0;' class='col-lg-3'> <a href='" +urlImg1+ "'><img class='img-100 opacidadImg' alt='" +altImg1+ "' title='" +altImg1+ "' src='/arquivos/" +imgImg1+ "'></a></div><div style='padding:0;' class='col-lg-3'> <a href='" +urlImg2+ "'><img class='img-100 opacidadImg' alt='" +altImg2+ "' title='" +altImg2+ "' src='/arquivos/" +imgImg2+ "'></a></div><div style='padding:0;' class='col-lg-3'> <a href='" +urlImg3+ "'><img class='img-100 opacidadImg' alt='" +altImg3+ "' title='" +altImg3+ "' src='/arquivos/" +imgImg3+ "'></a></div><div style='padding:0;' class='col-lg-3'> <a href='" +urlImg4+ "'><img class='img-100 opacidadImg' alt='" +altImg4+ "' title='" +altImg4+ "' src='/arquivos/" +imgImg4+ "'></a></div></div>";
  } else {
    console.log("Creando video");
    // Create video
    var content3 = "<div class='video-responsive--16:9 vid-superior'> <iframe src='https://player.vimeo.com/video/"+idVideoMB+"?autoplay=1&muted=1&loop=1&autopause=0&background=1' frameborder='0' allow=autoplay></iframe> <a href='"+urlVideoMB+"' class='MonsterVideo-CTA--full'></a></div><h3 class='tag-title--level-1'>Looks</h3><div style='padding-bottom:5%;' class='BoardInfo-list'> <div style='padding:0;' class='col-lg-3'> <a href='" +urlImg1+ "'><img class='img-100 opacidadImg' alt='" +altImg1+ "' title='" +altImg1+ "' src='/arquivos/" +imgImg1+ "'></a></div><div style='padding:0;' class='col-lg-3'> <a href='" +urlImg2+ "'><img class='img-100 opacidadImg' alt='" +altImg2+ "' title='" +altImg2+ "' src='/arquivos/" +imgImg2+ "'></a></div><div style='padding:0;' class='col-lg-3'> <a href='" +urlImg3+ "'><img class='img-100 opacidadImg' alt='" +altImg3+ "' title='" +altImg3+ "' src='/arquivos/" +imgImg3+ "'></a></div><div style='padding:0;' class='col-lg-3'> <a href='" +urlImg3+ "'><img class='img-100 opacidadImg' alt='" +altImg4+ "' title='" +altImg4+ "' src='/arquivos/" +imgImg4+ "'></a></div></div>";
  }

  // Empieza copiado
  var aux = document.createElement("textarea");
  aux.innerHTML = content3;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  // Alert
  executeSAlert('timer');

}

function selectorElementos( idCheckElemento1, idCheckElemento2, idForm1, idForm2 ){

  var checkMonsterOpt1 = document.querySelector('#'+idCheckElemento1);
  var checkMonsterOpt2 = document.querySelector('#'+idCheckElemento2);

  const formMonster = document.querySelector('#'+idForm1)
  const formVideo = document.querySelector('#'+idForm2)

  if( checkMonsterOpt1.classList.contains('active') ){
    formMonster.classList.toggle('inactive');
    formVideo.classList.add('inactive');
  }

  if( checkMonsterOpt2.classList.contains('active') ){
    formVideo.classList.toggle('inactive');
    formMonster.classList.add('inactive');
  }
}

// No se usa
function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("textarea");
  aux.innerHTML = document.getElementById(id_elemento).innerText;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
