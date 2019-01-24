$(() => {
    $(document).on("click", "#pg1", function() {
        $("#pg1").addClass("hidden");
        $("#pg2").removeClass("hidden");
    })

    $(document).on("click", "#pg2", function() {
        $("#pg2").addClass("hidden");
        $("#pg3").removeClass("hidden");
    })

    $(document).on("click", "#pg3", function() {
        $("#pg3").addClass("hidden");
        $("#pg4").removeClass("hidden");
    })

    $(document).on("click", "#pg4", function() {
        $("#pg4").addClass("hidden");
        $("#pg1").removeClass("hidden");
    })
});