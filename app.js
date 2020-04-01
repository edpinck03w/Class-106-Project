function addToDo(){
    // read the input
    // var text = document.getElementById('txt-task').value;
    //console.log(text);
    var text = $('#txt-task').val();
    var x=0;
    if(text!=""){
        //clean the input
        //document.getElementById('txt-task').value="";
        $('#txt-task').val("");
        console.log(text);
        //creat the string
        //var li = "<li>"+text+"</li>";
        var li=`<li id="${x}">${text} <button onclick="deleteToDo('${x}');">--Remove--</button></li>`;
        //display the todo
        $('#pending-list').append(li);
        //set the focus to the input
    }    
    else{
        alert("Empty Values are not Authorized");
    }

    $('#txt-task').focus();
}

function deleteToDo(id){
    console.log("delete");
    $('#'+id).remove();
}

function init(){
    console.log("Init the todo App");
    //sensing user actions/events
    $("#btn-add").click(addToDo);
}

//when the browser finishes rendering the HTML, execute init
window.onload=init;