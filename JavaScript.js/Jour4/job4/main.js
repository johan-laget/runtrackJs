document.addEventListener('DOMContentLoaded', function() {
  const updateButton = document.getElementById('updateButton');
  const userTableBody = document.querySelector('#userTable tbody');

  function updateUserTable() {
      fetch('utilisateur.json')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erreur lors du chargement des utilisateurs');
              }
              return response.json();
          })
          .then(users => {
              if (users && users.length > 0) {
                  userTableBody.innerHTML = '';
                  users.forEach(user => {
                      const row = document.createElement('tr');
                      row.innerHTML = `
                          <td>${user.id}</td>
                          <td>${user.nom}</td>
                          <td>${user.prenom}</td>
                          <td>${user.email}</td>
                      `;
                      userTableBody.appendChild(row);
                  });
              }
          })
          .catch(error => console.error('Erreur lors du chargement des utilisateurs :', error));
  }

  updateButton.addEventListener('click', function() {
      updateUserTable();
  });

  updateUserTable();
});
