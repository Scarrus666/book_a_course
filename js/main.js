const firstName = getElementById("firstName");
const lastName = getElementById("lastName");
const zip = getElementByID("zip");
const city = getElementById("city")

function preserveResult()
{
    validateForm();

    sessionStorage.setItem("fNAme", firstName.value);
    sessionStorage.setItem("lName", lastName.value);
    sessionStorage.setItem("emailAdress", email.value);
    sessionStorage.setItem("zipCode", zip.value);
    sessionStorage.setItem("cityName", city.value);
    sessionStorage.setItem("quantityNumber", quantity.value);
    sessionStorage.setItem("secretField", secredField.value);
}

function validateForm()
    {
        if (document.getElementById("firstName").value.length < 1)
            {
                // alert("Text zu kurz");
                event.preventDefault();
                document.getElementById("firstNameWrong").innerHTML = "Your name is too short";
            }

        if(document.getElementById("firstName").value.length > 747)
            {
                event.preventDefault();
                document.getElementById("firstNameWrong").innerHTML = "Your name is too long";
            }

        if (document.getElementById("lastName").value.length < 3)
            {
                event.preventDefault();
                document.getElementById("lastNameWrong").innerHTML = "Text too short";
            }

        if (document.getElementById("email").value)

        // if (document.getElementById("zip").value.length < 4 || document.getElementById("zip").value.length > 10)
        //    {                                   // .value.length is for string length
        //        event.preventDefault();
        //        document.getElementById("zipIncorrect").innerHTML = "Zip Code Incorrect";
        //    }

        if (document.getElementById("zip").value.length < 4)
            {
                event.preventDefault();
                document.getElementById("zipIncorrect").innerHTML = "Your ZIP code is too short";
            }

        if (document.getElementById("zip").value.length > 5)
            {
                event.preventDefault();
                document.getElementById("zipIncorrect").innerHTML = "Your ZIP code is too long";
            }

        if (document.getElementById("city").value.length < 1 || document.getElementById("city").value.length > 87)
            {
                event.preventDefault();
                document.getElementById("cityIncorrect").innerHTML = "Your Input is Incorrect";
            }
    }
