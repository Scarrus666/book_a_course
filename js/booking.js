const email = document.getElementById("email");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const city = document.getElementById("city");

function preserveResult()
{
    validateForm();
    validateEmail();

    sessionStorage.setItem("fNAme", firstName.value);
    sessionStorage.setItem("lName", lastName.value);
    sessionStorage.setItem("selectedCountry", country.value);
    sessionStorage.setItem("zipCode", zip.value);
    sessionStorage.setItem("cityName", city.value);
    sessionStorage.setItem("emailAdress", email.value);
}

function validateForm()
    {
        if (document.getElementById("firstName").value.length < 1)
            {
                // alert("Text zu kurz");
                event.preventDefault();
                document.getElementById("firstNameWrong").innerHTML = "Please enter a real name";
            }

        if(document.getElementById("firstName").value.length > 747)
            {
                event.preventDefault();
                document.getElementById("firstNameWrong").innerHTML = "Please enter a real name";
            }

        if (document.getElementById("lastName").value.length < 3)
            {
                event.preventDefault();
                document.getElementById("lastNameWrong").innerHTML = "Please enter a real name";
            }

        if (document.getElementById("lastName").value.length > 666)
            {
                event.preventDefault();
                document.getElementById("lastNameWrong").innerHTML = "Please enter a real name";
            }


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

function validateEmail() 
    {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var email = document.getElementById("email");

      
        if (email.value.match(validRegex)) 
            {
                null;
            } 
            
        else   
            {
                event.preventDefault();
                document.getElementById("email-wrong").innerHTML ="Please input a correct email adress";
            }     
      }
