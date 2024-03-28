window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const scrolled = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
    
    const footer = document.getElementById('footer');
    footer.style.backgroundColor = 'hsl(' + (scrolled * 2.55) + ', 100%, 50%)';
  });
  