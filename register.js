$(function () {

    var basic = [{
        "email": "",
        "password": ""
    }];

    $.getJSON("data.json", function (data) {

        function addStyle(auxValidity) {
            if (auxValidity) {
                document.getElementById("email").classList.add("success");
                document.getElementById("email").classList.remove("error");
            } else if (!auxValidity) {
                document.getElementById("email").classList.add("error");
                document.getElementById("email").classList.remove("success");
            }
        }

        function saveValueOnArray(auxValue, auxValidity, auxPassword, auxPValidity) {
            if (auxValidity && auxPValidity) {
                var auxLength = data.memb.length;
                data.memb[auxLength] = Object.create(basic[0]);
                data.memb[auxLength].email = auxValue;
                data.memb[auxLength].password = auxPassword;
            }
        }

        function checkParameters() {
            var auxValidity = document.getElementById("email").checkValidity();
            var auxValue = document.getElementById("email").value;
            var auxPValidity = document.getElementById("pw").checkValidity();
            var auxPassword = document.getElementById("pw").value;
            console.log(auxValidity);
            console.log(auxValue);
            console.log(auxPValidity);
            console.log(auxPassword);
            addStyle(auxValidity);
            saveValueOnArray(auxValue, auxValidity, auxPassword, auxPValidity);
        }

        document.getElementById("clickMe").onclick = checkParameters;


    });

});
