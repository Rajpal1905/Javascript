const sidebarToggle = document.querySelector(".sidebar-toggle");

const sidebar = document.querySelector(".sidebar")

const closebtn = document.querySelector(".close-btn")

console.log(closebtn)
sidebarToggle.addEventListener('click',()=>{
sidebar.classList.toggle("show-sidebar")
})

closebtn.addEventListener('click',()=>{
   if(sidebar.classList.contains('show-sidebar'))
   {
    sidebar.classList.remove('show-sidebar');
   }
})