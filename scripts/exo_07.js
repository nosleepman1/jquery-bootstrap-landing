// Script jQuery étape 7
$(document).ready(function() {
  console.log('jQuery prêt - étape 7');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
