// Script jQuery étape 14
$(document).ready(function() {
  console.log('jQuery prêt - étape 14');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
