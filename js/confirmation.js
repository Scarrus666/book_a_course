let firstName = sessionStorage.getItem("fNAme");
let lastName = sessionStorage.getItem("lName");
let email = sessionStorage.getItem("emailAdress")
let country = sessionStorage.getItem("selectedCountry");
let adress = sessionStorage.getItem("streetAdress");
let adressNr = sessionStorage.getItem("streetAdressNr");
let phone = sessionStorage.getItem("phoneNr");
let zip = sessionStorage.getItem("zipCode");
let city = sessionStorage.getItem("cityName");

let resultFirstName = "Name: " + firstName;
let resultLastName = "Surname: " + lastName;
let resultEmail = "Email: " + email;
let resultCountry = "Country: " + country;
let resultAdress = "Adress: " + adress;
let resultAdressNr = "Street Number: " + adressNr;
let resultPhone = "Your Phone Number: " + phone;
let resultZip = "Zip Code: " + zip;
let resultCity = "City: " + city;


document.getElementById("name").innerHTML = resultFirstName;
document.getElementById("surname").innerHTML = resultLastName;
document.getElementById("email").innerHTML = resultEmail;
document.getElementById("country").innerHTML = resultCountry;
document.getElementById("phone").innerHTML = resultPhone;
document.getElementById("adress").innerHTML = resultAdress;
document.getElementById("adress-nr").innerHTML = resultAdressNr;
document.getElementById("city").innerHTML = resultCity;
document.getElementById("zip").innerHTML = resultZip;


//  Alternative would be: 

//  document.getElementById("name").innerText = sessionStorage.getItem("fName");

//  It is simpleer and done in one line and without generating variable


