const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio =document.getElementById("MyAudio");
var answer = 0;

function generate_equation(){
  var num1  = Math.floor(Math,random() * 13);
  var num2 = Math.floor(Math,random() * 13);
  var dumyAnswer1 = Math.floor(Math,random() * 13);
  var dumyAnswer2 = Math.floor(Math,random() * 13);
  var allAnswers =
  var switchAnswers =    
  
 }

 option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
        generate_equation();
    }
 else{
    audio.play();
 }
}
);
   
 


option2.addEventListener("click", function(){
   if(option2.innerHTML == answer){
       generate_equation();
   }
else{
   audio.play();
}

}
);




option3.addEventListener("click", function(){
   if(option3.innerHTML == answer){
       generate_equation();
   }
else{
   audio.play();
}

});