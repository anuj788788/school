$(document).ready(function() {
  $('#loginForm').on('submit', function(e) {
      e.preventDefault();

      const mobile = $('#mobile').val();
      const password = $('#password').val();

      $.ajax({
          url: 'php/login.php',
          type: 'POST',
          data: {
              mobile: mobile,
              password: password
          },
          success: function(response) {
              const res = JSON.parse(response);
              if (res.success) {
                  window.location.href = 'dashboard.html';
              } else {
                  $('#message').text('Invalid login credentials').css('color', 'red');
              }
          }
      });
  });
});