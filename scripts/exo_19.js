// Script jQuery étape 19
$(document).ready(function() {
  console.log('jQuery prêt - étape 19');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
