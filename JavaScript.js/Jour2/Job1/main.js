document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button").addEventListener("click", citation);
  function citation() {
      var citationText = document.getElementById("citation").innerText;
      console.log(citationText);
    }
});

