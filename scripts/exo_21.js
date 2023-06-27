// Script jQuery étape 21
$(document).ready(function() {
  console.log('jQuery prêt - étape 21');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
