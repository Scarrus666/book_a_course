let firstName = sessionStorage.getItem("fNAme");
let lastName = sessionStorage.getItem("lName");
let email = sessionStorage.getItem("emailAdress")
let country = sessionStorage.getItem("selectedCountry");
let zip = sessionStorage.getItem("zipCode");
let city = sessionStorage.getItem("cityName");

let result_firstName = "Name: " + firstName;
let result_lastName = "Surname: " + lastName;
let result_email = "Email: " + email;
let result_country = "Country: " + country;
let result_zip = "Zip Code: " + zip;
let result_city = "City: " + city;


document.getElementById("result").innerHTML = result;


