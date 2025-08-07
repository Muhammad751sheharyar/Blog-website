var arrays = JSON.parse(localStorage.getItem("name")) || [];
function Sinup() {
  let fName=document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let users = {
    email,
    password
  }

  window.localStorage.setItem("name", JSON.stringify(arrays));
  //  localStorage.getItem("name")
    // localStorage.clear("name");
    let isFound = true;
    for (let i = 0; i < arrays.length; i++) {
        if (email === arrays[i].email) {
            alert("User Exsit");
            isFound = false;
          }
        
        }
        if(isFound === true){
          arrays.push(users);
      console.log(arrays);
      window.open("page2.html");
    }
    
}

function loginfnc() {
  let LEmail = document.getElementById("LEmail").value;
  // let Lpassword=document.getElementById("Lpassword").value;
isFound =true;
  for (let i = 0; i < arrays.length; i++) {
    if (LEmail == arrays[i].email) {
      window.open("page2.html");
      isFound=false;
    }
  }
  if(isFound=true){
    alert("pleace sinup ")
  }
}

