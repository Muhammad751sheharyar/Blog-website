// function Sinup() {
//    var arrays = JSON.parse(localStorage.getItem("name")) || [];
//    let email = document.getElementById("email").value;
//    let password = document.getElementById("pass").value;
//    let users = {
//       email,
//       password
//    }

//    localStorage.setItem("name", JSON.stringify(arrays));
//    localStorage.getItem("name")
//    //   localStorage.clear(name);
//    // isFound=false;    
//      for(let i=0;i<arrays.length;i++){
//       if(email === arrays[i].email){
//          console.log("User Exsit");
//       }
//    }


//    console.log(arrays.length)
//    arrays.push(users);

//    console.log(arrays);
// }
//  console.log( typeof arrays);





// blog Section 
 
let blogArray=JSON.parse(localStorage.getItem("bl")) || [];
function bloges(){
   let add={
     blogTittle : document.getElementById('blogTittle').value,
     blog : document.getElementById('blog').value,
     authorName : document.getElementById('authorName').value
     }
     localStorage.setItem("bl",JSON.stringify(add));
     blogArray.push(add);
     console.log(blogArray);
    //  document.write(blogArray);

    //  let panel=document.getElementById("panel");
    //  panel.style.display ="flex";
   // alert("hello")

   // console.log(blogTittle,blog,authorName);
   // document.write(blogTittle,blog,authorName +"<br>");
   
   // document.write(blogTittle,blog,authorName);
}
function bloges(){
   let panel=document.getElementById("panel");
     panel.style.display ="flex";
     form.style.display ="none";
    //  document.write(blogArray[0].add);
     

}
console.log("hello")



function panel(){
  let form=document.getElementById("form");
  form.style.display ="flex";
  document.getElementById("clickbtn");
  // clickbtn.style.display="none"
}