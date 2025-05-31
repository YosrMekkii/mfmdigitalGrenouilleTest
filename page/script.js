   function copyPhone() {
      const phoneNumber = document.getElementById('phone-number').textContent;
      navigator.clipboard.writeText(phoneNumber).then(function() {
        alert('Numéro copié dans le presse-papiers !');
      }, function(err) {
        console.error('Erreur lors de la copie: ', err);
      });
    }
