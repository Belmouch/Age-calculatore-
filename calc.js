 let inputUser = document.getElementById("date");
 inputUser.max = new Date().toISOString().split("T")[0];
 let result = document.getElementById("result");
 function calculateage(){

    let birthdate = new Date(inputUser.value)

    let d1 = birthdate.getDate()
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear()

    let today = new Date()

    
    let d2 = today.getDate()
    let m2 = today.getMonth() + 1 ;
    let y2 = today.getFullYear()  
     
    let d3 , m3 , y3 ;

    y3 = y2 - y1 ;

    if ( m2 >= m1){
        m3 = m2 - m1;
     }
     else{
         y3--;
         m3 = 12 + m2 - m1;
     }
     if (d2 >= d1){
        d3 = d2 - d1 ; 
     }
     else{
        m3--;
        d3 = getdaysinmonth(y1 , m1) + d2 - d1
     } 
     if (m3 < 0){
        m3 = 11
        y3--;

    }  
    result.innerHTML =`Your age is  <span>${y3}</span> years and<span> ${m3} </span>months and <span>${d3}</span> days `
 }
 function getdaysinmonth(year , month){
    return new Date(year , month , 0).getDate();
 }


// let result = document.getElementById("result");
// function ageCalculator() {  
//     var userinput = document.getElementById("date").value;  
//     var dob = new Date(userinput);  
    
      
//     //calculate month difference from current date in time  
//     var month_diff = Date.now() - date.getTime();  
      
//     //convert the calculated difference in date format  
//     var age_dt = new Date(month_diff);   
      
//     //extract year from date      
//     var year = age_dt.getUTCFullYear();  
      
//     //now calculate the age of the user  
//     var age = Math.abs(year - 1970);  
      
//     //display the calculated age  
//     return document.getElementById("result").innerHTML =    
//              "Age is: " + age + " years. ";  
//     }  

// let myyear = prompt("enter your birth year ")
// let mymonth = prompt("enter your birth month")
// let myday = prompt("enter your birth day ")

// let d = new Date().getFullYear()
// let m = new Date().getMonth()
// let b = new Date().getDate()
// let myage = `your age is ${d - myyear} and ${m - mymonth} months and ${b - myday} days ` 
// console.log(myage)

 

 