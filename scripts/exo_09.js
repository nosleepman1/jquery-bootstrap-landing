// Script jQuery étape 9
$(document).ready(function() {
  console.log('jQuery prêt - étape 9');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
