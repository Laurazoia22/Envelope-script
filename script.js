$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $('#open');
    var btn_reset = $('#reset');
  
    envelope.click(function () {
      open();
    });
  
    btn_open.click(function () {
      open();
    });
  
    btn_reset.click(function () {
      close();
    });
  
    function open() {
        envelope.addClass("open").removeClass("close");
        setTimeout(showNotebook, 5000); // Exibe a folha após os corações (7s)
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        $(".notebook").fadeOut(); // Esconde a folha
    }

    function showNotebook() {
        $(".notebook").fadeIn(); // Exibe a folha no centro da tela
    }
});
