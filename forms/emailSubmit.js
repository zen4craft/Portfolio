// Make sure you have jQuery included in your project
// You can include it using a CDN, or download it and host it locally
// For example: <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

$(document).ready(function () {
    // Handle form submission
    $(".php-email-form").submit(function (e) {
      e.preventDefault();
  
      // Get form data
      var formData = $(this).serialize();
  
      // Make AJAX request to the server-side script
      $.ajax({
        type: "POST",
        url: "server-script.php", // Replace with the actual path to your server-side script
        data: formData,
        success: function (response) {
          // Handle the response from the server
          if (response == "success") {
            // Display success message
            $(".sent-message").html("Your message has been sent. Thank you!").show();
            // Clear form fields
            $(".php-email-form")[0].reset();
          } else {
            // Display error message
            $(".error-message").html("Error sending message. Please try again later.").show();
          }
        },
        error: function () {
          // Display error message in case of AJAX error
          $(".error-message").html("Error sending message. Please try again later.").show();
        }
      });
    });
  });
  