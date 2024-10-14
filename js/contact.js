var contactDisplay = document.getElementById('contact-display');

        // Function to display contacts
        function displayContacts(contacts) {
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

        // Array to hold contacts

        // Save contact button event listener
         function onClick(event) {
            event.preventDefault(); // Prevent form submission
            var name = document.getElementById('fname').value;
            var phone = document.getElementById('phone').value;
            document.getElementById("container").innerHTML = "";
            console.log("ghjkl")
            if (name && phone) {
                
               let contacts = server({ name: name, phone: phone });
                displayContacts(contacts); // Update the display
            }
           
        };


        function server(newContact){
        
            const users = JSON.parse(localStorage.getItem("users")) || [];
                const currentUser = JSON.parse(localStorage.getItem("current-user"));
                currentUser.data.push(newContact);
                console.log(users)
                 const newUsers= users.map((user)=>{
                console.log(user, currentUser)
                if(user.name===currentUser.name){
                    return currentUser;
                }
                return user;
            })
                localStorage.setItem("users",JSON.stringify(newUsers));
                localStorage.setItem("current-user",JSON.stringify(currentUser));
                return currentUser.data;
                // localStorage.setItem(JSON.stringify(contacts));

        }

        window.onload = function() {
            const currentUser = JSON.parse(localStorage.getItem("current-user"));
            if (currentUser && currentUser.data) {
                displayContacts(currentUser.data);
            }
        };
        