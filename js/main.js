//$(document).ready(function(){
function calculateBMI(){
    var weight = document.IMTcalc.weight.value;
    var height = document.IMTcalc.height.value*0.01;
    
    if(weight > 0 && height > 0){
        var IMTHasil = (weight/(height*height));
        document.IMTcalc.IMT.value = new Number(IMTHasil).toFixed(2)
        
        if(IMTHasil < 18.5){
            document.IMTcalc.arti.value = "Kurus";
            document.getElementById("IMTscore").innerHTML="woww" ;
        }
        
        if(IMTHasil > 18.5 && IMTHasil < 25){
            document.IMTcalc.arti.value = "Ideal"
        }
        
        if(IMTHasil > 25 && IMTHasil < 30){
            document.IMTcalc.arti.value = "Gemuk"
        }
        
        if(IMTHasil > 30 && IMTHasil < 35){
            document.IMTcalc.arti.value = "Cenderung obesitas"
        }
        
        if(IMTHasil > 35){
            document.IMTcalc.arti.value = "Obesitas"
        }
        
    }else{
        alert ("Please fill in all fields.")
    }
};

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$(function () {
        $("input[name='chkPassPort']").click(function () {
            if ($("#chkYes").is(":checked")) {
                $("#txtPassportNumber").removeAttr("disabled");
                $("#txtPassportNumber").focus();
            } else {
                $("#txtPassportNumber").attr("disabled", "disabled");
            }
        });
    });

//BMI Script

});
