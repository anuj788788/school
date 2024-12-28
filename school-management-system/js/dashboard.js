$(document).ready(function() {
  $.ajax({
      url: 'php/getUserProfile.php',
      type: 'GET',
      success: function(response) {
          const res = JSON.parse(response);
          if (res.success) {
              const user = res.user;
              $('#userProfile').html(`
                  <p>Name: ${user.name}</p>
                  <p>Age: ${user.age}</p>
                  <p>Mobile: ${user.mobile_number}</p>
                  <p>Email: ${user.email}</p>
                  <p>Referral Name: ${user.referral_name || 'N/A'}</p>
                  <p>Referral Mobile: ${user.referral_mobile || 'N/A'}</p>
              `);
          } else {
              window.location.href = 'login.html';
          }
      }
  });
});