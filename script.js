var arrays = JSON.parse(localStorage.getItem("name")) || [];
function Sinup() {
  let fName=document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let users = {
    email,
    password
  }

  localStorage.setItem("name", JSON.stringify(arrays));
  //  localStorage.getItem("name")
  //   localStorage.clear(name);
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
    window.open("page.html");
  }
  
  
  let uName=document.getElementById("userName").innerText = fName.value;
  console.log(uName)
  console.log(fName);
  //  console.log(arrays.length)

}

//  console.log( typeof arrays);

// loginSection

function loginfnc() {
  let LEmail = document.getElementById("LEmail").value;
  // let Lpassword=document.getElementById("Lpassword").value;
isFound =true;
  for (let i = 0; i < arrays.length; i++) {
    if (LEmail == arrays[i].email) {
      window.open("page.html");
      isFound=false;
    }
  }
  if(isFound=true){
    alert("pleace sinup ")
  }
}




// blog Section 

let blogArray = JSON.parse(localStorage.getItem("bl")) || [];
function bloges() {
  let blogTittle = document.getElementById('blogTittle').value;
  let blog = document.getElementById('blog').value;
  let authorName = document.getElementById('authorName').value;
let fileIMG=document.getElementById("file").value;
  let add = {
    blogTittle,
    blog,
    authorName,
    fileIMG

  }
  localStorage.setItem("bl", JSON.stringify(blogArray));
  blogArray.push(add);
   console.log(blogArray);
  //  document.write(blogArray);

  console.log(add.blogTittle)


  document.write(blogTittle, blog, authorName);
}
function bloges() {
  let panel = document.getElementById("panel");
  panel.style.display = "flex";
  form.style.display = "none";
  //  document.write(blogArray[0].add);
  let name = document.getElementById('name').innerText = blogTittle.value;
  let description = document.getElementById('decription').innerText = blog.value;
  let author = document.getElementById("author").innerText = authorName.value;
  let file=document.getElementById("fImage").innerText=fileIMG.value;
  //  console.log(blog);     

}
// console.log("hello")



function panel() {
  let form = document.getElementById("form");
  form.style.display = "flex";
  // clickbtn.style.display="none"
}


