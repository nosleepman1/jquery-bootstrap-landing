// Script jQuery étape 8
$(document).ready(function() {
  console.log('jQuery prêt - étape 8');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
