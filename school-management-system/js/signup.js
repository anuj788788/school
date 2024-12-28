$(document).ready(function() {
    $('#signupForm').on('submit', function(e) {
        e.preventDefault();

        const name = $('#name').val();
        const age = $('#age').val();
        const mobile = $('#mobile').val();
        const email = $('#email').val();
        const referralName = $('#referralName').val();
        const referralMobile = $('#referralMobile').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match'
            });
            return;
        }

        $.ajax({
            url: 'php/signup.php',
            type: 'POST',
            data: {
                name: name,
                age: age,
                mobile: mobile,
                email: email,
                referralName: referralName,
                referralMobile: referralMobile,
                password: password
            },
            success: function(response) {
                const res = JSON.parse(response);
                if (res.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Signup successful!',
                        text: `Mobile: ${mobile}, Password: ${password}`
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.message
                    });
                }
            }
        });
    });
});
$(document).ready(function() {
    $('#signupForm').on('submit', function(e) {
        e.preventDefault();

        const name = $('#name').val();
        const age = $('#age').val();
        const mobile = $('#mobile').val();
        const email = $('#email').val();
        const referralName = $('#referralName').val();
        const referralMobile = $('#referralMobile').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match'
            });
            return;
        }

        $.ajax({
            url: 'php/signup.php',
            type: 'POST',
            data: {
                name: name,
                age: age,
                mobile: mobile,
                email: email,
                referralName: referralName,
                referralMobile: referralMobile,
                password: password
            },
            success: function(response) {
                const res = JSON.parse(response);
                if (res.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Signup successful!',
                        text: `Mobile: ${mobile}, Password: ${password}`
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.message
                    });
                }
            }
        });
    });
});