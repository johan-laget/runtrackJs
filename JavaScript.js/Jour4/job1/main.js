document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
      .then(response => response.text())
      .then(data => {
        var paragraph = document.createElement('p'); 
        paragraph.textContent = data;
        document.body.appendChild(paragraph); 
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération du fichier :', error);
      });
  });