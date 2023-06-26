let firstName = sessionStorage.getItem("fNAme");
let lastName = sessionStorage.getItem("lName");

let result = "Welcome " + firstName + " " + lastName;

let email = sessionStorage.getItem("emailAdress")
let country = sessionStorage.getItem("selectedCountry");
let zip = sessionStorage.getItem("zipCode");
let city = sessionStorage.getItem("cityName");


document.getElementById("result").innerHTML = result;
