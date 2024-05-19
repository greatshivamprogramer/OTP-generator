let otp1 = ""
    function generateotp(len){
       let otp = ""
        for(let i=0;i<len;i++){
            otp += Math.floor(Math.random() * 10).toString();
            }
        
               
    document.getElementById('text-container').innerHTML = "your OTP is " + otp;
otp1 = otp
    }
otpcheck.addEventListener('click',function (){
    let otpinput = document.getElementById('input').value;
    if(otpinput == otp1){
        alert("OTP verified.")
    }
    else{
        alert("OTP not verified.Try Again")
    }
})

document.getElementById('input').addEventListener('keyup',function(e) {
  if (e.keyCode === 13) 
  {  let otpinput = document.getElementById('input').value;
    if(otpinput == otp1){
        alert("OTP verified.")
    }
    else{
        alert("OTP not verified.Try Again")
    }
}
});
