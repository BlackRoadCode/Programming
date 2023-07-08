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

function copyHeadband(){
  let urlCintillo = document.getElementById('url-cintillo').value;
  let imgCintilloDesktop = document.getElementById('img-cintillo-desktop').value;
  let imgCintilloMovil = document.getElementById('img-cintillo-movil').value;
  let altCintillo = document.getElementById('alt-cintillo').value;

  let cintillo = `
  <a style='padding-bottom: 2px;' class='banner' href='${ urlCintillo }' target='_blank'>
    <img class='desktop' src='/arquivos/${ imgCintilloDesktop }' alt='${ altCintillo }' title='${ altCintillo }'>
    <img class='mobile' src='/arquivos/${ imgCintilloMovil }' alt='${ altCintillo }' title='${ altCintillo }'>
  </a>`;

   // Empieza copiado
   var aux = document.createElement("textarea");
   aux.innerHTML = cintillo;
   document.body.appendChild(aux);
   aux.select();
   document.execCommand("copy");
   document.body.removeChild(aux);
 
   // Alert
   executeSAlert('timer');
}

function copyMonsterbanner(){
  let urlMonsterbanner = document.getElementById('url-monsterbanner').value;
  let imgMonsterbannerDesktop = document.getElementById('img-cintillo-desk-monsterbanner').value;
  let imgMonsterbannerMovil = document.getElementById('img-cintillo-movil-monsterbanner').value;
  let altMonster = document.getElementById('alt-monster').value;

  let monsterbanner = `
  <div class='item'>
      <a class='banner' href='${ urlMonsterbanner }'>
          <img class='desktop' src='/arquivos/${ imgMonsterbannerDesktop }' alt='${ altMonster }' title='${ altMonster }'>
          <img class='mobile' src='/arquivos/${ imgMonsterbannerMovil }' alt='${ altMonster }' title='${ altMonster }'>
      </a>
  </div>`;

  // copy process
  var aux = document.createElement("textarea");
  aux.innerHTML = monsterbanner;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  executeSAlert('timer');
}

function copyContentTwo(){
  // elementos img 1
  let urlImg1 = document.getElementById('url-c2-i1').value;
  let imgImg1 = document.getElementById('img-c2-i1').value;
  let altImg1 = document.getElementById('alt-c2-i1').value;

  // elementos img 2
  let urlImg2 = document.getElementById('url-c2-i2').value;
  let imgImg2 = document.getElementById('img-c2-i2').value;
  let altImg2 = document.getElementById('alt-c2-i2').value;

  // elementos img 3
  let urlImg3 = document.getElementById('url-c2-i3').value;
  let imgImg3 = document.getElementById('img-c2-i3').value;
  let altImg3 = document.getElementById('alt-c2-i3').value;

  // elementos img 4
  let urlImg4 = document.getElementById('url-c2-i4').value;
  let imgImg4 = document.getElementById('img-c2-i4').value;
  let altImg4 = document.getElementById('alt-c2-i4').value;

  // elementos img 5
  let urlImg5 = document.getElementById('url-c2-i5').value;
  let imgImg5 = document.getElementById('img-c2-i5').value;
  let altImg5 = document.getElementById('alt-c2-i5').value;

  // elementos img 6
  let urlImg6 = document.getElementById('url-c2-i6').value;
  let imgImg6 = document.getElementById('img-c2-i6').value;
  let altImg6 = document.getElementById('alt-c2-i6').value;

  // elementos img 7
  let urlImg7 = document.getElementById('url-c2-i7').value;
  let imgImg7 = document.getElementById('img-c2-i7').value;
  let altImg7 = document.getElementById('alt-c2-i7').value;

  let content2 = `
  <h3 class='tag-title--level-1'>Tendencia</h3>
    <div class='BoardCategory-list'>
        <a href='${ urlImg1 }' class='BoardCategory-item transition-hover hidden-sm hidden-xs'>
            <img src='/arquivos/${ imgImg1 }' alt='Andrea | ${ altImg1 }' title='Andrea | ${ altImg1 }' class='img-100'>
        </a>
        <a href='${ urlImg2 }' class='BoardCategory-item transition-hover'>
            <img src='/arquivos/${ imgImg2 }' alt='Andrea | ${ altImg2 }' title='Andrea | ${ altImg2 }' class='img-100'>
        </a>
    </div>
    <div class='BoardCategory-list'>
        <a href='${ urlImg3 }' class='BoardCategory-item transition-hover'>
            <img src='/arquivos/${ imgImg3 }' alt='Andrea | ${ altImg3 }' title='Andrea | ${ altImg3 }' class='img-100'>
        </a>
        <a href='${ urlImg4 }' class='BoardCategory-item transition-hover'>
            <img src='/arquivos/${ imgImg4 }' alt='Andrea | ${ altImg4 }' title='Andrea | ${ altImg4 }' class='img-100'>
        </a>
    </div>
    
    <div id='BoardBrands01' class='BoardBrands-list'>
        <a href='/nike' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-nike'></use></svg></a>
        <a href='/adidas' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-adidas'></use></svg></a> 
        <a href='/reebok' class='BoardBrands-item'><img style='max-width: 63%; opacity: .6;' class='img-brand-logo' src='/arquivos/lnd-reebok-logo.gif?v=230123' alt=''></a> 
        <a href='/puma' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-puma'></use></svg></a> 
        <a href='/vans' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-vans'></use></svg></a> 
        <a href='/under-armour' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-under-armour'></use></svg></a> 
        <a href='/everlast' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-everlast'></use></svg></a> 
        <a href='/jeep' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-jeep'></use></svg></a>
        <a href='/champion' class='BoardBrands-item'><img style='max-width: 63%; opacity: .6;' class='img-brand-logo' src='/arquivos/lnd-champion-logo.png' alt=''></a> 
    </div>
                  
    <div class='BoardCategory-list'>
        <a href='${ urlImg5 }' class='BoardCategory-item transition-hover'>
            <img src='/arquivos/${ imgImg5 }' alt='Andrea | ${ altImg5 }' title='Andrea | ${ altImg5 }' class='img-100'>
        </a>
        <a href='${ urlImg6 }' class='BoardCategory-item transition-hover'>
            <img src='/arquivos/${ imgImg6 }' alt='Andrea | ${ altImg6 }' title='Andrea | ${ altImg6 }' class='img-100'>
        </a>
        <a href='${ urlImg7 }' class='BoardCategory-item transition-hover'>
            <img src='/arquivos/${ imgImg7 }' alt='Andrea | ${ altImg7 }' title='Andrea | ${ altImg7 }' class='img-100'>
        </a>
    </div>
    <div class='BoardCategory-list txt-legal'>
        <p style='font-size: 10px; color: #9c9c9c;'>*VÁLIDO EN ANDREA.COM. CONSULTA POLÍTICAS DE LA PROMOCIÓN.</p>
    </div>
                  
    <div id='BoardBrands02' class='BoardBrands-list--own'>
        <a href='/confort' class='BoardBrands-item'><img style='max-width: 90%; opacity: 1;' class='img-brand-logo' src='/arquivos/log-n-confort.png'></a>
        <a href='/andrea' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andr'></use></svg></a>
        <a href='/ferrato' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-frt'></use></svg></a> <a href='/andrea-premium' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andrea-premium'></use></svg></a>
        <a href='/Mia-Andrea?fq=B:2000041' class='BoardBrands-item'><img style='max-width: 90%; opacity: 1;' class='img-brand-logo' src='/arquivos/log-n-lenceria.png'></a>
        <a href='/accesorios/Mujer/Unisex?map=c,specificationFilter_373,specificationFilter_373&PS=48&O=OrderByReleaseDateDESC' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andrea-accesorios'></use></svg></a>
        <a href='/Andrea-sport?fq=B:2000021' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-ferrato-sport'></use></svg></a>
        <a href='/Ferrato-sport?fq=B:2000130' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-andrea-sport'></use></svg></a>
        <a href='/belleza/Unisex?map=c,specificationFilter_363' class='BoardBrands-item'><img style='max-width: 90%; opacity: 1;' class='img-brand-logo' src='/arquivos/lnd-beauty-logo.jpg'></a>
        <a href='/ferrato' class='BoardBrands-item'><svg class='svg-icon'><use xlink:href='#brand-ferrato'></use></svg></a>
        <a href='/Andrea-Men?fq=B:2000299' class='BoardBrands-item'><img style='max-width: 90%; opacity: 1;' class='img-brand-logo' src='/arquivos/andrea- men.png'></a>
    </div>
                  
    <h3 class='noline tag-title--level-1' style='padding-top: 5%; margin-bottom: -3%;'>LO MEJOR DE MID SEASON</h3>`;

  // Copy process
  var aux = document.createElement("textarea");
  aux.innerHTML = content2;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  executeSAlert('timer');
}

function copySingleBanner(){

  // single banner elements
  let urlsinglebanner = document.getElementById('url-single-banner').value;
  let imgsinglebanner = document.getElementById('img-single-banner').value;
  let altsinglebanner = document.getElementById('alt-single-banner').value;

  let singlebanner = `<div class='img-container'>
     <a href='${ urlsinglebanner }'>
         <img src='/arquivos/${ imgsinglebanner }' alt='${ altsinglebanner }' title='${ altsinglebanner }'>
     </a>
   </div>`;

   // copy process
  var aux = document.createElement("textarea");
  aux.innerHTML = singlebanner;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  executeSAlert('timer');
}

function copyButtonsBanner(){

  let imgbuttonsbanner = document.getElementById('img-buttons-banner').value;
  let altbuttonsbanner = document.getElementById('alt-buttons-banner').value;

  let btn1_url = document.getElementById('url-btn1-banner').value;
  let btn1_img = document.getElementById('img-btn1-banner').value;
  let btn1_alt = document.getElementById('alt-btn1-banner').value;
  
  let btn2_url = document.getElementById('url-btn2-banner').value;
  let btn2_img = document.getElementById('img-btn2-banner').value;
  let btn2_alt = document.getElementById('alt-btn2-banner').value;
  
  let btn3_url = document.getElementById('url-btn3-banner').value;
  let btn3_img = document.getElementById('img-btn3-banner').value;
  let btn3_alt = document.getElementById('alt-btn3-banner').value;
  
  let btn4_url = document.getElementById('url-btn4-banner').value;
  let btn4_img = document.getElementById('img-btn4-banner').value;
  let btn4_alt = document.getElementById('alt-btn4-banner').value;

  let buttonsbanner = `
  <table style='width: 100%;' class='thot' cellpadding='0' cellspacing='0'>
    <tr>
      <th colspan='4'>
        <div id='img-sup' class='banner-wrapper' style='margin: 0 !important;'>
            <img style='width:100%;' src='/arquivos/${ imgbuttonsbanner }' class='img-cien' alt='${ altbuttonsbanner }' title='${ altbuttonsbanner }' />
        </div>
      </th>
    </tr>
    <tr>
      <td><a href='${ btn1_url }'><img src='/arquivos/${ btn1_img }' alt='${ btn1_alt }' title='${ btn1_alt }'></a></td>
      <td><a href='${ btn2_url }'><img src='/arquivos/${ btn2_img }' alt='${ btn2_alt }' title='${ btn2_alt }'></a></td>
      <td><a href='${ btn3_url }'><img src='/arquivos/${ btn3_img }' alt='${ btn3_alt }' title='${ btn3_alt }'></a></td>
      <td><a href='${ btn4_url }'><img src='/arquivos/${ btn4_img }' alt='${ btn4_alt }' title='${ btn4_alt }'></a></td>
    </tr>
</table>
  `;

  // copy process
  var aux = document.createElement("textarea");
  aux.innerHTML = buttonsbanner;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  executeSAlert('timer');
}

function copyVinotecaDesktopBanner(){
  let urlVinoteca = document.getElementById('url-vinoteca-banner').value;
  let imgDesktopVinoteca = document.getElementById('img-desktop-vinoteca-banner').value;
  let altVinoteca = document.getElementById('alt-vinoteca-banner').value;

  let vinotecadesktopbanner = `
  <a href='${ urlVinoteca }' class='vtex-display--block'>
    <img src='/arquivos/${ imgDesktopVinoteca }' class='vtex-display--block' alt='${ altVinoteca }' title='${ altVinoteca }' />
  </a>
  `;

  // copy process
  var aux = document.createElement("textarea");
  aux.innerHTML = vinotecadesktopbanner;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  executeSAlert('timer');
}

function copyVinotecaMobileBanner(){
  let urlVinoteca = document.getElementById('url-vinoteca-banner').value;
  let imgMobileVinoteca = document.getElementById('img-mobile-vinoteca-banner').value;
  let altVinoteca = document.getElementById('alt-vinoteca-banner').value;

  let vinotecamobilebanner = `
  <a href='${ urlVinoteca }' class='vtex-display--block'>
    <img src='/arquivos/${ imgMobileVinoteca }' class='vtex-display--block' alt='${ altVinoteca }' title='${ altVinoteca }' />
  </a>
  `;

  // copy process
  var aux = document.createElement("textarea");
  aux.innerHTML = vinotecamobilebanner;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  executeSAlert('timer');
}

// --------------------------------------- Refactor 02/05/23

function copiarContentUno(){

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
