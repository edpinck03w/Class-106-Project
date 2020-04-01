var serverURL="http://localhost:8080/api/";
var items=[];

function init(){
    console.log("Admin Page");
}
window.onload=init;

//object constructor

class Item {
    constructor (code,title,price,description,category,image) {
    this.code=code;
    this.title=title;
    this.price=price;
    this.description=description;
    this.category=category;
    this.image=image;
    this.user="Edward";
    }
}


function clearForm(){
    $('#code').val("");
    $("#title").val("");
    $("#price").val("");
    $("#description").val("");
    $("#category").val("");
    $("#image").val("");
}

function register(){
    //console.log("Current Items"+items.length);

    //save from the input in a variable
    var code=$("#code").val();
    var title=$("#title").val();
    var price=$("#price").val();
    var description=$("#description").val();
    var category=$("#category").val();
    var image=$("#image").val();

    if(code!="" && title!="" && price!="" && description!="" && category!="" && image!=""){
        //create an object
        var newItem= new Item(code,title,price,description,category,image);

        //assign the variable to the attribute
        items.push(newItem);
        var jsonString=JSON.stringify(newItem);
        console.log(newItem);
        console.log(jsonString);

        console.log("New item:" + items.length);
        alert("You registered a new product.");
        }
        else{
            alert("You cannot register a blank product.");
    }
    // Asyn JS and XML - connecting to a server - strings, interger, or boolean values only
    //send object to the server
    $.ajax({
        url:serverURL+"items",
        type:"POST",
        contentType:"application/json",
        data:jsonString,
        success:function(response){
            console.log("Admin - It works",response);
            //show the notification
            $('#alert-box').removeClass("hidden");
            //hide the alert initially and then have it disappear after 3 seconds
            setTimeout(function(){
                $('#alert-box').addClass('hidden');
            },3000);
            clearForm();
        },
        error:function(errorDetails){
            console.log("Admin - Error, Something went wrong",errorDetails);
        }
    });
}



$("#register-btn").on('click',function(){
    register();
});

//homework

//function solverHW(){

    var data=[
        {
            age:28,
            name:"Eli",
            color:"Orange"
        },
        {
            age:35,
            name:"Zach",
            color:"Blue"
        },
        {
            age:26,
            name:"Larry",
            color:"Blue"
        },
        {
            age:37,
            name:"Ed",
            color: "Blue"
        },
        {
            age:30,
            name:"Jeremy",
            color: "Peach"
        },
        {
            age:28,
            name:"Pavel",
            color: "Purple"
        },
        {
            age:33,
            name:"Chad",
            color: "Red"
        },
    ];
    
    // 1 Who (name - age) is the oldest
    
    data.sort(function(a,b){
        return b.age - a.age;
    });
    /*travel the array*/
    /*for(var i=0;i<data.length;i++){
        if(this.age > age){
            console.log(`${this.name} , ${this.age}, is the oldest`);
        }
    }
}*/
    console.log(`${data[0].name}, ${data[0].age} , is the oldest person in the class.` );
    
    // 2 Who (name - age) is the youngest
    
    data.sort(function(a,b){
        return a.age - b.age;
    });
    console.log(`${data[0].name}, ${data[0].age} , is the youngest person in the class.` );


// 3 Sum all the ages
var sum=0;
for(var i=0;i<data.length;i++){
    sum+= data[i].age;
}
console.log(sum);
// read about
//HTTP methods (GET,POST,PUT,PATCH,DELETE)