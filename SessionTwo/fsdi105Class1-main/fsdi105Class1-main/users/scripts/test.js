
function hello(arg){
    console.log("Hello "+arg);
    return "Traveling to London";
}
//let menu=document.getElementById("menu-container");

//menu.style.display="none";
//menu.style.display="block";
//menu.remove();
//console.log(document.getElementsByClassName("menu"));
//console.log(document.getElementsByTagName("a"));

$("#menu-container").hide();
$("#menu-container").show();//by id
$(".menu").css({'background':'gray'});//by class
jQuery("body").css({'background':"#dedede"});//by tag