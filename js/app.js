let person = prompt("Please enter your name");
let genderperson = prompt("Please enter your gender");
let ageperson = prompt("Please enter your age");



     if (ageperson <=0) {
  
       alert( "your age not correct!");
                        }



var perstatuse = confirm(" Do you want to skip the welcome message?");

     if(perstatuse ="false"){
            gender();
                }



function gender(){
  
        if(genderperson =="female"){
          alert("HELLO " +"Ms. "+ person);
                }  

        else if(genderperson =="male"){

           alert("HELLO " +"Mr. "+ person);

          }
          else alert("hello");


}


  
  function question(){
    let arr=[];
    var question1 = prompt(" Do you want to play?");
    var question2 = prompt("Do you like dogs?");
    var question3 = prompt("Do you like travelling?");

     if(question1 =="")
     {
        question1="invalid";

     } 
     
     if (question2=="")
      {
        question2="invalid";

    } if (question3 =="")
       {
        question3="invalid";
        } 

        arr.push(question1);
        arr.push(question2);
        arr.push(question3);
     
        for(var i=0;i<arr.length;i++){
            console.log(arr[i]);

        }


    }

    question();

  


   

  