//chapter 38-44
//Q1

// function power(a,b){

//   var value=Math.pow(a,b);
//   document.write("power is"+value);

  
// }

// power(5,2);


//Q2

// function leap(){

// var user=prompt("enter the year");
// var leap=["2012","2016","2020"];
// for(var i=0;i<user.length;i++){

// if(user===leap[i]){

// document.write("this is");

// }


// }


// }

// leap();


//Q3
// var a=4;
// var b=5;
// var c=7;
// function tra(){


// var s=(a+b+c)/2;
// return s;



// }

// function area(){

// var are= tra()*(tra()-a)*(tra()-b)*(tra()-c)
// document.write("The area of triangle is"+are);


// }


// area();

//Q4

function mainfunction(){

var math=80;
var english=78;
var urdu=80;
var totalnum=math+english+urdu;
var per=totalnum/300*100;
return per;



}

function average(){



}

function percentage(){

// document.write("the percantage is"+mainfunction());

var round=Math.floor(mainfunction());
document.write(round);

}
percentage();


//chapter 38-44 end
// function abc(){

//    var i=document.getElementById("nu1");
//    var n=document.getElementById("nam1");
//    var c=document.getElementById("cls1");
//    var b=document.getElementById("btn1");
//    i.remove();
//    n.remove();
//    c.remove();
//   b.remove();



// }

// function abc(){

// var a=document.getElementById("im1");
// a.src="contact usbg.jpg"
    
// }

// function xyz(){

//     var b=document.getElementById("im1");
//     b.src="branding.jpg"
        
//     }
// var count=0;
// function inc(){
  
// ++count;
// var a=document.getElementById("para");
// para.innerText=count;


// }

// function dec(){
  
//     count--;
//     var b=document.getElementById("para");
//     para.innerText=count;
    
    
//     }

// function abc(){

// var user=document.getElementById("usr").value;
// var email=document.getElementById("email").value;
// var pass=document.getElementById("pass").value;
// var conpass=document.getElementById("conpass").value;

// document.write(user+"<br>"+email+"<br>"+pass+"<BR>"+conpass);

// }


// function abc(){

// var para="Neque, iste numquam culpa rerum odio rem aliquam voluptatem sunt? Hic illum, atque quae aspernatur accusantium explicabo possimus assumenda sapiente laudantium voluptatem!"
// var pr=document.getElementById("para1");
// pr.innerHTML+=para;

// }

// function abc(){

//     var user=document.getElementById("usr").value;
//     var email=document.getElementById("email").value;
//     var pass=document.getElementById("pass").value;
//     var conpass=document.getElementById("conpass").value;
    
//     var arr=[user,email,pass,conpass];
//     for(var i=0;i<arr.length;i++){

//         nam.innerHTML=arr[0];
//         em.innerHTML=arr[1];
//         password.innerHTML=arr[2];
//         conpassword.innerHTML=arr[3];
      
//     }

//     // nam.innerHTML=user;
//     // em.innerHTML=email;
//     // password.innerHTML=pass;
//     // conpassword.innerHTML=conpass;
    

    
    
    
// }

// function del(){

//     var user=document.getElementById("nam");
//     var email=document.getElementById("em")
//     var pass=document.getElementById("password")
//     var conpass=document.getElementById("conpassword")

//     user.remove();
//     email.remove();
//     pass.remove();
//     conpass.remove();


// }

// function edit(){

   

//     var user=document.getElementById("nam");
//     var email=document.getElementById("em");
//     var pass=document.getElementById("password");
//     var conpass=document.getElementById("conpassword");
    
//     user.innerText="fahad";
//     em.innerText="fk16181@gmail.com";
//     password.innerText="123";
//     conpassword.innerText="123";
 


    



// }

//chapter 58-67

var main=document.getElementById("main-content");
console.log(main.childNodes);
