
//javascript for form validation and to submit to friends.js
$("submit").on("click", function () {
    function validateform() {
        let isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") isValid = false;
        });
        $(".chosen-select").each(function () {
            if ($(this).val() === "") isValid = false;
        });
        return isValid;
    }
    if (validateform() === true) {
        let userData = {
            name: $("#name").val(),
            photo: $("#photo").val,
            scores: [
                $("q1").val(),
                $("q2").val(),
                $("q3").val(),
                $("q4").val(),
                $("q5").val(),
                $("q6").val(),
                $("q7").val(),
                $("q8").val(),
                $("q9").val(),
                $("q10").val(),
            ]
        };

        $.post("../data/friends", userData, function (data) {
           
        });

                                                    }
});