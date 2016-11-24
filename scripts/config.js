// File name change
$(document).ready(function() {
	
	$("#uploadfiles").on("change", function(e) {
		var files = $(this)[0].files;
		if(files.length == 1) {
			var filename = e.target.value.split('\\').pop();
			$("#label-span").text(filename);
			$(".fa").hide();
		}
	});	
});

//Get data in input field
document.getElementById("uploadfiles").addEventListener('change', function() {
	var fr = new FileReader();
  	fr.onload = function() {
		var lines = this.result.split('\n');
	
    	var pan = lines[0].substring(12);
      	console.log("Pan no: " + pan);
		document.getElementById("pan").value = pan;
      
      	var name = lines[1].substring(6);
      	console.log("Name: " + name);
		document.getElementById("name").value = name;
      
      	var date = lines[2].substring(6);
      	console.log("Date: " + date);
		document.getElementById("date").value = date;
  	}
  	fr.readAsText(this.files[0]);
});

// Form input field validation
$(document).ready(function() {
		
	// RestrictPan number Input
	$("#pan").on('input', function(e) {
  		$(this).val(function (_, val) {
    		return val.toUpperCase();
  		});
	});
	$('#pan').keypress(function(key) {
		if((key.charCode < 48 || key.charCode > 57)&&(key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) return false;
	});
	
	// Restrict Tin No. Input
	$('#tin').keypress(function(key) {
		if(key.charCode < 48 || key.charCode > 57) return false;
	});
			
	// Restrict Name Input
	$('#name').keypress(function(key) {
		if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) return false;
	});
  
  	// Set Current date
  	var today = new Date();
	var date = today.getDate();
	var month = today.getMonth()+1; //January is 0!
	var year = today.getFullYear();
		if(date<10){
			dd='0'+dd
		} 
		if(month<10){
			mm='0'+mm
		} 
	today = year+'-'+month+'-'+date;
	document.getElementById("date").setAttribute("max", today);
  
});