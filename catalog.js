

/*Global Variables*/
/*var items=[
    {
        //first item
        code:'1tvs',
        title:'TV Samsumg',
        price:1000,
        description:"This is the long description of the item",
        category:'Electronics',
        image:'img/tv.jpg'

    },
    {
        //second item
        code:'1ph10',
        title:'Phone',
        price:1500,
        description:"This is the long description of the item",
        category:'Mobile Device',
        image:'img/iphone.jpg'
    },
    {
       //third item
       code:'2spk',
       title:'Speakers',
       price:2500,
       description:"This is the long description of the item",
       category:'Sound',
       image:'img/sound.jpg' 
    },
    {
       //fourth item
       code:'cmpt',
       title:'MacBook',
       price:5500,
       description:"This is the long description of the item",
       category:'Desktop',
       image:'img/computer.jpg' 
    },
    {
        //fifth item
        code:'ear',
        title:'AirPod',
        price:500,
        description:"This is the long description of the item",
        category:'Earphone',
        image:'img/earphone.jpg' 
     }
];*/
var items=[];
var serverURL="http://localhost:8080/api/";


/*functions*/


function fetchCatalog(){
    //get the items from the server
    $.ajax({
        url:serverURL+"items",
        type:"GET",
        success:function(response){
            console.log("Catalog - It works",response);
            for(var j=0;j<response.length;j++){
                
                //solve display my items only
                if(response[j].user=="Edward" && response[j].title!=""){
                    console.log(response[j]);
                    items.push(response[j]);
                }
            }
            displayCatalog();
        },
        error:function(errorDetails){
            console.log("Catalog - Error, Something went very wrong",errorDetails);
        }
    });
    //displayCatalog();
}

function displayCatalog(){
    for(var i=0;i<items.length;i++){
        displayItem(items[i]);
    }
}
function displayItem(product){
    
    /*travel inside the array*/
    //for(var i=0;i<items.length;i++){
    /*then get the element from inside the array*/
    //var product = items[i];

    /*creat the string*/
    var layout =`<div class="item" id="${product.code}">
        <img src="${product.image}">
        <h4 class="item-title">${product.title}</h4>
        <h6 class="item-price">${product.price}</h6>
        <p> ${product.description}</p>
        <div class="button-div">
            <button class="btn btn-primary mb-2">Add to the Cart</button>
        </div>
    </div>`;
    //console.log(i,layout);
    /*next display the element in the DOM aka HTML*/
        $("#catalog").append(layout);
    //}
}

function init(){
    console.log('Catalog Page');
    fetchCatalog();
    //displayCatalog();
    $("#search-btn").click(Search);
    $("#search-txt").keypress(function(e){
        if(e.keyCode==13){
            Search();
        }
    });
}




function Search(){
//$('#search-btn').on('click',function(){
    /*body search function*/
    var searchString=$('#search-txt').val();
    /*travel the array*/
    for(var i=0;i<items.length;i++){
        /*conditional*/
        if(items[i].title.toUpperCase().includes(searchString.toUpperCase())|| items[i].code.toUpperCase().includes(searchString.toUpperCase())||items[i].description.toUpperCase().includes(searchString.toUpperCase())){
             /*execute the change*/
            $('#'+items[i].code).show();
        }
        else{
            /*execute the change*/
            $('#'+items[i].code).hide();
            
        }

        if(searchString==""){
            $('#'+items[i].code).show();
        }
    }
  

};


/*initialization*/
window.onload=init;