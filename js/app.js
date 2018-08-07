$(function(){
	$('#rollno').on('blur',function(){
		if(!/((\d{2}((CO)|(DCO)|(EE)|(DEE)|(EX)|(DEX)|(ME)|(DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3}))/i.test(this.value)){
			alert("Invalid Roll No");
			this.value="";
			$(this).focus();
		}
	});

	$('#sname').on('keypress',function(e){
		if(/[^a-zA-Z ]/.test(e.key)){
			alert("INVALID NAME.ONLY ALPHABETS AND SPACES ALLOWED");
			this.value="";
			$(this).focus();
			return false;
		}
	});

	$('#email').on('blur',function(e){
		if(/((\w*\d*_?.?){1}@(\w*\d*).(\w*\d*\w*){1})/.test(e.key)){
			alert("INVALID ADDRESS");
			this.value="";
			$(this).focus();
			return false;
		}
	});
});