
$(document).ready(function() {


    let m = moment().format("HH");
    console.log(m);
    
    var themeSwitcher = document.querySelector("#time-box");
    var container = document.querySelector("#text-box");
    var otherContainer = document.querySelector("#user-edit");
    var mode = "past";
    
    themeSwitcher.addEventListener("click", function() {
      console.log("clicked");
      if (mode === "past") {
        mode = "future";
        container.setAttribute("class", "future col-8");
        otherContainer.setAttribute("class", "future col-8");
      } else {
        mode = "past";
        container.setAttribute("class", "past col-8");
        otherContainer.setAttribute("class", "past col-8");
      }
    });

    $("#save-box").hide();
    $("#cancel-box").hide();
    $("#text-box").text("My shirona");

    $("#edit-box").on("click", function(){
        $("#edit-box").hide();
        $("#cancel-box").show();
        $("#save-box").show();
    })

    $("#cancel-box").on("click", function(){
        $("#edit-box").show();
        $("#cancel-box").hide();
        $("#save-box").hide();
    })

    $("#save-box").on("click", function(){
        $("#edit-box").show();
        $("#cancel-box").hide();
        $("#save-box").hide();
    })






})
