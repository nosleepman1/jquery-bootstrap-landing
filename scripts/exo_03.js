// Script jQuery étape 3
$(document).ready(function() {
  console.log('jQuery prêt - étape 3');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
