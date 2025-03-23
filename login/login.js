let submitBtn = document.querySelector(".submit");
let  showpasswd= document.getElementById("showpasswd");

function Fsubmit(){
  let username = document.getElementById("name").value;
  let password = document.getElementById("passwd").value;
  if(username=="" || password==""){
    alert("輸入框不可為空!!")
  }
  else if (username=="admin"){
    if(password=="1234"){
      location.href="../loading/loading.html";
    }
    else 
      alert("密碼錯誤!!")
  }
  else{
    alert("查無此人!!")
  }
}
submitBtn.addEventListener("click", Fsubmit);

function Fshowpasswd(){
  let password = document.getElementById("passwd");
  if(password.type === "password") {
    password.type = "text";
    this.textContent = "😮"; 
  } else {
    password.type = "password";
    this.textContent = "🫣";
  }
}
showpasswd.addEventListener("click", Fshowpasswd);