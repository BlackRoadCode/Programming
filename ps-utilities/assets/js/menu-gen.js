
$(document).ready(function(){

    $('#mainmenu').append(`
    <a class="navbar-brand" href="index.html">PS Utilities</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="qrgenerator.html">Generate QR</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="encrypt.html">Encrypt text</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="generator.html">Generador de Código</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="commands.html">Usefull Commands</a>
            </li>
        </ul>
    </div>`);

})

