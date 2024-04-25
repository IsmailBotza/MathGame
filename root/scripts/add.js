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
  var allAnswers = [];
  var switchAnswers = []; 
  
  answer = num1 + num2;

  document.getElementById("num1").innerHTML = num1 ;
  document.getElementById("num2").innerHTML = num2 ;

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];
  for(i = allAnswers.length;i--;){
   switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(i+1)),1)[0]);
  }

  option1.innerHTML = answer;
  option1.innerHTML = dummyAnswer1;
  option1.innerHTML = dummyAnswer2;
  
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

 