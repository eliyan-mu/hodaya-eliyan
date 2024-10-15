var contactDisplay = document.getElementById('contact-display');

        // Function to display contacts
        function displayContacts() {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            let contacts = user.data;
            contactDisplay.innerHTML = ''; // Clear existing display
            for (var i = 0; i < contacts.length; i++) {
                var p = document.createElement('p');
                p.textContent = contacts[i].name + ': ' + contacts[i].phone; // Display contact
                contactDisplay.appendChild(p);
            }
        }

       function showForm(){
        const template = document.getElementById("form");
        const container = document.getElementById("container");
        container.appendChild(template.content.cloneNode(true));
       } 


        
         function onClick(event) {
            event.preventDefault(); // Prevent form submission
            var name = document.getElementById('fname').value;
            var phone = document.getElementById('phone').value;
            document.getElementById("container").innerHTML = "";

            if (name && phone) {
                let y = new Fajax();
                y.onload = function () {
                    console.log("hi");
                    // addNewuser(name,password)
                    app.nav(event)
            }
            y.open("POST", "my-server/api/contact")
            y.send({name: name, phone: phone});
            displayContacts(); // Update the display
            }
           
        };


     

