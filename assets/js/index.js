//Check off items of todo list

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});


//Click to delete
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut().remove(3000, function(){
    $(this).remove();
  })
  event.stopPropagation(); 
});

//Creating items
$("input[type='text']").keypress(function(event){
  if(event.which === 13 ){
    //getting value from input
    var itemCreation = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + itemCreation +"</li>");
  }
})

$(".fa-plus").click(function(){ 
  $("input[type='text']").fadeToggle(500);
})