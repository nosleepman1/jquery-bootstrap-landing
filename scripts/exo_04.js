// Script jQuery étape 4
$(document).ready(function() {
  console.log('jQuery prêt - étape 4');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
