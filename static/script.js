$(document).ready(function() {

    var clicked = false;

    $("#parts").click(function () {
        if (!clicked) {
            $("#l1l2").animate({left: -320}, "slow");
            $("#l3l4").animate({left: 320}, "slow");
            $(".square").css({display: "inline"}).animate({width: 450, height: 450, marginTop: "-225px", marginLeft: "-225px"}, "slow");
            clicked = true;
        }
        else {
            $("#l1l2").animate({left: 0}, "slow");
            $("#l3l4").animate({left: 0}, "slow");
            $(".square").animate(
                {width: 0, height: 0, marginTop: "0px", marginLeft: "0px"}, 
                "slow", 
                function() {$(".square").css({display: "none"})}
            );
            clicked = false;
        }
        
    });

    var is_number = false;

    $("#numbers").click(function() {
        if (!is_number) {
            $("#numbers").css({color: "rgb(249, 170, 51)", backgroundColor: "rgb(38, 50, 56)"});
            $("#number-input").val("True");
            is_number = true;
        }
        else {
            $("#numbers").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#number-input").val("False");
            is_number = false;
        }
    });

    var is_special = false;

    $("#specials").click(function() {
        if (!is_special) {
            $("#specials").css({color: "rgb(249, 170, 51)", backgroundColor: "rgb(38, 50, 56)"});
            $("#special-input").val("True");
            is_special = true;
        }
        else {
            $("#specials").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#special-input").val("False");
            is_special = false;
        }
    });

    var is_bletter = false;

    $("#bletters").click(function() {
        if (!is_bletter) {
            $("#bletters").css({color: "rgb(249, 170, 51)", backgroundColor: "rgb(38, 50, 56)"});
            $("#bletter-input").val("True");
            is_bletter = true;
        }
        else {
            $("#bletters").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#bletter-input").val("False");
            is_bletter = false;
        }
    });

    var is_sletter = false;

    $("#sletters").click(function() {
        if (!is_sletter) {
            $("#sletters").css({color: "rgb(249, 170, 51)", backgroundColor: "rgb(38, 50, 56)"});
            $("#sletter-input").val("True");
            is_sletter = true;
        }
        else {
            $("#sletters").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#sletter-input").val("False");
            is_sletter = false;
        }
    });

    document.getElementById("length").addEventListener("input", function() {
        var length = document.getElementById("length");
        var value = length.value;
        var error = document.getElementById("resultnderror");
        error.innerHTML = "";
        console.log(value);
        if (value != "") {
            length.style.color = "rgb(249, 170, 51)";
            length.style.backgroundColor = "rgb(38, 50, 56)";
        }
        else {
            length.style.color = "rgb(1, 141, 132)";
            length.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    });

    $("#pform").submit(function(e) {
        if (!$("#length").val() || $("#length").val() == "" || $("#length").val() < 6 || $("#length").val() > 25) {
            $("#resultnderror").html("<span><strong>Password length must be between 5 and 25!</strong></span>");
            $("#length").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#length").val(false);
        }
        else {
            $.ajax({
                type: $("#pform").attr("method"),
                url: $("#pform").attr("action"),
                data: $("#pform").serialize(),
                dataType: "text",
                success: function(data) {
                    new_data = "<span style='color: rgb(249, 170, 51)'><strong>" + data + "</strong></span>"
                    $("#resultnderror").html("Password: " + new_data);
                }
            });
            
            $("#numbers").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#number-input").val("False");
            is_number = false;
    
            $("#bletters").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#bletter-input").val("False");
            is_bletter = false;
    
            $("#specials").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#special-input").val("False");
            is_special = false;
    
            $("#bletters").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#bletter-input").val("False");
            is_bletter = false;
    
            $("#sletters").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#sletter-input").val("False");
            is_sletter = false;
    
            $("#length").css({color: "rgb(1, 141, 132)", backgroundColor: "rgba(0, 0, 0, 0)"});
            $("#length").val(false);
            
        }
        e.preventDefault();
        return false;
    });

    $("#generate").mouseover(function() {
        $(".wave").css({display: "inline-block"}).animate({width: "100%", height: "100%"}, "fast");
    });

    $("#generate").mouseout(function() {
        $(".wave").css({display: "inline-block"}).animate({width: 0, height: 0}, "fast");
    });

});

