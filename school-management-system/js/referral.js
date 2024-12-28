$(document).ready(function() {
  $.ajax({
      url: 'php/getUserProfile.php',
      type: 'GET',
      success: function(response) {
          const res = JSON.parse(response);
          if (res.success) {
              const user = res.user;
              const referralLink = `http://yourdomain.com/signup.html?referral=${user.mobile_number}`;
              $('#referralLink').val(referralLink);
          } else {
              window.location.href = 'login.html';
          }
      }
  });
});