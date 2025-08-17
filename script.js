var arrays = JSON.parse(localStorage.getItem("name")) || [];
function Sinup() {
  
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
  if (isFound === true) {
    arrays.push(users);
    console.log(arrays);
    window.open("page1.html");
  }
}

function loginfnc() {
  let LEmail = document.getElementById("LEmail").value;
  // let Lpassword=document.getElementById("Lpassword").value;
  isFound = true;
  for (let i = 0; i < arrays.length; i++) {
    if (LEmail == arrays[i].email) {
      window.open("page1.html");
      isFound = false;
    }
  }
  if (isFound = true) {
    alert("pleace sinup ")
  }
}


let blogesData=[];
function bloges() {
  let blognameinp = document.getElementById('blogTittle').value;
  let blogConentinp = document.getElementById('blogContent').value;
  let authorNameinp = document.getElementById('authorName').value;
  form.style.display = "none";
  
  let blogD={
    blognameinp,
    blogConentinp,
    authorNameinp
  }
  // console.log(blogD);
window.localStorage.setItem("Blog",JSON.stringify(blogesData));
blogesData.push(blogD)





  // Dom Section

  let mainPage = document.querySelector('.mainPage');
  // console.log(mainPage);


  // div 

  let div = document.createElement('div');
  div.innerText=blognameinp;
  div.setAttribute('class','blogTittle');
  mainPage.append(div);



  let blogdesc=document.createElement("div");
 blogdesc.innerText=blogConentinp;
blogdesc.setAttribute('class','decription');
// console.log(blogdesc);
mainPage.append(blogdesc);
console.log(blogdesc)



let other=document.createElement("div");
other.innerText=authorNameinp;
other.setAttribute('class','autherName');
mainPage.append(other);
console.log(other);







}

function panel() {
  let form = document.getElementById("form");
  form.style.display = "flex";
  // clickbtn.style.display="none"
}

function blLogout() {
  // window.Location.href="login.html";
  window.open("login.html")
}