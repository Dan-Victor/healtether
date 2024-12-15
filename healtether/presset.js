document.addEventListener('DOMContentLoaded',()=>{
    const inputs = document.querySelectorAll(".myInput"); // Select all inputs with the class "myInput"
    const submitButton = document.getElementById("submitButton");
    const checkboxs = document.querySelectorAll('.ch')



    //to prevent important checkbox from being unchecked
    checkboxs.forEach(checkbox=>{
        checkbox.addEventListener("click", ()=> {
            if (!checkbox.checked) {
              // If the checkbox is unchecked, set it back to checked
              checkbox.checked = true;
            }
          });
    })


submitButton.addEventListener('click',()=>{
    alert('Prescription details saved successfully')
})

    // Listen for input changes on all inputs
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        let allValid = true; // Assume inputs are valid
  
         // Check each input if it's required and not empty
         for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].required &&  inputs[i].value ==='') {
              allValid = false; // Set to false if any required input is empty
            }
          }
  
        // Use if-else to enable/disable the button
        if (allValid) {
          submitButton.style.background = "#198E79";
          submitButton.style.color = "#ffff";
          submitButton.disabled = false; // Enable the button
        } else {
          submitButton.style.color = "#CACACA";
          submitButton.style.background = "#F7F7F7";
          submitButton.disabled = true; // Disable the button
        }
      });
    });
    

})

