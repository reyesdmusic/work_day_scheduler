
$(document).ready(function() {

  render9am();
  render10am();

    let m = moment().format("HH");
    console.log(m);
    

    $("#save-box-9am").hide();
    $("#cancel-box-9am").hide();
    $("#text-box-9am").hide();
    $("#user-edit-9am").hide();
    $("#clear-box-9am").hide();
    $("#set-text-9am").show();

    $("#save-box-10am").hide();
    $("#cancel-box-10am").hide();
    $("#text-box-10am").hide();
    $("#user-edit-10am").hide();
    $("#clear-box-10am").hide();
    $("#set-text-10am").show();

    $("#edit-box-9am").on("click", function(){
        $("#edit-box-9am").hide();
        $("#cancel-box-9am").show();
        $("#save-box-9am").show();
        $("#text-box-9am").show();
        $("#set-text-9am").hide();
        $("#user-edit-9am").show();
        $("#clear-box-9am").show();
    })

    $("#cancel-box-9am").on("click", function(){
        $("#edit-box-9am").show();
        $("#cancel-box-9am").hide();
        $("#save-box-9am").hide();
        $("#user-edit-9am").hide();
        $("#text-box-9am").hide();
        $("#set-text-9am").show();
        $("#clear-box-9am").hide();
    })

 
       
      $("#clear-box-9am").on("click", function(){
        $("#user-edit-9am").val("").empty();
    })

    if (m > 9) {
      $("#text-box-9am").attr("class", "past col-lg-8 col-md-12")
      $("#set-text-9am").attr("class", "past col-lg-8 col-md-12")
      $("#user-edit-9am").attr("class", "past-input")
    }
    
    if (m === 9) {
      $("#text-box-9am").attr("class", "now col-lg-8 col-md-12")
      $("#set-text-9am").attr("class", "now col-lg-8 col-md-12")
      $("#user-edit-9am").attr("class", "now-input")
    }
    
    
    if (m < 9) {
      $("#text-box-9am").attr("class", "future col-lg-8 col-md-12")
      $("#set-text-9am").attr("class", "future col-lg-8 col-md-12")
      $("#user-edit-9am").attr("class", "future-input")
    }





var storedUserEdit9am = [];

$("#save-box-9am").on("click", function(event) {
  event.preventDefault();

  userEdit9am = $('#user-edit-9am').val();
  storedUserEdit9am = [];
  localStorage.setItem('storedUserEdit9am', JSON.stringify(storedUserEdit9am));

storedUserEdit9am.push(userEdit9am);

console.log(storedUserEdit9am);

localStorage.setItem('storedUserEdit9am', JSON.stringify(storedUserEdit9am));


$("#set-text-9am").show();
$("#edit-box-9am").show();
$("#cancel-box-9am").hide();
$("#save-box-9am").hide();
$("#text-box-9am").hide();
$("#clear-box-9am").hide();

render9am();

});

function render9am() {
 
  var new9amText= JSON.parse(localStorage.getItem("storedUserEdit9am"));

  if (new9amText !== null) {
  console.log(new9amText[0]);


  $("#set-text-9am").text(new9amText[0]);

  }
}





$("#edit-box-10am").on("click", function(){
    $("#edit-box-10am").hide();
    $("#cancel-box-10am").show();
    $("#save-box-10am").show();
    $("#text-box-10am").show();
    $("#set-text-10am").hide();
    $("#user-edit-10am").show();
    $("#clear-box-10am").show();
})

$("#cancel-box-10am").on("click", function(){
    $("#edit-box-10am").show();
    $("#cancel-box-10am").hide();
    $("#save-box-10am").hide();
    $("#user-edit-10am").hide();
    $("#text-box-10am").hide();
    $("#set-text-10am").show();
    $("#clear-box-10am").hide();
})


   
  $("#clear-box-10am").on("click", function(){
    $("#user-edit-10am").val("").empty();
})

if (m > 10) {
  $("#text-box-10am").attr("class", "past col-lg-8 col-md-12")
  $("#set-text-10am").attr("class", "past col-lg-8 col-md-12")
  $("#user-edit-10am").attr("class", "past-input")
}

if (m === 10) {
  $("#text-box-10am").attr("class", "now col-lg-8 col-md-12")
  $("#set-text-10am").attr("class", "now col-lg-8 col-md-12")
  $("#user-edit-10am").attr("class", "now-input")
}


if (m < 10) {
  $("#text-box-10am").attr("class", "future col-lg-8 col-md-12")
  $("#set-text-10am").attr("class", "future col-lg-8 col-md-12")
  $("#user-edit-10am").attr("class", "future-input")
}

var storedUserEdit10am = [];

$("#save-box-10am").on("click", function(event) {
event.preventDefault();

userEdit10am = $('#user-edit-10am').val();
storedUserEdit10am = [];
localStorage.setItem('storedUserEdit10am', JSON.stringify(storedUserEdit10am));

storedUserEdit10am.push(userEdit10am);

console.log(storedUserEdit10am);

localStorage.setItem('storedUserEdit10am', JSON.stringify(storedUserEdit10am));


$("#set-text-10am").show();
$("#edit-box-10am").show();
$("#cancel-box-10am").hide();
$("#save-box-10am").hide();
$("#text-box-10am").hide();
$("#clear-box-10am").hide();

render10am();

});

function render10am() {

var new10amText= JSON.parse(localStorage.getItem("storedUserEdit10am"));

if (new10amText !== null) {

console.log(new10amText[0]);
$("#set-text-10am").text(new10amText[0]);

}
}














})

