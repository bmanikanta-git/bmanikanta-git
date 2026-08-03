document.getElementById("registrationForm").addEventListener("submit", function(event){

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let father = document.getElementById("father").value.trim();
    let mother = document.getElementById("mother").value.trim();
    let dob = document.getElementById("dob").value;
    let education = document.getElementById("education").value.trim();
    let photo = document.getElementById("photo").value;
    let signature = document.getElementById("signature").value;

    let gender = document.getElementsByName("gender");

    let genderSelected = false;

    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderSelected = true;
            break;
        }
    }

    if(fname==""){
        alert("Please enter First Name");
        event.preventDefault();
        return;
    }

    if(lname==""){

    if(father==""){
    }

    if(mother==""){
        alert("Please enter Mother's Name");
        event.preventDefault();
        return;
    }

    if(dob==""){
        alert("Please select Date of Birth");
        event.preventDefault();
        return;
    }

    if(!genderSelected){
        alert("Please select Gender");
        event.preventDefault();
        return;
    }

    if(education==""){
        alert("Please enter Educational Details");
        event.preventDefault();
        return;
    }

    if(photo==""){
        alert("Please upload Passport Size Photo");
        event.preventDefault();
        return;
    }

    if(signature==""){
        alert("Please upload Signature");
        event.preventDefault();
        return;
    }

    }
});
    alert("Registration Successful!");

    let photoExt = photo.split('.').pop().toLowerCase();
    let signExt = signature.split('.').pop().toLowerCase();
        return;

    let validExt = ["jpg","jpeg","png"];
        event.preventDefault();

    if(!validExt.includes(signExt)){
        alert("Signature must be JPG, JPEG or PNG");
        event.preventDefault();
        return;
    }

    if(!validExt.includes(photoExt)){
        alert("Photo must be JPG, JPEG or PNG");
        alert("Please enter Father's Name");
        event.preventDefault();
        return;
        alert("Please enter Last Name");
        return;
    }

