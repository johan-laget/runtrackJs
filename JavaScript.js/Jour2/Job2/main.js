function showhide() {
    var article = document.getElementById("dynamic-article");
    if (article && article.style.display === "block") {
      article.style.display = "none";
    } else {
      if (!article) {
        article = document.createElement("article");
        article.id = "dynamic-article";
        article.innerText = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
      }
      article.style.display = "block";
    }
  }