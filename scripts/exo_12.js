// Script jQuery étape 12
$(document).ready(function() {
  console.log('jQuery prêt - étape 12');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
