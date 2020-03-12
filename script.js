
$(document).ready(function() {


    let m = moment().format("HH");
    console.log(m);
    

    $("#save-box").hide();
    $("#cancel-box").hide();
    $("#set-text-9am").hide();
    $("#user-edit-9am").hide();
    $("#clear-box").hide();
    

    $("#edit-box").on("click", function(){
        $("#edit-box").hide();
        $("#cancel-box").show();
        $("#save-box").show();
        $("#text-box-9am").show();
        $("#set-text-9am").hide();
        $("#user-edit-9am").show();
        $("#clear-box").show();
    })

    $("#cancel-box").on("click", function(){
        $("#edit-box").show();
        $("#cancel-box").hide();
        $("#save-box").hide();
        $("#user-edit-9am").hide();
        $("#text-box-9am").hide();
        $("#set-text-9am").show();
        $("#clear-box").hide();
    })

    $("#save-box").on("click", function(){
        $("#set-text-9am").text($("#user-edit-9am").val());
        $("#set-text-9am").show();
        $("#edit-box").show();
        $("#cancel-box").hide();
        $("#save-box").hide();
        $("#text-box-9am").hide();
        $("#clear-box").hide();
    })
       
      $("#clear-box").on("click", function(){
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
      $("#user-edit-9am").attr("class", "now col-lg-8 col-md-12")
    }
    
    
    if (m < 9) {
      $("#text-box-9am").attr("class", "future col-lg-8 col-md-12")
      $("#set-text-9am").attr("class", "future col-lg-8 col-md-12")
      $("#user-edit-9am").attr("class", "future col-lg-8 col-md-12")
    }

})

