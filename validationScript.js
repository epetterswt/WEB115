    // JavaScript code for form validation

	  // Prevent form from submitting
    const form = document.getElementById("myForm")

    form.addEventListener ('submit', function(event) {
        let input = document.getElementById('inputField').value;
        let regex = /^[a-zA-Z0-9]*$/;

        if (!regex.test(input)) {
          alert('Invalid format!');
          event.preventDefault()
        }

        else {
          alert('Good choice!')
        }
        }
  )

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message