  
function sendMail(contactForm) {
    emailjs.send("gmail", "bamyanpage", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            contactForm.name.value="",
            contactForm.emailaddress.value="",
            contactForm.projectsummary.value=""
            console.log("Successfully sent", response);
           },
          
           
        function(error) {
            console.log("FAILED", error);
            
        }
    
    );
    return false;  // To block from loading a new page
    
}