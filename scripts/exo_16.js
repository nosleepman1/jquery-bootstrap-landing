// Script jQuery étape 16
$(document).ready(function() {
  console.log('jQuery prêt - étape 16');
  $('#btn').on('click', function() {
    $('#titre').fadeToggle(300);
  });
});
