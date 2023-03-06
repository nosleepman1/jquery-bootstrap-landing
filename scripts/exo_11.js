// Script jQuery étape 11
$(document).ready(function() {
  console.log('jQuery prêt - étape 11');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
