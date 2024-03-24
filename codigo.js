const menu = document.getElementById("menu");
const list = document.querySelector(".list")

menu.addEventListener("click", ()=>{
	if(list.classList.contains("active")){
		list.classList.remove("active");
	} else{
		list.classList.add("active");
	}
})