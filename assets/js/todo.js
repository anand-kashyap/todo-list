$("ul").on("click","li",function(){
$(this).toggleClass("strike");
});

$("ul").on("click",".delete",function(e){
	$(this).parent().fadeOut("slow",function(){
		$(this).remove();
	});
	e.stopPropagation();
});
$("input").on("keypress",function(e){
if(e.which===13){
var valu= $(this).val();	
$(this).val("");
$("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span> "+ valu +"</li>");
}
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});
