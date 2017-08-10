$(document).ready(function(){

  //Allcontents checked
  $('#allcontents input[name="allcontents"]').click(function(){
      var $allcheck = $('#allcontents input[name="allcontents"]').prop('checked');
      if ($allcheck == true) {
        $("input[type=checkbox]").prop('checked', true);
    		$(this).addClass('.checkInput');
      }else{
  		  $("input[type=checkbox]").prop('checked', false);
        $(this).removeClass('.checkInput');
      }
  });//end All checked
  //***Delete checked
  $('#delete input[type="submit"').click(function(){
    if ($('input[type="checkbox"]').prop('checked') == true) {
      $('#data-size td').hide();
    }else{
      false;
    }
  });//end click Delete checked
});//end ready