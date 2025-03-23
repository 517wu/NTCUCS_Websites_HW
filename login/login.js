function submit(){
  event.preventDefault(); // 阻止默认提交（如果需要）
  let username = document.getElementById("name").value;
  alert("用户名是: " + username);
  event.target.submit(); // 继续提交表单（如果需要）
}