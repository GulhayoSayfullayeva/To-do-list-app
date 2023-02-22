function newItem(){

    let li = $('<li></li>');
    let input = $('#input').val();
    console.log(input);
    li.append(input);

    if( input === ""){
        alert("Write something!!!");
    }
    else{
        $("#list").append(li);
    }

    li.on("dblclick", function(){
        li.toggleClass("strike");
    });

    let crossoutButton = $("<crossOutButton></crossOutButton>");
    crossoutButton.append(document.createTextNode('X'));
    li.append(crossoutButton);
    crossoutButton.on('click', deleteItem);

    function deleteItem(){
        li.toggleClass("delete");
    }

    $('#list').sortable();


    
}