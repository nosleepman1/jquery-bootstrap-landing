// Script jQuery étape 2
$(document).ready(function() {
  console.log('jQuery prêt - étape 2');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
