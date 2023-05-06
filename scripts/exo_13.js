// Script jQuery étape 13
$(document).ready(function() {
  console.log('jQuery prêt - étape 13');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
