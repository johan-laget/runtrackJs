

const keylogger = document.getElementById("keylogger");
  document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase(); 

  if (/^[a-z]$/.test(key)) {
     keylogger.value += key;
    }
  });