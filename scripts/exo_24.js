// Script jQuery étape 24
$(document).ready(function() {
  console.log('jQuery prêt - étape 24');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
