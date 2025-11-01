
    let userData = {};

        function signUp() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (name === "" || email === "" || username === "" || password === "") {
                alert("please fill out all this fields");
                document.getElementById('signupMessage').textContent = "Please fill out all fields.";
                return;
            }

            window.location.href = "singUp.html"
        }

        function login(){
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginEmail').value.trim();

            if (username === "" || password === "" ) {
                alert('!working');
                document.getElementById('loginMessage').textContent = "Please fill out all fields.";
                return;
                
            }
            window.location.href = "login.html"
        }

        
