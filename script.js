
$(document).ready(function() {

  /*This renders all the user input notes into the corresponding rows*/

  render9am();
  render10am();
  render11am();
  render12pm();
  render1pm();
  render2pm();
  render3pm();
  render4pm();
  render5pm();

  /*This grabs the hour in military time and sets it to the variable "m"*/

    let m = moment().format("HH");
  
  /*Here all the appropriate divs are shown and hidden*/

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

    $("#save-box-11am").hide();
    $("#cancel-box-11am").hide();
    $("#text-box-11am").hide();
    $("#user-edit-11am").hide();
    $("#clear-box-11am").hide();
    $("#set-text-11am").show();

    $("#save-box-12pm").hide();
    $("#cancel-box-12pm").hide();
    $("#text-box-12pm").hide();
    $("#user-edit-12pm").hide();
    $("#clear-box-12pm").hide();
    $("#set-text-12pm").show();

    $("#save-box-1pm").hide();
    $("#cancel-box-1pm").hide();
    $("#text-box-1pm").hide();
    $("#user-edit-1pm").hide();
    $("#clear-box-1pm").hide();
    $("#set-text-1pm").show();

    $("#save-box-2pm").hide();
    $("#cancel-box-2pm").hide();
    $("#text-box-2pm").hide();
    $("#user-edit-2pm").hide();
    $("#clear-box-2pm").hide();
    $("#set-text-2pm").show();

    $("#save-box-3pm").hide();
    $("#cancel-box-3pm").hide();
    $("#text-box-3pm").hide();
    $("#user-edit-3pm").hide();
    $("#clear-box-3pm").hide();
    $("#set-text-3pm").show();

    $("#save-box-4pm").hide();
    $("#cancel-box-4pm").hide();
    $("#text-box-4pm").hide();
    $("#user-edit-4pm").hide();
    $("#clear-box-4pm").hide();
    $("#set-text-4pm").show();

    $("#save-box-5pm").hide();
    $("#cancel-box-5pm").hide();
    $("#text-box-5pm").hide();
    $("#user-edit-5pm").hide();
    $("#clear-box-5pm").hide();
    $("#set-text-5pm").show();

  /*This clears all the user input notes*/

$("#clear-all").on("click", function(){

  localStorage.clear('storedUserEdit9am');
  localStorage.clear('storedUserEdit10am');
  localStorage.clear('storedUserEdit11am');
  localStorage.clear('storedUserEdit12pm');
  localStorage.clear('storedUserEdit1pm');
  localStorage.clear('storedUserEdit2pm');
  localStorage.clear('storedUserEdit3pm');
  localStorage.clear('storedUserEdit4pm');
  localStorage.clear('storedUserEdit5pm');

  location.reload();
})


 //////*The following code corresponds to the "9 AM" row. Simmilar code is repeated below corresponding to the other rows by hour*////


 //*The edit button*//
    
    $("#edit-box-9am").on("click", function(){
        $("#edit-box-9am").hide();
        $("#cancel-box-9am").show();
        $("#save-box-9am").show();
        $("#text-box-9am").show();
        $("#set-text-9am").hide();
        $("#user-edit-9am").show();
        $("#clear-box-9am").show();
    })
  
  //*The cancel button*//

    $("#cancel-box-9am").on("click", function(){
        $("#edit-box-9am").show();
        $("#cancel-box-9am").hide();
        $("#save-box-9am").hide();
        $("#user-edit-9am").hide();
        $("#text-box-9am").hide();
        $("#set-text-9am").show();
        $("#clear-box-9am").hide();
    })
  
     //*The clear button*//

    $("#clear-box-9am").on("click", function(){
        $("#user-edit-9am").val("").empty();
    })

    //*This changes the color of the row to reflect whether the hour is current, in the past, or in the future*//

    if (m > 9) {
      $("#text-box-9am").attr("class", "past col-lg-6 col-md-12")
      $("#set-text-9am").attr("class", "past col-lg-8 col-md-12")
      $("#user-edit-9am").attr("class", "past-input")
    }
    
    if (m == 9) {
      $("#text-box-9am").attr("class", "now col-lg-6 col-md-12")
      $("#set-text-9am").attr("class", "now col-lg-8 col-md-12")
      $("#user-edit-9am").attr("class", "now-input")
    }
    
    
    if (m < 9) {
      $("#text-box-9am").attr("class", "future col-lg-6 col-md-12")
      $("#set-text-9am").attr("class", "future col-lg-8 col-md-12")
      $("#user-edit-9am").attr("class", "future-input")
    }

//*The code saves user input in to local storage and then renders it into the row*//

var storedUserEdit9am = [];

$("#save-box-9am").on("click", function(event) {
  event.preventDefault();

  userEdit9am = $('#user-edit-9am').val();
  storedUserEdit9am = [];
  localStorage.setItem('storedUserEdit9am', JSON.stringify(storedUserEdit9am));

storedUserEdit9am.push(userEdit9am);

localStorage.setItem('storedUserEdit9am', JSON.stringify(storedUserEdit9am));


$("#set-text-9am").show();
$("#edit-box-9am").show();
$("#cancel-box-9am").hide();
$("#save-box-9am").hide();
$("#text-box-9am").hide();
$("#clear-box-9am").hide();

render9am();

});

//*This is the code that renders the info from local storage onto the row. It is called when the page is loaded and when the user hits the save button*//

function render9am() {
 
  var new9amText= JSON.parse(localStorage.getItem("storedUserEdit9am"));

  if (new9amText !== null) {

  $("#set-text-9am").text(new9amText[0]);

  }
}

///////////////////////////

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
  $("#text-box-10am").attr("class", "past col-lg-6 col-md-12")
  $("#set-text-10am").attr("class", "past col-lg-8 col-md-12")
  $("#user-edit-10am").attr("class", "past-input")
}

if (m == 10) {
  $("#text-box-10am").attr("class", "now col-lg-6 col-md-12")
  $("#set-text-10am").attr("class", "now col-lg-8 col-md-12")
  $("#user-edit-10am").attr("class", "now-input")
}


if (m < 10) {
  $("#text-box-10am").attr("class", "future col-lg-6 col-md-12")
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

 
$("#set-text-10am").text(new10amText[0]);

}
}

/////////////////

$("#edit-box-11am").on("click", function(){
  $("#edit-box-11am").hide();
  $("#cancel-box-11am").show();
  $("#save-box-11am").show();
  $("#text-box-11am").show();
  $("#set-text-11am").hide();
  $("#user-edit-11am").show();
  $("#clear-box-11am").show();
})

$("#cancel-box-11am").on("click", function(){
  $("#edit-box-11am").show();
  $("#cancel-box-11am").hide();
  $("#save-box-11am").hide();
  $("#user-edit-11am").hide();
  $("#text-box-11am").hide();
  $("#set-text-11am").show();
  $("#clear-box-11am").hide();
})
 
$("#clear-box-11am").on("click", function(){
  $("#user-edit-11am").val("").empty();
})

if (m > 11) {
$("#text-box-11am").attr("class", "past col-lg-6 col-md-12")
$("#set-text-11am").attr("class", "past col-lg-8 col-md-12")
$("#user-edit-11am").attr("class", "past-input")
}

if (m == 11) {
$("#text-box-11am").attr("class", "now col-lg-6 col-md-12")
$("#set-text-11am").attr("class", "now col-lg-8 col-md-12")
$("#user-edit-11am").attr("class", "now-input")
}


if (m < 11) {
$("#text-box-11am").attr("class", "future col-lg-6 col-md-12")
$("#set-text-11am").attr("class", "future col-lg-8 col-md-12")
$("#user-edit-11am").attr("class", "future-input")
}

var storedUserEdit11am = [];

$("#save-box-11am").on("click", function(event) {
event.preventDefault();

userEdit11am = $('#user-edit-11am').val();
storedUserEdit11am = [];
localStorage.setItem('storedUserEdit11am', JSON.stringify(storedUserEdit11am));

storedUserEdit11am.push(userEdit11am);

console.log(storedUserEdit11am);

localStorage.setItem('storedUserEdit11am', JSON.stringify(storedUserEdit11am));


$("#set-text-11am").show();
$("#edit-box-11am").show();
$("#cancel-box-11am").hide();
$("#save-box-11am").hide();
$("#text-box-11am").hide();
$("#clear-box-11am").hide();

render11am();

});

function render11am() {

var new11amText= JSON.parse(localStorage.getItem("storedUserEdit11am"));

if (new11amText !== null) {


$("#set-text-11am").text(new11amText[0]);

}
}

/////////////////

$("#edit-box-12pm").on("click", function(){
  $("#edit-box-12pm").hide();
  $("#cancel-box-12pm").show();
  $("#save-box-12pm").show();
  $("#text-box-12pm").show();
  $("#set-text-12pm").hide();
  $("#user-edit-12pm").show();
  $("#clear-box-12pm").show();
})

$("#cancel-box-12pm").on("click", function(){
  $("#edit-box-12pm").show();
  $("#cancel-box-12pm").hide();
  $("#save-box-12pm").hide();
  $("#user-edit-12pm").hide();
  $("#text-box-12pm").hide();
  $("#set-text-12pm").show();
  $("#clear-box-12pm").hide();
})
 
$("#clear-box-12pm").on("click", function(){
  $("#user-edit-12pm").val("").empty();
})

if (m > 12) {
$("#text-box-12pm").attr("class", "past col-lg-6 col-md-12")
$("#set-text-12pm").attr("class", "past col-lg-8 col-md-12")
$("#user-edit-12pm").attr("class", "past-input")
}

if (m == 12) {
$("#text-box-12pm").attr("class", "now col-lg-6 col-md-12")
$("#set-text-12pm").attr("class", "now col-lg-8 col-md-12")
$("#user-edit-12pm").attr("class", "now-input")
}


if (m < 12) {
$("#text-box-12pm").attr("class", "future col-lg-6 col-md-12")
$("#set-text-12pm").attr("class", "future col-lg-8 col-md-12")
$("#user-edit-12pm").attr("class", "future-input")
}

var storedUserEdit12pm = [];

$("#save-box-12pm").on("click", function(event) {
event.preventDefault();

userEdit12pm = $('#user-edit-12pm').val();
storedUserEdit12pm = [];
localStorage.setItem('storedUserEdit12pm', JSON.stringify(storedUserEdit12pm));

storedUserEdit12pm.push(userEdit12pm);

console.log(storedUserEdit12pm);

localStorage.setItem('storedUserEdit12pm', JSON.stringify(storedUserEdit12pm));


$("#set-text-12pm").show();
$("#edit-box-12pm").show();
$("#cancel-box-12pm").hide();
$("#save-box-12pm").hide();
$("#text-box-12pm").hide();
$("#clear-box-12pm").hide();

render12pm();

});

function render12pm() {

var new12pmText= JSON.parse(localStorage.getItem("storedUserEdit12pm"));

if (new12pmText !== null) {


$("#set-text-12pm").text(new12pmText[0]);

}
}

/////////////////

$("#edit-box-1pm").on("click", function(){
  $("#edit-box-1pm").hide();
  $("#cancel-box-1pm").show();
  $("#save-box-1pm").show();
  $("#text-box-1pm").show();
  $("#set-text-1pm").hide();
  $("#user-edit-1pm").show();
  $("#clear-box-1pm").show();
})

$("#cancel-box-1pm").on("click", function(){
  $("#edit-box-1pm").show();
  $("#cancel-box-1pm").hide();
  $("#save-box-1pm").hide();
  $("#user-edit-1pm").hide();
  $("#text-box-1pm").hide();
  $("#set-text-1pm").show();
  $("#clear-box-1pm").hide();
})
 
$("#clear-box-1pm").on("click", function(){
  $("#user-edit-1pm").val("").empty();
})

if (m > 13) {
$("#text-box-1pm").attr("class", "past col-lg-6 col-md-12")
$("#set-text-1pm").attr("class", "past col-lg-8 col-md-12")
$("#user-edit-1pm").attr("class", "past-input")
}

if (m == 13) {
$("#text-box-1pm").attr("class", "now col-lg-6 col-md-12")
$("#set-text-1pm").attr("class", "now col-lg-8 col-md-12")
$("#user-edit-1pm").attr("class", "now-input")
}


if (m < 13) {
$("#text-box-1pm").attr("class", "future col-lg-6 col-md-12")
$("#set-text-1pm").attr("class", "future col-lg-8 col-md-12")
$("#user-edit-1pm").attr("class", "future-input")
}

var storedUserEdit1pm = [];

$("#save-box-1pm").on("click", function(event) {
event.preventDefault();

userEdit1pm = $('#user-edit-1pm').val();
storedUserEdit1pm = [];
localStorage.setItem('storedUserEdit1pm', JSON.stringify(storedUserEdit1pm));

storedUserEdit1pm.push(userEdit1pm);

console.log(storedUserEdit1pm);

localStorage.setItem('storedUserEdit1pm', JSON.stringify(storedUserEdit1pm));


$("#set-text-1pm").show();
$("#edit-box-1pm").show();
$("#cancel-box-1pm").hide();
$("#save-box-1pm").hide();
$("#text-box-1pm").hide();
$("#clear-box-1pm").hide();

render1pm();

});

function render1pm() {

var new1pmText= JSON.parse(localStorage.getItem("storedUserEdit1pm"));

if (new1pmText !== null) {


$("#set-text-1pm").text(new1pmText[0]);

}
}

/////////////////


$("#edit-box-2pm").on("click", function(){
  $("#edit-box-2pm").hide();
  $("#cancel-box-2pm").show();
  $("#save-box-2pm").show();
  $("#text-box-2pm").show();
  $("#set-text-2pm").hide();
  $("#user-edit-2pm").show();
  $("#clear-box-2pm").show();
})

$("#cancel-box-2pm").on("click", function(){
  $("#edit-box-2pm").show();
  $("#cancel-box-2pm").hide();
  $("#save-box-2pm").hide();
  $("#user-edit-2pm").hide();
  $("#text-box-2pm").hide();
  $("#set-text-2pm").show();
  $("#clear-box-2pm").hide();
})
 
$("#clear-box-2pm").on("click", function(){
  $("#user-edit-2pm").val("").empty();
})

if (m > 14) {
$("#text-box-2pm").attr("class", "past col-lg-6 col-md-12")
$("#set-text-2pm").attr("class", "past col-lg-8 col-md-12")
$("#user-edit-2pm").attr("class", "past-input")
}

if (m == 14) {
$("#text-box-2pm").attr("class", "now col-lg-6 col-md-12")
$("#set-text-2pm").attr("class", "now col-lg-8 col-md-12")
$("#user-edit-2pm").attr("class", "now-input")
}


if (m < 14) {
$("#text-box-2pm").attr("class", "future col-lg-6 col-md-12")
$("#set-text-2pm").attr("class", "future col-lg-8 col-md-12")
$("#user-edit-2pm").attr("class", "future-input")
}

var storedUserEdit2pm = [];

$("#save-box-2pm").on("click", function(event) {
event.preventDefault();

userEdit2pm = $('#user-edit-2pm').val();
storedUserEdit2pm = [];
localStorage.setItem('storedUserEdit2pm', JSON.stringify(storedUserEdit2pm));

storedUserEdit2pm.push(userEdit2pm);

console.log(storedUserEdit2pm);

localStorage.setItem('storedUserEdit2pm', JSON.stringify(storedUserEdit2pm));


$("#set-text-2pm").show();
$("#edit-box-2pm").show();
$("#cancel-box-2pm").hide();
$("#save-box-2pm").hide();
$("#text-box-2pm").hide();
$("#clear-box-2pm").hide();

render2pm();

});

function render2pm() {

var new2pmText= JSON.parse(localStorage.getItem("storedUserEdit2pm"));

if (new2pmText !== null) {


$("#set-text-2pm").text(new2pmText[0]);

}
}

/////////////////



$("#edit-box-3pm").on("click", function(){
  $("#edit-box-3pm").hide();
  $("#cancel-box-3pm").show();
  $("#save-box-3pm").show();
  $("#text-box-3pm").show();
  $("#set-text-3pm").hide();
  $("#user-edit-3pm").show();
  $("#clear-box-3pm").show();
})

$("#cancel-box-3pm").on("click", function(){
  $("#edit-box-3pm").show();
  $("#cancel-box-3pm").hide();
  $("#save-box-3pm").hide();
  $("#user-edit-3pm").hide();
  $("#text-box-3pm").hide();
  $("#set-text-3pm").show();
  $("#clear-box-3pm").hide();
})
 
$("#clear-box-3pm").on("click", function(){
  $("#user-edit-3pm").val("").empty();
})

if (m > 15) {
$("#text-box-3pm").attr("class", "past col-lg-6 col-md-12")
$("#set-text-3pm").attr("class", "past col-lg-8 col-md-12")
$("#user-edit-3pm").attr("class", "past-input")
}

if (m == 15) {
$("#text-box-3pm").attr("class", "now col-lg-6 col-md-12")
$("#set-text-3pm").attr("class", "now col-lg-8 col-md-12")
$("#user-edit-3pm").attr("class", "now-input")
}


if (m < 15) {
$("#text-box-3pm").attr("class", "future col-lg-6 col-md-12")
$("#set-text-3pm").attr("class", "future col-lg-8 col-md-12")
$("#user-edit-3pm").attr("class", "future-input")
}

var storedUserEdit3pm = [];

$("#save-box-3pm").on("click", function(event) {
event.preventDefault();

userEdit3pm = $('#user-edit-3pm').val();
storedUserEdit3pm = [];
localStorage.setItem('storedUserEdit3pm', JSON.stringify(storedUserEdit3pm));

storedUserEdit3pm.push(userEdit3pm);

console.log(storedUserEdit3pm);

localStorage.setItem('storedUserEdit3pm', JSON.stringify(storedUserEdit3pm));


$("#set-text-3pm").show();
$("#edit-box-3pm").show();
$("#cancel-box-3pm").hide();
$("#save-box-3pm").hide();
$("#text-box-3pm").hide();
$("#clear-box-3pm").hide();

render3pm();

});

function render3pm() {

var new3pmText= JSON.parse(localStorage.getItem("storedUserEdit3pm"));

if (new3pmText !== null) {


$("#set-text-3pm").text(new3pmText[0]);

}
}

/////////////////


$("#edit-box-4pm").on("click", function(){
  $("#edit-box-4pm").hide();
  $("#cancel-box-4pm").show();
  $("#save-box-4pm").show();
  $("#text-box-4pm").show();
  $("#set-text-4pm").hide();
  $("#user-edit-4pm").show();
  $("#clear-box-4pm").show();
})

$("#cancel-box-4pm").on("click", function(){
  $("#edit-box-4pm").show();
  $("#cancel-box-4pm").hide();
  $("#save-box-4pm").hide();
  $("#user-edit-4pm").hide();
  $("#text-box-4pm").hide();
  $("#set-text-4pm").show();
  $("#clear-box-4pm").hide();
})
 
$("#clear-box-4pm").on("click", function(){
  $("#user-edit-4pm").val("").empty();
})

if (m > 16) {
$("#text-box-4pm").attr("class", "past col-lg-6 col-md-12")
$("#set-text-4pm").attr("class", "past col-lg-8 col-md-12")
$("#user-edit-4pm").attr("class", "past-input")
}

if (m == 16) {
$("#text-box-4pm").attr("class", "now col-lg-6 col-md-12")
$("#set-text-4pm").attr("class", "now col-lg-8 col-md-12")
$("#user-edit-4pm").attr("class", "now-input")
}


if (m < 16) {
$("#text-box-4pm").attr("class", "future col-lg-6 col-md-12")
$("#set-text-4pm").attr("class", "future col-lg-8 col-md-12")
$("#user-edit-4pm").attr("class", "future-input")
}

var storedUserEdit4pm = [];

$("#save-box-4pm").on("click", function(event) {
event.preventDefault();

userEdit4pm = $('#user-edit-4pm').val();
storedUserEdit4pm = [];
localStorage.setItem('storedUserEdit4pm', JSON.stringify(storedUserEdit4pm));

storedUserEdit4pm.push(userEdit4pm);

localStorage.setItem('storedUserEdit4pm', JSON.stringify(storedUserEdit4pm));


$("#set-text-4pm").show();
$("#edit-box-4pm").show();
$("#cancel-box-4pm").hide();
$("#save-box-4pm").hide();
$("#text-box-4pm").hide();
$("#clear-box-4pm").hide();

render4pm();

});

function render4pm() {

var new4pmText= JSON.parse(localStorage.getItem("storedUserEdit4pm"));

if (new4pmText !== null) {


$("#set-text-4pm").text(new4pmText[0]);

}
}

/////////////////

$("#edit-box-5pm").on("click", function(){
  $("#edit-box-5pm").hide();
  $("#cancel-box-5pm").show();
  $("#save-box-5pm").show();
  $("#text-box-5pm").show();
  $("#set-text-5pm").hide();
  $("#user-edit-5pm").show();
  $("#clear-box-5pm").show();
})

$("#cancel-box-5pm").on("click", function(){
  $("#edit-box-5pm").show();
  $("#cancel-box-5pm").hide();
  $("#save-box-5pm").hide();
  $("#user-edit-5pm").hide();
  $("#text-box-5pm").hide();
  $("#set-text-5pm").show();
  $("#clear-box-5pm").hide();
})
 
$("#clear-box-5pm").on("click", function(){
  $("#user-edit-5pm").val("").empty();
})

if (m > 16) {
$("#text-box-5pm").attr("class", "past col-lg-6 col-md-12")
$("#set-text-5pm").attr("class", "past col-lg-8 col-md-12")
$("#user-edit-5pm").attr("class", "past-input")
}

if (m == 16) {
$("#text-box-5pm").attr("class", "now col-lg-6 col-md-12")
$("#set-text-5pm").attr("class", "now col-lg-8 col-md-12")
$("#user-edit-5pm").attr("class", "now-input")
}


if (m < 16) {
$("#text-box-5pm").attr("class", "future col-lg-6 col-md-12")
$("#set-text-5pm").attr("class", "future col-lg-8 col-md-12")
$("#user-edit-5pm").attr("class", "future-input")
}

var storedUserEdit5pm = [];

$("#save-box-5pm").on("click", function(event) {
event.preventDefault();

userEdit5pm = $('#user-edit-5pm').val();
storedUserEdit5pm = [];
localStorage.setItem('storedUserEdit5pm', JSON.stringify(storedUserEdit5pm));

storedUserEdit5pm.push(userEdit5pm);

localStorage.setItem('storedUserEdit5pm', JSON.stringify(storedUserEdit5pm));


$("#set-text-5pm").show();
$("#edit-box-5pm").show();
$("#cancel-box-5pm").hide();
$("#save-box-5pm").hide();
$("#text-box-5pm").hide();
$("#clear-box-5pm").hide();

render5pm();

});

function render5pm() {

var new5pmText= JSON.parse(localStorage.getItem("storedUserEdit5pm"));

if (new5pmText !== null) {


$("#set-text-5pm").text(new5pmText[0]);

}
}

})

