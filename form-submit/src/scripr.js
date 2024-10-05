

let forms = document.getElementById('forms');

// console.log(forms);

forms.addEventListener("submit",function(e){
  e.preventDefault();
  
  
  let fName = e.target.fName.value;
  let lName = e.target.lName.value;
  let email = e.target.email.value;
  let pass = e.target.pass.value;
  let country = e.target.country.value;
  let address = e.target.address.value;
  



  // let fName = document.getElementById('fName').value;
  // let lName = document.getElementById('lName').value;
  // let email = document.getElementById('email').value;
  // let pass = document.getElementById('pass').value;
  // let country = document.getElementById('country').value;
  // let address = document.getElementById('address').value;
  
  let info = {
    
    fName,
    lName,
    email,
    pass,
    country,
    address,
    // fName : fName,
    // lName : lName,
    // email : email,
    // pass : pass,
    // country : country,
    // address : address
  }
  
  console.log(info)
  
  // console.log(JSON.stringify(info))
} )


