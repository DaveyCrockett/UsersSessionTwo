console.log("User register");
//create constructor
class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        //this.attr=parameter;
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}
function registerUser(){
    let email = $("#txtEmail").val();//****check your id on the HTML
   let password = $("#txtPassword").val();
   let first=$("#txtFirst").val();
   let last = $("#txtLast").val();
   let age = $("#txtAge").val();
   let address = $("#txtAddress").val();
   let phone = $("#txtPhone").val();
   let payment = $("#selPayment").val();
   let color=$("#txtColor").val();
    let user=new User(email,password,first,last,age,address,phone,payment,color);
    console.log(user);
}

function init(){
    console.log("Init function");

}
window.onload=init;