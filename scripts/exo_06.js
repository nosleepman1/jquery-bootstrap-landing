// Script jQuery étape 6
$(document).ready(function() {
  console.log('jQuery prêt - étape 6');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
