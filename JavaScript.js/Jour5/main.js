document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche l'envoi du formulaire par défaut

      const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');
      const errorMessages = document.querySelectorAll('.error-message');

      // Supprimer les messages d'erreur existants
      errorMessages.forEach(function(errorMessage) {
          errorMessage.remove();
      });
      
      let hasError = false; // Indique s'il y a des erreurs

      inputs.forEach(function(input) {
          const label = input.previousElementSibling;

          if (input.value.trim() === '') {
              displayErrorMessage(input, `Veuillez remplir ce champ "${label.textContent}"`);
              hasError = true;
          } else if (input.type === 'email' && !validateEmail(input.value.trim())) {
              displayErrorMessage(input, `Veuillez saisir une adresse email valide pour "${label.textContent}"`);
              hasError = true;
          } else if (input.id === 'password') {
              if (input.value.trim().length < 8) {
                  displayErrorMessage(input, `Le mot de passe doit contenir au moins 8 caractères pour "${label.textContent}"`);
                  hasError = true;
              } else if (!validatePassword(input.value.trim())) {
                  displayErrorMessage(input, `Le mot de passe doit contenir au moins une majuscule, une minuscule, un caractère spécial et un chiffre pour "${label.textContent}"`);
                  hasError = true;
              }
          } else if (input.id === 'code_postal') {
              if (!validatePostalCode(input.value.trim())) {
                  displayErrorMessage(input, `Le code postal doit contenir uniquement des chiffres pour "${label.textContent}"`);
                  hasError = true;
              }
          }
      });

      if (!hasError) {
          form.submit(); // Soumettre le formulaire si aucune erreur
      }
  });

  // Fonction pour afficher un message d'erreur
  function displayErrorMessage(input, message) {
      const errorMessageElement = document.createElement('div');
      errorMessageElement.textContent = message;
      errorMessageElement.style.color = 'red';
      errorMessageElement.classList.add('error-message');
      input.parentNode.insertBefore(errorMessageElement, input.nextSibling);
  }

  function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  function validatePassword(password) {
      // Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
      return re.test(password);
  }

  // Fonction pour valider le code postal (uniquement des chiffres)
  function validatePostalCode(postalCode) {
      const re = /^\d+$/;
      return re.test(postalCode);
  }
});
