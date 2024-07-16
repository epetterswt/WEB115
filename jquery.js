$("document").ready(function() {
    $("#content").append("<p>The page just loaded</p>")
    $("h1").css("text-align", "center")
    $("main").css("text-align", "center")

    $("#button1").click(function () {
        $("body").css("background-color", "black")
        $("body").css("color", "white")
    })

    $("#button1").dblclick(function () {
        $("body").css("background-color", "white")
        $("body").css("color", "black")
    })

    $("#button2").click(function () {
        $("body").css("font-size", "40pt")
    })

    $("#button2").dblclick(function () {
        $("body").css("font-size", "12pt")
    })

    $("p").hide()
    $("p").show()
})

