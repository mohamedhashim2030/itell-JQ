/* 
==============================================================JQ Lessons: Syntax=======================
$(document).ready(function () {
              // Your code Here.$("p").hide();
    $("p").hide();
    $("p").css("color", "#F00");
});

==============================================================JQ Lessons: Events: Click, dbClick,mouseenter,mouseenter =======================

$(document).ready(function () {
    $("button").click(function () {
        $("button").hide(); // use click event 
        $("p").css("color", "#F00");
        $("p").hide();
    }); 
});
$(document).ready(function () {
    $("button").dblclick(function () {
        $(this).hide(); // use click event 
    }); 
});

$(document).ready(function () {
    $("button").mouseenter(function () {
        $("p").css("color", "#F00"); 
    }); 
});

$(document).ready(function () {
    $("button").mouseleave(function () {
        $("p").css("color", "#00F"); 
    }); 
});

$(document).ready(function () {
    $("button").mouseenter(function () {
        $(this).css("color", "#F00"); 
    }); 
});

$(document).ready(function () {
    $("button").mouseleave(function () {
        $(this).css("color", "#00F"); 
    }); 
});

$(document).ready(function () {
    $("button").hover(function () {
        $(this).css("color", "#00F");
        $("p").css("color", "#080"); 
    }); 
});
==============================================================JQ Lessons: Effects: Show, Hide, Toggle, fadein: =======================

$(document).ready(function () {
    $("button").click(function () {
        //$("p").show();
        // $("p").hide(speed: 400Ms, callback funtion);
        //$("p").toggle();
        //$("p").hide(2000);//hide("slow" or "Fast")
       // $("p").hide("slow", function () {$("span").show(); });
        //$("p").hide("slow", alert("Paragraph is now Hidden"));
    });
});



$(document).ready(function () {
    $("button").click(function () {
        //$("p").fadeIn(2000, function () {$("span").fadeIn(1000); });
        //$("p").fadeOut(2000, function () {$("span").fadeOut(1000); });
        //$("p").fadeToggle(2000, function () {$("span").fadeToggle(1000); });
        $("p").fadeTo(500, 0.3, function () {$("span").fadeTo(1000); }); //(speed, opcity, callback)
    });
});
==============================================================JQ Lessons: Effects $(element).effect(Speed,callback)II $(element).animate(CSS Properities, Speed,callback):  SlideDown _ SlideUp _ SlideToggle: =======================


$(document).ready(function () {
    $(".open").click(function () {
        $(".box").slideDown(2000, function () {$(".open").hide(); });
    });
});

$(document).ready(function () {
    $(".open").click(function () {
       // $(".box").slideUp();
        $(".box").slideToggle();
    });
});

animate(CSS Properities, Speed,callback)

$(document).ready(function () {
    //$("div").animate({width: '+ = 150px', right: '100px', height: '- = 300px', opacity: '0.8', borderRadius: '20px'}, 2000, function () {$("span").fadeIn(1000); });
    $("div").animate({width: 'toggle', right: '100px', height: 'toggle', opacity: '0.8', borderRadius: '20px'}, 2000, function () {$("span").fadeIn(1000); });
    $("div").animate({width: 'toggle', height: 'toggle', opacity: '0.5'});
    $("div").animate({width: 'toggle', right: '100px', height: 'toggle', opacity: '0.8', borderRadius: '20px'}, 2000, function () {$("span").fadeIn(1000); });
    $("div").animate({width: 'toggle', height: 'toggle', opacity: '0.5'});
});

$(document).ready(function () {
    $("div").animate({
        top: '30px'
    }, 1000);
  
    $("div").animate({
        width: '600px'
    }, 1000);
    $("div").animate({
        height: '400px'
    }, 1000);
    $("div").animate({
        borderRadius: '40px'
    }, 1000);
    $("div").animate({
        fontSize: '40px'
    }, 1000);
    $("div").fadeOut(3000);
});
=======JQ Lessons: Effects: Stop (Clear Quen:true or false, got to end: true): =======================


$(document).ready(function () {
    $("button").click(function () {
        $("div").stop(true, true);
    });
    
    $("div").animate({
        width: '600px',
        height: '500px'
    }, 5000);
    
    $("div").animate({
        width: '300px',
        height: '100px'
    }, 5000);
    
});
=======JQ Lessons: Effects: Chain: make all effects in one line of code: =======================

$(document).ready(function () {
    $("div")  
        .css({background: '#F00'}) // change background color 
        .slideUp(2000) //  slide up in 2 seconds
        .slideDown(2000) // slide down in 2 sec
        .fadeOut(2000)
        .fadeIn(2000)
        .hide(1000)
        .show(1000)
        .animate({width: '600', height: '600'}, 1000);
});  

// Using Cash bu using var div
$(document).ready(function () {
    var div = $("div");  // to save time  by cashing div in var in memory.
    div.slideUp(2000); //  slide up in 2 seconds
    div.slideDown(2000); // slide down in 2 sec
    div.fadeOut(2000);
    div.fadeIn(2000);
    div.hide(1000);
    div.show(1000);
    div.animate({width: '600', height: '600'}, 1000);
});  

$(document).ready(function () {
    $("div").text();
    alert($("div").text());
});

$(document).ready(function () {
    var div = $("div").html();
    alert(div);
   // $("p").text(div);
    $("p").html(div);
    alert(div);
});


$(document).ready(function () {
    $("button").click(function () {
        $("input").val($("div").text());
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("div.result").text("You Have wrote " + $("input").val()); // set value
        alert("You Have wrote " + $("input").val()); // get value 
       
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("input").val($("a").attr("href")); // replace href by target or class and then check.
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("a").attr("class", "JQuery"); // to set the value of class to be JQuery
        $("a").attr("href", "https://www.yahoo.com"); // to set the value of href to be JQuery
        $("a").attr("target", "_BLNK"); // to set the value of target to be JQuery
    });
});

// to set the value of target, class and href to be JQuery
$(document).ready(function () {
    $("button").click(function () {
        $("a").attr(
            {
                "target": "XX",
                "class": "JQ",
                "href": "www.jquery.com"
            }
        );
        alert($("a").attr("href"));
    });
});
=======JQ Lessons: Effects: append,prepend,before,after =======================

$(document).ready(function () {
    $("div").append("<span><a href='#'>Google</a></span>"); // append
});

$(document).ready(function () {
    $("div").prepend("<span><a href='#'>Google</a></span>"); // prepend
});

$(document).ready(function () {
    $("div").before("<span><a href='#'>Google</a></span>"); // before
});

$(document).ready(function () {
    $("div").after("<span><a href='#'>Google</a></span>"); // after
    $("span.add").click(function () {
        $("input").before("<br/> <input type='file'>"); // after or before or append or prepend
    });
});


=======JQ Lessons: Effects: appendTo,prependTo =======================

    $(document).ready(function () {
    $("<P> Hello Par</p>").appendTo("div"); //appendTo
});

$(document).ready(function () {
    $("<P> Hello Par</p>").prependTo("div"); //prependTo
});

=======JQ Lessons: Effects: Remove,empty  =======================
$(document).ready(function () {
    $("button").click(function () {
        $("div").remove(".JQuery"); // hide: will hide from browser but Remove will delete it from code.
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("div").fadeOut(2000, function () {   // use callback function
            $(this).remove();
        });
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("div").empty(".JQuery"); //empty the class of div
    });
});


$(document).ready(function () {
    $("button").click(function () {
        $("p").remove(" :contains('jquery')"); // use Filter: remove specfic word.
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("p").addClass("custom");
    });
});

$(document).ready(function () {
    $("p").click(function () {
        $(this).addClass("custom br");
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("div.Rovan, p, span").addClass("custom br").removeClass("Rovan Osama");
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("div.Rovan, p, span").removeClass("Rovan Osama");
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("p:first").addClass("custom");
    });
});
=======JQ Lessons: Effects: addclass,Removeclass, toggleClass, filter: first, last, contains,equal, =======================

$(document).ready(function () {
    $("button").click(function () {
        $("p:last").addClass("custom");
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("p:contains('love')").addClass("custom br");
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("p:eq(3)").addClass("custom br");
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("p:eq(2)").toggleClass("custom");
    });
    $("div").click(function () {
        $(this).toggleClass("border");
    });
});
=======JQ Lessons: Effects: CSS: Get and Set, =======================


$(document).ready(function () {
    $("button").click(function () {
        var color = $("p").css("color");
        console.log(color);
        $("input").val(color);
        $("<span></span>", 
            {
                text: color
            }).appendTo("body");
    });
});

$(document).ready(function () {
    $("button").click(function () {
        var color = $("p").css("padding");
        console.log(color);
        $("input").val(color);
        $("<span></span>", 
            {
                text: color
            }).appendTo("body");
    });
});

=======JQ Lessons: Effects: CSS:  Set color value=======================
$(document).ready(function () {
    $("button").click(function () {
        var color = $("input").val();
        $("p").css("color", color);
        
    });
});

$(document).ready(function () {
    var dw = $(document).width();
    console.log(dw);
    if (dw == 1366) {
       // console.log("Conguralation :) You Have A Big Screen");
        $("body").append("<span>Congratulations :)</span>");
    } else {
        console.log("sorry You Don't have a big screen");
    }
});
=======JQ Lessons: HTML Dimensions=======================
$(document).ready(function () {
    var dv = $(".dim").width();
    console.log("Your div width is " + dv + "px");
});

$(document).ready(function () {
    $(".dim").click(function () {
        $(this).width(400);
        $(this).text("Your div width is " + $(this).width() + "px");
        console.log("Your div width is " + $(this).width() + "px");
    });
});


$(document).ready(function () {
    $(".dim").click(function () {
        $(this).width("+=" + 50);
       // $(this).width("-=" + 50);
        $(this).text("Your div width is " + $(this).width() + "px");
        console.log("Your div width is " + $(this).width() + "px");
    });
});
=======JQ Lessons: Traversing - Parent _ Parents _ ParentsUntil=======================
$(document).ready(function () {
    var x = $("span").parent();
    console.log(x);
});

$(document).ready(function () {
    $("span").parent().css("border","5px solid #00F");
});
$(document).ready(function () {
    $("div.Top").parent().css("border","5px solid #00F");
});

$(document).ready(function () {
    $("section").parent().css("border","5px solid #00F");
});


$(document).ready(function () {
    $("span").parent().css(
        {
            border: '3px solid #00F',
            padding: '20px',
            width: '80%',
            borderRadius: '10px'
            
        }
    );
});

$(document).ready(function () {
    $("span").parents().css(
        {
            border: '3px solid #00F',
            padding: '20px',
            width: '80%',
            borderRadius: '10px'
            
        }
    );
});

$(document).ready(function () {
    $("span").parents(".Top").css(
        {
            border: '3px solid #00F',
            padding: '20px',
            width: '80%',
            borderRadius: '10px'
            
        }
    );
});

$(document).ready(function () {
    $("span").parentsUntil(".test").css(
        {
            border: '3px solid #00F',
            padding: '20px',
            width: '80%',
            borderRadius: '10px'
            
        }
    );
});

$(document).ready(function () {
    $("span").parentsUntil(".Top").fadeOut(2000);
});
=======JQ Lessons: Traversing - Children _ Find=======================
$(document).ready(function () {
   
    console.log($(".Top").children());
});
    
$(document).ready(function () {
    $("P").children().css("border","5px solid #00F");
});

$(document).ready(function () {
    $("section").find("span").css("border","5px solid #00F");
});

$(document).ready(function () {
    $("section").find("*").css("border","5px solid #00F");
});
  =======JQ Lessons: Traversing - Siblings _ Next _ Previous - NextUntil Nextall=======================

$(document).ready(function () {
    $("div:contains('Jquery')").siblings().css("border","4px solid #00F");
});
   
$(document).ready(function () {
    $("div:contains('Jquery')").siblings().slideUp(2000);
});

$(document).ready(function () {
    $("div").click(function () {
        $(this).siblings().slideUp(2000);
    });
});

$(document).ready(function () {
    $("div").click(function () {
        $(this).siblings(".Select").fadeOut(2000);
    });
});
 
$(document).ready(function () {
    $("div").click(function () {
        $(this).next().fadeOut(2000);
    });
});


$(document).ready(function () {
    $("div").click(function () {
        $(this).next().css("background","#F00");
    });
});

$(document).ready(function () {
    $("div").click(function () {
        $(this).next().slideToggle(2000);
    });
});

$(document).ready(function () {
    $("div").click(function () {
        $(this).prev().slideToggle(2000);
    });
  
$(document).ready(function () {
    $("div,p").click(function () {
        $(this).prev().css("background","#F00");
    });
});

$(document).ready(function () {
    $("div,p").click(function () {
        $(this).nextAll("div").css("background","#F00");
    });
});

$(document).ready(function () {
    $("div,p").click(function () {
        $(this).nextAll("p").css("background","#F00");
    });
});

$(document).ready(function () {
    $("div,p").click(function () {
        $(this).prevAll().css("background","#F00");
    });
});

$(document).ready(function () {
    $("div,p").click(function () {
        $(this).nextUntil("p").css("background","#F00");
    });
});

  =======JQ Lessons: Traversing - First _ Last _ Eq _ Filter _ Not=======================

$(document).ready(function () {
    $("div").first().css("border","3px solid #F00");
});

$(document).ready(function () {
    $("div").first().next().css("border","3px solid #F00");
});

$(document).ready(function () {
    $("div").last().prevAll().css("border","3px solid #F00");
});

$(document).ready(function () {
    $("div").eq(0).css("border","3px solid #F00");
});
 
$(document).ready(function () {
    $("div").filter(".test").prevAll().css("border","3px solid #F00"); // taking element and class 
});

$(document).ready(function () {
    $("div").filter($(".test")).css("border","3px solid #F00"); // taking element and Slector and JQ Object
  });

$(document).ready(function () {
    $("div").filter(function (Rovan) {return Rovan === 1}).next().css("border","3px solid #F00"); //filter accept for taking element and class Slectorss and JQ Object and functions
});


$(document).ready(function () {
    $("div").not($(".test")).css("border","3px solid #F00"); // Not accept for taking element and class Slectorss and JQ Object and functions
  });

$(document).ready(function () {
    $("div").not(function (Rovan) {return Rovan === 1}).css("border","3px solid #F00"); 
});
  =======JQ Lessons:  Selectors Reference: * all =======================

$(document).ready(function () {
    $("*").click(function () {
        $(this).fadeOut(500);
    });
});

$(document).ready(function () {
    $("P").click(function () {
        $(this).fadeOut(500);
    });
});

$(document).ready(function () {
    $("body *").css("border", "2px solid #00F");
});
 =======JQ Lessons:  Selectors Reference: Class=======================
$(document).ready(function () {
    $(".rovan,.mhmd").css("border", "2px solid #00F");
});
 =======JQ Lessons:  Selectors Reference: ID=======================

$(document).ready(function () {
    $("#rovan, .mhmd").css("border", "2px solid #00F");
});
=======JQ Lessons:  Selectors Reference: Grouping=======================

$(document).ready(function () {
    $("div:last, P:first,aside:last,.rovan").css("border", "2px solid #00F");
});

=======JQ Lessons:  Selectors Reference: Even, Odd=======================

$(document).ready(function () {
    $("div:odd,p:even,aside:odd").css("border", "2px solid #00F");
});
=======JQ Lessons:  Selectors Reference: parent-child=======================

$(document).ready(function () {
    $("p:first-child").css("border", "2px solid #00F");
});

$(document).ready(function () {
    $("p:last-child").css("border", "2px solid #00F");
});

$(document).ready(function () {
    $("p:last,div:first").css("border", "2px solid #00F");
});

$(document).ready(function () {
    $("p:first-of-type").css("border", "2px solid #00F");
});

$(document).ready(function () {
    $("p:last-of-type").css("border", "2px solid #00F");
});
=======JQ Lessons:  Selectors Reference: nth-child: count from start to end =======================
$(document).ready(function () {
    $("p:nth-child(2)").css("border", "2px solid #F00");
});

$(document).ready(function () {
    $("p:nth-child(3)").next().css("border", "2px solid #F00");
});
=======JQ Lessons:  Selectors Reference: nth-last-child: count from end to start =======================
$(document).ready(function () {
    $("p:nth-last-child(3)").next().css("border", "2px solid #F00");
});
=======JQ Lessons:  Selectors Reference: nth-of-type =======================
$(document).ready(function () {
    $("p:nth-of-type(2)").css("border", "2px solid #F00");
});
=======JQ Lessons:  Selectors Reference: :nth-last-of-type =======================
$(document).ready(function () {
    $("p:nth-last-of-type(1)").css("border", "2px solid #F00");
});

$(document).ready(function () {
    $("p:only-child").css("border", "4px solid #F00");
});

$(document).ready(function () {
    $("p:only-of-type").css("border", "4px solid #F00");
});
=======JQ Lessons:  Selectors Reference: :div > p dirct child =======================
$(document).ready(function () {
    $("div > P").css("border", "4px solid #F00");
});
=======JQ Lessons:  Selectors Reference: :div p dirct child and any other child=======================

$(document).ready(function () {
    $("div p").css("border", "4px solid #F00");
});

$(document).ready(function () {
    $("p + div").css("border", "4px solid #F00");
});
=======JQ Lessons:  Selectors Reference: :p ~ div =======================
$(document).ready(function () {
    $("p ~ div").css("border", "4px solid #F00");
});
=======JQ Lessons:  Selectors Reference: :Equal =======================
$(document).ready(function () {
    $("ul li:eq(0)").css("border", "4px solid #F00");
});
=======JQ Lessons:  Selectors Reference: :greater than =======================
$(document).ready(function () {
    $("ul li:gt(1)").css("border", "4px solid #F00"); \\ greater than 1
});
=======JQ Lessons:  Selectors Reference: :less than =======================
$(document).ready(function () {
    $("ul li:lt(2)").css("border", "4px solid #F00"); // greater than 1
});
=======JQ Lessons:  Selectors Reference: :Not Contains =======================

$(document).ready(function () {
    $("ul li:not(:contains('2'))").css("border", "4px solid #F00"); // greater than 1
});

=======JQ Lessons:  Selectors Reference: :animate =======================
$(document).ready(function () {
    $("div").animate({width: '500px'}, 8000);
    $("div").animate({height: '500px'}, 8000);
    $("h1").click(function () {
        $(":animated").css({background: '#F00', color: 'FFF'});
    });
    //$(":animated").css("background", "#00F");
    //$(":header").css("border", "4px solid #F00"); // greater than 1
});
=======JQ Lessons:  Selectors Reference: :focus =======================
$(document).ready(function () {
    $("input").focus();
    //$(":focus").css("padding", "20px");
});
=======JQ Lessons:  Selectors Reference: :has selector =======================

$(document).ready(function () {
    $("div:has('p')").css("color", "#080");
});
=======JQ Lessons:  Selectors Reference: :empty & parent & hidden & Visible=======================
$(document).ready(function () {
    $(":parent").css("border", "1px solid #F00");
});

$(document).ready(function () {
    $(":empty").css("background", "#080");
});
=======JQ Lessons:  Selectors Reference: :root,  lang =======================
$(document).ready(function () {
    $(":root").addClass("js");
});

$(document).ready(function () {
    $(":root").css("background", "green");
});

$(document).ready(function () {
    $("img")// selector
    .css("border-radius", "50%");// effect
});

$(document).ready(function () {
    $("[title]").css("border-radius", "50%");
});
=======JQ Lessons:  Selectors Reference:Attrubutes: *,!,~,^,... =======================

$(document).ready(function () {
   // $("[alt='Image2']").css("border-radius", "50%");
    //$("p[lang!='ar']").css("color", "#00F");
   // $("img[alt!='Image3'],div[lang!='ar'],p[lang='en']").fadeOut(3000);
    //$("img[alt*='My']").css("border-radius", "50%");
    //$("img[alt*='1']").css("border-radius", "50%");
   // $("img[alt*='Your']").css("border-radius", "50%"); //search for all words
   // $("img[alt~='your']").css("border-radius", "50%"); // search for specific word 
    $("img[alt^='Welcome']").css("border-radius", "50%"); // ^ search for word starting from this word Welcome
});
=======JQ Lessons:  Selectors Reference::  disabled,enabled,checked,selected=======================
$(document).ready(function () {
    $(":input").css("display", "block");
    //$(":disabled").fadeOut(2500);
    //$(":enabled").fadeOut(2500);
    //$(":checked").fadeOut(2500);
    var x;
    x = $(":selected").val();
    console.log(x);
});
=======JQ Lessons:  Events Reference - Bind()=======================
//single event with Bind 
$(document).ready(function () {
    $(".normal").bind("click", function () {
        $(this).hide();  
    });
});

//Multi event with Bind
$(document).ready(function () {
    $(".normal").bind("mouseenter mouseleave", function () {
        $(this).toggleClass("color");  
    });
});

// Enent Map
$(document).ready(function () {
    $(".map").bind({
        click: function () { $(this).text("You Have Clicked Me"); },
        dblclick: function () {$(this).text("You Have Double Clicked Me"); },
        mouseenter: function () {$(this).text("You Have Mouse Me One"); },
        mouseleave: function () {$(this).text("The Mouse has Gone"); }
    });
});

// Custom Event to hide the custom event via parameter
$(document).ready(function () {
    $(".custom").bind("myCustomEvent", function (event) {
        $(this).hide();
    });
    $("button").click(function () {
        $(".custom").trigger("myCustomEvent");
    });
});

// Custom Event to change the text of event viia parameter
$(document).ready(function () {
    $(".custom").bind("myCustomEvent", function (event) {
        $(this).text("Hello");
    });
    $("button").click(function () {
        $(".custom").trigger("myCustomEvent");
    });
});
// Custom Event with  myCustomEvent parameter
$(document).ready(function () {
    $(".custom").bind("myCustomEvent", function (event, myName, myAge) {
        $(this).text("Hello " + myName + " Your Age is : " + myAge + " Year");
    });
    $("button").click(function () {
        $(".custom").trigger("myCustomEvent", ["Rovan", "30"]);
    });
});

=======JQ Lessons:  Events Reference - Bind() usiing parameters=======================
// Custom Event with design
$(document).ready(function () {
    $(".custom-event").bind("myCustomDesign", function (event, myHeight, myWidth, myBackGround, myColor) {
        $(this).height(myHeight).width(myWidth);
        $(this).css({
            backgroundColor: myBackGround,
            color: myColor
        });
    });
    $("a").click(function () {
        $(".custom-event").trigger("myCustomDesign", ["200px", "550px", "red", "#FFF"]);
    });
});
=======JQ Lessons:  Events Reference - Live & Delgate=======================
// the function is not working as it's need jq version less than 1.7
//As of jQuery version 1.7, the on() method is the preferred method for attaching event handlers for selected elements
$(document).ready(function () {
    "use strict"; // For Js Lint Errors
    $(".normal").live("click", function () {
        $(this).hide();
    });
    
    $("button").live("click", function () {
        $("<p>This is created paragraph</P>").insertAfter($(this));  
    });
});


$(document).ready(function () {
    "use strict"; // For Js Lint Errors
    $("body").delgate(".normal", click", function () {
        $(this).hide();
    });
    
    $("html").delegate("button", click", function () {
        $("<p>This is created paragraph</P>").insertAfter($(this));  
    });
});

=======JQ Lessons:  Events Reference - on: (event, function, Map, child selector is optional)=======================


$(document).ready(function () {
    "use strict"; // For Js Lint Errors
    $("body").on("click", ".normal", function () {
        $(this).hide();
    });
 $("button").on("click", function () {
        $("<p>This is created paragraph</P>").insertAfter($(this));  
    });
});

// Single event hadler with on
$(document).ready(function () {
    "use strict"; // For Js Lint Errors
    $(".normal").on("click", function () {
        $(this).hide();
    });
});
// multi event hadler with on 
$(document).ready(function () {
    "use strict"; // For Js Lint Errors
    $("body").on("mouseenter mouseleave", ".normal", function () {
        $(this).toggleClass("color");
    });
});

--------------------------------------
// custom event with on
$(document).ready(function () {
    "use strict"; // For Js Lint Errors
    $("body").on("mouseenter mouseleave", ".normal", function () {
        $(this).toggleClass("color");
    });
    
    $(".custom").on("myCustom", function (event, myHight, myWidth, myBackg, myColor) {
        $(this).height(myHight).width(myWidth);
        $(this).css({
            backgroundColor: myBackg,
            color: myColor
        });
    });
    $("button").on("click", function () {
        $(".custom").trigger("myCustom", ["200px", "400px", "#00F", "#FFF"]);
    });
});
//  event Map with on

$(document).ready(function () {
    "use strict";
    $(".map").on({
        click: function () { $(this).text("You Have Clicked Me"); },
        dblclick: function () {$(this).text("You Have Double Clicked Me"); },
        mouseenter: function () {$(this).text("You Have Mouse Me One"); },
        mouseleave: function () {$(this).text("The Mouse has Gone"); }
    });
    $("button").click(function () {
        $("<p>This is new paragraph</p>").insertAfter($(this)); 
    });
    $("p").click(function () {
        $(this).fadeOut(1000); // not disappeared as the click event not supported, so we will use on 
    });
});

$(document).ready(function () {
    "use strict";
    $("button").on("click", function () {
        $("<p>This is new paragraph</p>").insertAfter($(this));  
    });
    $("body").on("click", "p", function () {
        $(this).fadeOut(1000);  
    });
});
=======JQ Lessons:  Events Reference - PreventDefault, isDefaultPrevented=======================

$(function () {
    "use strict";
    $("a").on("click", function (e) {
        e.preventDefault(); 
        if (e.isDefaultPrevented()) {
            $("div").text("The Line will Not Working");
        } else {
            $("div").text("The Link Will Go To Google");
        }
    });
});

$(document).ready(function () {
    "use strict";
    $("input").on("keydown", function () {
        $("div").text("You Are Going To Click On Keyboard Key");
    });
    
    $("input").on("keypress", function () {
        $("div").text("You Are Going To Pressed The Keyboard Key");
    });
    
    $("input").on("keyup", function () {
        $("div").text("You Are Far Away on the Keyboard Key");
    });
});


$(document).ready(function () {
    "use strict";
    $("input").on("keyup", function () {
        $("div h3").text($(this).val());
    });
    
    $("textarea").on("keyup", function () {
        $("div p").text($(this).val());
    });
});
=======JQ Lessons:  Events Reference - change-Focus - Blur- one=======================

$(document).ready(function () {
    "use strict";
    $("input").on("change", function () {
        $("div h3").text($(this).val());
    });
    
    $("textarea").on("change", function () {
        $("div p").text($(this).val());
    });
    $("select").on("change", function () {
        $("div").text("You Choosed Your Car " + $(this).val());
    });
});
=======JQ Lessons:  Events Reference - select=======================

$(function () {
    "use strict";
    $("textarea").on("click", function () {
        $(this).select(function () {
            $(this).after("Text Copied");
        });
    });
});
=======JQ Lessons:  Events Reference - resize======================
$(function () {
    "use strict";
    $("section").height($(window).height()+ 300);
    $(window).on("resize", function () {
        var hei = $(window).height() + 300,
            wid = $(window).width();
        console.log(hei, wid);
        if (wid > 1000) {
            console.log("Your Screen is Bigger Than 1000");
        } else {
            console.log("Your screen is less than 1000");
        }
    });
});
=======JQ Lessons:  Events Reference - resize======================

$(function () {
    "use strict";
    $("window").on("scroll", function () {
        var sc = $(window).scrollTop();
        console.log(sc);
        if (sc > 1000) {
            console.log("Your Scrolltop is more than 1000");   
        } else {
            console.log("Less than 1000");
        }
    });
});
=======JQ Lessons:  Events Reference -mousemove: PageX and PageY======================
$(document).ready(function () {
    "use strict";
    $("html").mousemove(function (e) {
        $("span").text("X-Axis " + e.pageX + "Y-Axis " + e.pageY);
    });
});
=======JQ Lessons:  Events Reference - submit======================
$(document).ready(function () {
    "use strict";
    $("form").submit(function (e) {
        if ($("input:first").val() === "confirm") {
            $("span").text("Word Is Ok").show();
            return;
        }
        $("span").text("Word Is Not Correct").show().fadeOut(2000);
        e.preventDefault();
    });
});
=======JQ Lessons:  Events Reference - delay======================

$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("span").text("Hello JQ and I will Study it very well").fadeIn(1000).delay(5000).fadeOut(1000);
    });
});
=======JQ Lessons:  Events Reference - clone======================
$(document).ready(function () {
    "use strict";
    $("button").on('click', function () {
        $(".main").clone(true).appendTo("body");
    });
    $(".main").click(function () {
        $(this).css("color", "#F00");
    });
});

$(document).ready(function () {
    "use strict";
    var ele = $("div");
    $("#remove").on('click', function () {
        ele.remove();
    });
    $("#add").on('click', function () {
        $("body").prepend(ele);
    });
    ele.on("click", function () {
        $(this).css("color", "#00F");
    });
});


$(document).ready(function () {
    "use strict";
    var ele = $("div");
    $("#remove").on('click', function () {
        ele.detach();
    });
    $("#add").on('click', function () {
        $("body").prepend(ele);
    });
    ele.on("click", function () {
        $(this).css("color", "#00F");
    });
});

=======JQ Lessons:  Events Reference - hasClass======================
$(document).ready(function () {
    "use strict";
    $("li").each(function () {
        if ($(this).hasClass('active')) {
            $(this).css('color', '#F00');
        }
    });
});
$(document).ready(function () {
    "use strict";
    $("li").each(function () {
        if ($(this).hasClass('active')) {
            $(this).parent().css('color', '#F00');
        }
    });
});
=======JQ Lessons:  Events Reference - offset======================

$(document).ready(function () {
    "use strict";
    console.log($("div").offset());
    $("div").offset({
        left: 200,
        top: 200
    });
    console.log($("div").offset());
});

$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        console.log("Scroll Top " + $(this).scrollTop());
        console.log("Div Offset Top " + $('div').offset().top);
        var scrolling = $(this).scrollTop(),
            divoffset = $('div').offset().top;
        if ( scrolling >= divoffset) {
            $('div').css("background-color", "#00F");
        }
    });
});
=======JQ Lessons:  Events Reference - position======================

$(document).ready(function () {
    "use strict";
    console.log($("div").position());
    $("div").offset({
        left: 200,
        top: 200
    });
    console.log($("div").position());
});

=======JQ Lessons:  Events Reference - attr & prop======================
$(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("input").attr("disabled");
        console.log($("input").attr("disabled"));
    });
});

 $(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("input").prop("disabled");
        console.log($("input").prop("disabled"));
    });
});

 $(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("input").prop("disabled", "disabled");
        console.log($("input").prop("disabled"));
    });
});

 $(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("input").prop("disabled", "true");
        console.log($("input").prop("disabled"));
    });
});

 $(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("input").prop({
            "disabled": true,
            "name": "myField",
            "id": "#Test"
        });
        console.log($("input").prop("disabled")); // get the value of attr
    });
});

 $(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("input").prop({
            "disabled": true,
            "name": "myField",
            "id": "#Test"
        });
        console.log($("input").prop("id")); // get the value of attr
    });
});

 $(document).ready(function () {
    "use strict";
    $("button").click(function () {
        $("input").prop({
            "disabled": true,
            "name": "myField",
            "id": "#Test"
        });
        console.log($("input").prop("name"));// get the value of attr
    });
});
=======JQ Lessons:  Events Reference - replaceWith======================

 $(document).ready(function () {
    "use strict";
    $("div").replaceWith("Hello JQ");
});

$(document).ready(function () {
    $("div").click(function () {
        $(this).replaceWith("<input type='text' value='" + $(this).text() + "'>");
        $("button").fadeIn();
    });
     
    $("button").click(function () {
        $("input").replaceWith("<div>" + $('input').val() + "</div>");
        $("button").fadeOut();
    });
});
 
=======JQ Lessons:  Events Reference - scroll======================
$(document).ready(function () {
    $(window).scroll(function () {
        console.log("Windows Scroll Top = " + $(this).scrollTop()); 
    });
    $(window).scrollTop(800);
});

$(document).ready(function () {
    $("button").click(function () {
         $(window).scrollTop(0);
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $(window).scrollTop($(".text-lesson").offset().top);
    });
});
=======JQ Lessons:  Events Reference - wrap & unwrap======================

$(document).ready(function () {
    $("#add").click(function () {
        $("span").wrap("<div></div>");
    });
});

$(document).ready(function () {
    $("#Remove").click(function () {
        $("span").unwrap();
    });
});
=======JQ Lessons:  Events Reference - each======================
$(document).ready(function () {
    $("li").click(function () { // You must click on Li to know where's the li
    
        if ($(this).hasClass("test")) {
            $(this).css("color", "#00F");
        }
    });
});
=======JQ Lessons:  Events Reference - has & hasclass======================
$(document).ready(function () {
    $("li").each(function () { // You don't need to click on Li to know where's the li
    
        if ($(this).hasClass("test")) {
            $(this).css("color", "#00F");
        }
    });
});

$(document).ready(function () {
    $("p,h2,div").has("span", "strong").css("color", "#F00");
});
=======JQ Lessons:  Events Reference - Is ======================
$(document).ready(function () {
    $("span").click(function () {
        if ($(this).parent().is("div, p")) {
            console.log("Yes this Is Div or P");
        } else {
            console.log("No, this Is Not Div");
        }
    });
});

$(document).ready(function () {
    $("span").click(function () {
        if ($(this).is(":first-child, :last-child")) {
            console.log("Yes this Is first-span or last-span");
        } else {
            console.log("No, this Is Not first-child");
        }
    });
});


$(document).ready(function () {
    $("div").find("span").css("color", "#00F").end().find("strong").css("color", "#F00").end().css("font-weight", "bold"); 
});
*/
