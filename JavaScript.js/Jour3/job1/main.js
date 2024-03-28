$(document).ready(function() {
    var boutonAfficher = $('#afficherTexte');
    var boutonCacher = $('#cacherTexte');
    var texte = $('#texte');
  
    boutonAfficher.click(function() {
      texte.show();
    });
  
    boutonCacher.click(function() {
      texte.hide();
    });
  });
  

  