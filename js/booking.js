const email = document.getElementById("email");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const country = document.getElementById("country");
const adress = document.getElementById("adress");
const adressNr = document.getElementById("adress-nr");
const phone = document.getElementyById("phone");
const zip = document.getElementById("zip");
const city = document.getElementById("city");

function preserveResult()
{
    validateForm();
    validateEmail();

    sessionStorage.setItem("emailAdress", email.value);
    sessionStorage.setItem("fNAme", firstName.value);
    sessionStorage.setItem("lName", lastName.value);
    sessionStorage.setItem("selectedCountry", country.value);
    sessionStorage.setItem("streetAdress", adress.value);
    sessionStorage.setItem("streetAdressNr", adressNr.value);
    sessionStorage.setItem("phoneNr", phone.value);
    sessionStorage.setItem("zipCode", zip.value);
    sessionStorage.setItem("cityName", city.value);
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

        if (document.getElementById("adress").value.length < 3)
            {
                event.preventDefault();
                document.getElementById("adressIncorrect").innerHTML = "The adress is too short";
            }

        if (document.getElementById("adress").value.length > 100)
            {
                event.preventDefault();
                document.getElementById("adressIncorrect").innerHTML = "The adress is too short";
            }

        if (document.getElementById("adress-nr").value.length < 1)
            {
                event.preventDefault();
                document.getElementById("adressNrIncorrect").innerHTML = "Please enter a street number";
            }

        if (document.getElementById("adress-nr").value.length > 20)
            {
                event.preventDefault();
                document.getElementById("adressNrIncorrect").innerHTML = "Your adress number is too long";
            }

        //if (document.getElementById("phone").value.length < 7)
            //{
                //event.preventDefault();
                //document.getElementById("phoneIncorrect").innerHTML = "The number is to short. Please check if the country prefix has been added";
            //}

        //if (document.getElementById("phone").value.length > 16)
            //{
                //event.preventDefault();
                //document.getElementById("phoneIncorrect").innerHTML = "The number is too long. Please write the number using only numbers and using the country prefix";
            //}

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

