// Script jQuery étape 10
$(document).ready(function() {
  console.log('jQuery prêt - étape 10');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
