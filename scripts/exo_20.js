// Script jQuery étape 20
$(document).ready(function() {
  console.log('jQuery prêt - étape 20');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
