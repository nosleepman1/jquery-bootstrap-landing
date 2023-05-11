// Script jQuery étape 15
$(document).ready(function() {
  console.log('jQuery prêt - étape 15');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
