// Script jQuery étape 42
$(document).ready(function() {
  console.log('jQuery prêt - étape 42');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
