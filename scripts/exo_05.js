// Script jQuery étape 5
$(document).ready(function() {
  console.log('jQuery prêt - étape 5');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
