// Script jQuery étape 18
$(document).ready(function() {
  console.log('jQuery prêt - étape 18');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
