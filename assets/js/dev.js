$('#popupform').submit( function(e){
	e.preventDefault();
	var code = $('#popupform').find('#popupcountrycode').val();
	/*alert(code);
    alert($('#countrycode').val(code));*/
	$(this).find('.uptownloader').show();
	var name = $('#popupform input#name').val();
	var email = $('#popupform input#email').val();
	var phone = $('#popupform input#phoneNum2').val();
	var gclid =  $('#popupform input[name="gclid"]').val();
	var countrycode = code;
	var thepackage = $('#popupform input#popuppackage').val();
	var domain_url = 'https://www.nswdesignhub.com/' ;
	$.ajax({
    type: "POST",
    url: domain_url+'crm/include/signup.php',
    data: {name: name, email:email, phone:phone,countrycode:countrycode, thepackage:thepackage,gclid:gclid},
    success: function(data) {
                $('#popupform').find('.uptownloader').hide();
                if(data=='error'){
        			$('.packageformsubmit').after('<div class="alreadyerror"> Something Went Wron Please Try Again.</div>');
        		} else if(data=='exists') {
        			$('.packageformsubmit').after('<div class="alreadyerror"> You are already a member. <a href="https://www.nswdesignhub.com/crm">Click Here</a> to sign in.</div>');
        		} else {
        		    window.location.replace(data);
        		}
            }
            });
            
})
$('.pkg-btn').click(function() {
	var thisrel = $(this).attr('rel');

	$('input[name="pkg_key"]').val(thisrel);

});
$('.bannpack').click(function() {
	var thisrel = $(this).attr('rel');

	$('input[name="pkg_key"]').val(thisrel);

});
	

	
		