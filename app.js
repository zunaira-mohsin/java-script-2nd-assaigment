//CHAPTER:03;
//QUESTION NO 01;
let age="I am 17 year old";
alert(age);
//QUESTION NO 02;
let a = "1";
 alert("you have visited this site " +  a  +  " times");
 //QUESTION NO 03;
 let birthyear="2008";
 document.writeln("My birth year is "+ birthyear + "<br>");
 document.writeln("Data type of my declared variable is number"+"<br><br>");
  //QUESTION NO 04;
  let visitorName="zunaira";
  let producttitle="T-shirt($)";
  let quentity="5";
  document.writeln(visitorName + " ordered " + quentity +"  " + producttitle + " gleamer grace"+"<br><br>");
  //
  //CHAPTER:04;  
  // //QUESTION NO 01;
  let Name ="zunaira", Age ="17",city="karachi";
  document.writeln("name" + Name  +"<br>");
  document.writeln("age" +  Age +"<br>");
  document.writeln("City" + city +"<br><br>");
  //QUESTION NO 02;
  document.writeln("<h3>legal variables names</h3>");
  document.writeln(" userName = zunaira <br>");
  document.writeln(" -userAge = 17 <br>");
  document.writeln(" $city = karachi <br>");
  document.writeln(" user1 = zuni <br>");
  document.writeln(" my var = hello <br>");
  //
  document.writeln("<h3>Inlegal variables names</h3>");
  document.writeln(" user-name = Error <br>");
  document.writeln(" let = Error <br>");
  document.writeln("  @city = Error <br>");
  document.writeln(" 1user = Error <br>");
  document.writeln(" alert = Error <br><br>");
 //QUESTION NO 03;
//
 //CHAPTER:05;
 //QUESTION NO 01;
 let num = 3+5;
 console.log(num);
 document.writeln("sum of 3 and 5 is "+ num+"<br><br>");
  //QUESTION NO 02;
  //subtraction
  let num1 = 20;
   let num2 = 5;
   let subtraction  = num1 - num2;
   document.writeln("subraction of "+ num1 +" and "+ num2 +" is "+  subtraction + "<br>");
   //multiplication
     let multiplication  = num1 * num2;
   document.writeln("multiplication of "+ num1 +" and "+ num2 + " is "+ multiplication + "<br>");
    let modulus  = num1 % num2;
   document.writeln("modulus of "+ num1+" and "+ num2+" is "+ modulus + "<br>");
    let Division  = num1 / num2;
   document.writeln("Division of "+ num1+" and "+num2 +" is "+ Division + "<br><br>");
   //QUESTION NO 03;
   let   Num;
   document.writeln("Value after variable declaration is: " + Num + "<br>");
let num$  ="5" ;
document.writeln("Initial value:" + num$ + "<br>");
 num  = "6" ;
document.writeln("Value after increment is:" + num + "<br>");
num = "13";
document.writeln("Value after addition is:" + num + "<br>");
num ="12";
document.writeln("Value after decrement is:" + num + "<br>");
let remainder = num%3;
document.writeln("“The remainder is:" + remainder + "<br><br>");
    //QUESTION NO 04;
    let number = 600*5;
    document.writeln("Total cost to buy 5 tickets to a movies is: "+ number + "PKR" + "<br><br>");
        //QUESTION NO 05;
   let Num1 = 4*1;
  let Num2 = 4*2;
    let Num3 = 4*3;
     let Num4 = 4*4;
     let Num5 = 4*5;
       let Num6 = 4*6;
       let Num7 = 4*7;
       let Num8 = 4*8;
      let Num9 = 4*9;
      let Num10 = 4*10;
      document.writeln("<h3>Table of 4</h3>")
      document.writeln( "4*1"+"="+Num1+"<br>"+"4*2"+"="+Num2+"<br>"+"4*3"+"="+Num3+"<br>"+"4*4"+"="+Num4+"<br>"+"4*5"+"="+Num5+"<br>"+"4*6"+"="+Num6+"<br>"+"4*7"+"="+Num7+"<br>"+"4*8"+"="+Num8+"<br>"+"4*9"+"="+Num9+"<br>"+"4*10"+"="+Num10+"<br><br>");
       //QUESTION NO 06;
 let celsius = 25;
 document.writeln("<h3>The Temperature Converter:</h3>")
 let fahrenheit = (celsius * 9/5) + 32;
document.writeln(celsius + "°C is " + fahrenheit + "°F<br>");
let fahrenheit2 = 70;
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.writeln(fahrenheit2 + "°F is " + celsius2.toFixed(2) + "°C");
        //QUESTION NO 07;
       let item1price=650;
       let item2price=100;
       let item1quentity=3;
  let item2quentity=7;
  let shoppingcharges=100;
  let totalcostItem1=item1price*item1quentity;
   let totalcostItem2=item2price*item2quentity;
   let totalAmmount= totalcostItem1+totalcostItem2+shoppingcharges;
   document.writeln("<h3>Shopping Card</h3>")
   document.writeln("Price of item 1 is :"+item1price+"<br>");
    document.writeln("Price of item 2 is :"+item2price+"<br>");
     document.writeln("Ordered quantity of 1 item  :"+item1quentity+"<br>");
      document.writeln("Ordered quantity of  2 item :"+item2quentity+"<br>");
       document.writeln("shopping charges is :"+shoppingcharges+"<br>");
    document.writeln("Total cost of your order is :"+totalAmmount+"<br><br>");
     //QUESTION NO 08;
     let Obtainedmark = 80400;
     let totalmark = 980;
let persentage =  Obtainedmark / totalmark ;
document.writeln("<h3>Marks sheet</h3>"); 
document.writeln("Total mark :" + totalmark+"<br>");
document.writeln("Mark obtained :" + Obtainedmark+"<br>");
document.writeln("Persentage :" + persentage + "%" +"<br><br>");
//QUESTION NO 09;
let  Dollar = 104.80*10;
let  Saudi = 28*25;
let totalcurrency = Dollar + Saudi;
document.writeln ("<h3>Currency in PKR</h3>" + "Total currency in PKR " + totalcurrency + "<br><br>");
//QUESTION NO 10;
let Number = 8 ;
let result = ((Number + 5 )* 10 )/ 2;
document.writeln("The result is: " + result + "<br><br>");
//QUESTION NO 11;
let currentyear = 2016;
 let birthYear = 1992;
 let yourage = currentyear - birthYear;
 document.writeln("<h3> Age Calculator </h3>");
 document.writeln("Current age 2016"+"<br>"+"Birth year 1992"+"<br>"+ "Your age is: " + yourage+ "<br><br>");
//QUESTION NO 12;
let radius = 20;
let pi = 3.142;
document.writeln("Radius of a circle is :" + radius+ "<br>");
let circumference = 2 * pi *  radius;
document.writeln("The circumference is: "+circumference+"<br>");
let area = pi * radius * radius ;
document.writeln("The area is : "+ area+"<br><br>");
//QUESTION NO 13;
let chocolatechip = "Chocolate Chip Cookies";
document.writeln("<h3>The Lifetime Supply Calculator</h3>" );
document.writeln("Favourite snacks :" + chocolatechip +"<br>");
let currentage = 15;
document.writeln(" Current age :" + currentage +"<br>");  
 let maximumage = 65;
document.writeln("Estimated Maximum Age: " + maximumage + "<br>");
let perdAY = 3;
document.writeln("Amount of snacks per day : " + perdAY+ "<br>")
 let totalNeeded =( maximumage - currentage )*perdAY;
 document.writeln("You will need "+ totalNeeded + " chocolate chip to last you until the ripe old age of 65")

//END//