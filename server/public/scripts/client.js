var numberX;
var numberY;
var calcObject = {};
var type;
// var opTypes = ['add','subtract','multiply','divide'];

$(document).ready(function(){
$('.op').on('click', function(){
  event.preventDefault();
  numberX = getFormData($('#numx'));
  numberY = getFormData($('#numy'));
  // console.log(numberX,numberY);
  type = $(this).data('op');
  // console.log(type);
  calcObject.x = numberX.numx;
  calcObject.y = numberY.numy;
  calcObject.type = type;
  console.log(calcObject);
  postMath(calcObject);
});
});

function postMath(calculation){

$.ajax({
type: 'POST',
url: '/math/' + type,
data: calculation,
success: function(answer){
$('.answer').text(answer);
}

});

}
//read in a form's data and convert it to a key:value object
function getFormData(dom_query){
    var out = {};
    var s_data = $(dom_query).serializeArray();
    //transform into simple data/value object
    for(var i = 0; i<s_data.length; i++){
        var record = s_data[i];
        out[record.name] = record.value;
        //console.log(out);
    }
    //console.log(out);
    return out;
  }
