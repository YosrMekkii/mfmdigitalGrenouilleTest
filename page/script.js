function copyPhone() {
  const phoneNumber = document.getElementById('phone-number').textContent;
  navigator.clipboard.writeText(phoneNumber).then(function() {
    alert('Numéro copié dans le presse-papiers !');
  }, function(err) {
    console.error('Erreur lors de la copie: ', err);
  });
}

// Gestion du toggle switch avec alternance
document.addEventListener('DOMContentLoaded', function() {
  const crapaudRadio = document.getElementById('crapaud');
  const grenouilleRadio = document.getElementById('grenouille');
  const crapaudLabel = document.querySelector('label[for="crapaud"]');
  const grenouilleLabel = document.querySelector('label[for="grenouille"]');
  
  // Fonction pour alterner entre les options
  function toggleOption() {
    if (crapaudRadio.checked) {
      grenouilleRadio.checked = true;
    } else {
      crapaudRadio.checked = true;
    }
  }
  
  // Ajouter les événements de clic pour l'alternance
  // Pour le label Crapaud - toujours alterner
  crapaudLabel.addEventListener('click', function(e) {
    e.preventDefault();
    toggleOption();
  });
  
  // Pour le label Grenouille - toujours alterner
  grenouilleLabel.addEventListener('click', function(e) {
    e.preventDefault();
    toggleOption();
  });
  
  // Gestion du checkbox personnalisé
  const consentCheckbox = document.getElementById('consent');
  const checkboxWrapper = document.querySelector('.checkbox-wrapper');
  const checkboxOuter = document.querySelector('.checkbox-outer');
  const checkboxInner = document.querySelector('.checkbox-inner');
  
  // Fonction pour mettre à jour l'apparence du checkbox
  function updateCheckboxAppearance() {
    if (consentCheckbox.checked) {
      checkboxInner.style.opacity = '1';
    } else {
      checkboxInner.style.opacity = '0';
    }
  }
  
  // Événements pour le checkbox
  consentCheckbox.addEventListener('change', updateCheckboxAppearance);
  
  // Permettre de cliquer sur le wrapper pour activer le checkbox
  checkboxWrapper.addEventListener('click', function() {
    consentCheckbox.checked = !consentCheckbox.checked;
    updateCheckboxAppearance();
  });
  
  // Permettre de cliquer sur le texte pour activer le checkbox
  document.querySelector('.consent-text').addEventListener('click', function() {
    consentCheckbox.checked = !consentCheckbox.checked;
    updateCheckboxAppearance();
  });
  
  // Initialiser l'apparence du checkbox
  updateCheckboxAppearance();
});