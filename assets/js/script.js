document.querySelector('.part-2').addEventListener('click' , function change(e){
    if(e.target.className == 'img1'){
        document.querySelector('.section-1').style.backgroundColor = "#F0FFF0";
    }

    if(e.target.className == 'img2'){
        document.querySelector('.section-1').style.backgroundColor = "#FFF0F5";
    }
    if(e.target.className == 'img3'){
        document.querySelector('.section-1').style.backgroundColor = "black";
    }
    if(e.target.className == 'img4'){
        document.querySelector('.section-1').style.backgroundColor = "#2E8B57";
    }
    if(e.target.className == 'img5'){
        document.querySelector('.section-1').style.backgroundColor = "#800000";
    }
})


let icon =document.getElementById('icon');
let section2dark = document.getElementById('section2dark');

icon.onclick = function(){
    section2dark.classList.toggle('dark');
    
}



let stars =document.getElementsByClassName("fas");

stars[0].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#e4e4e4";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";

}
stars[1].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";

}
stars[2].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";

}
stars[3].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#e4e4e4";

}
stars[4].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";

}


 let acc_counter = document.querySelectorAll(".acc_counter");

acc_counter.forEach((item , index) =>{
  
item.addEventListener("click" , () =>{
    acc_counter.forEach(eachItem =>{
        eachItem.classList.remove("active");
       
    })
    item.classList.add("active");
})
})