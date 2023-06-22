function validateForm()
    {
        if (document.getElementById("firstName").value.length < 3)
            {
                // alert("Text zu kurz");
                event.preventDefault();
                document.getElementById("firstNameShort").innerHTML = "Text too short";
            }

        if (document.getElementById("lastName").value.length < 3)
            {
                event.preventDefault();
                document.getElementById("lastNameShort").innerHTML = "Text too short";
            }

        if (document.getElementById("zip").value.length < 4 || document.getElementById("zip").value.length > 10)
            {                                   // .value.length is for string length
                event.preventDefault();
                document.getElementById("zipIncorrect").innerHTML = "Zip Code Incorrect";
            }

        if (document.getElementById("city").value.length < 1 || document.getElementById("city").value.length > 87)
            {
                event.preventDefault();
                document.getElementById("cityIncorrect").innerHTML = "Your Input is Incorrect";
            }

        if (document.getElementById("quantity").value < 1) // .value is for number quantity
            {
                event.preventDefault();
                document.getElementById("quantityIncorrect").innerHTML = "Please buy at least one ticket";
            }

        else if (document.getElementById("quantity").value > 5)
            {
                event.preventDefault();
                document.getElementById("quantityIncorrect").innerHTML = "We are sorry but you cannot buy more than 5 tickets"
            }
    }

    function preserveResult()
    {
        sessionStorage.setItem("fNAme", firstName.value);
        sessionStorage.setItem("lName", lastName.value);
        sessionStorage.setItem("emailAdress", email.value);
        sessionStorage.setItem("zipCode", zip.value);
        sessionStorage.setItem("cityName", city.value);
        sessionStorage.setItem("quantityNumber", quantity.value);
        sessionStorage.setItem("secretField", secredField.value);
    }