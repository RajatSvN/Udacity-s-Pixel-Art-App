$("#mkGrid").click(function(e){
e.preventDefault();
var rows = $("#rows").val();
var cols = $("#cols").val();
$("#grid").html("");
var content = "";
for(var i=0 ; i< rows ;i++){
content += "<tr>";
for(var j=0 ; j< cols ;j++){
content+="<td class='cells'></td>";
}
content += "</tr>";
}
$("#grid").append(content);
 })
$('#grid').click(function (event) {
     var paint = $('#clr').val();
  $(event.target).css('background-color', paint);
});