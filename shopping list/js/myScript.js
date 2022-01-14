$(document).ready(function(){
    // alert("welcome to my shopping list");

let input = $("#input-field")[0];
 
 let ul = $(".ul")[0];
 let itemList = $("#item-list")[0];

let addItem = $("#add-item")[0];
let del = $(".del")[0]

$("#toggle-button").click(function(){
    $(itemList).toggle();
})





$(addItem).click(function(form){
    form.preventDefault()
    if (input.value.length > 0) {
       let item = input.value;
       let list = $("<li></li>")[0];
       $(list).append(item);
        $(ul).append(list);
        console.log(item)
        console.log(ul.lastChild);
    }
    input.value = "";


})

$(addItem).keypress(function(event){
    if (input.value.length > 0 && event.keyCode === 13) {
        let item = input.value;
        let list = $("<li></li>")[0];
        $(list).append(item);
         $(ul).append(list);
         console.log(item)
         console.log(ul.lastChild);
     }
     input.value = "";
})

$(del).click(function(){
    $("li", ul).last().remove()
})


})