// Script jQuery étape 1
$(document).ready(function() {
  console.log('jQuery prêt - étape 1');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
