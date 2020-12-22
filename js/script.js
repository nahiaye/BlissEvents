< script > {
        /* /* Grab dom elements from html layout 
            var loginForm = document.getElementById("loginform-wrapper");
        var registerForm = document.getElementById("registerform");
        var loginBtn = document.getElementById("loginBtn");
        var registerBtn = document.getElementById("registerBtn");
        var forgot = document.getElementById("forgot-panel");

        //Registration button is clicked
        registerBtn.onclick = function()  */
    } { /* //Change css properties */ } {
        loginForm.style.left = "-430px";
        loginForm.style.opacity = "0";
        forgot.style.left = "-430px";
        forgot.style.opacity = '0';
        registerForm.style.left = "0px";
        registerForm.style.opacity = "1";
        loginBtn.classList.remove("active");
        registerBtn.classList.add("active");

        { /* //login button is clicked */ } {
            loginBtn.onclick = function() {
                //Change css properties
                loginForm.style.left = "0px";
                loginForm.style.opacity = "1";
                forgot.style.left = "0px";
                forgot.style.opacity = '1';
                registerForm.style.left = "430px";
                registerForm.style.opacity = "0";
                loginBtn.classList.add("active");
                registerBtn.classList.remove("active");

            }
        } < /script>