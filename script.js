<script>
    // Fetch the external XML file (e.g., data.xml)
    fetch('students.xml') 
        .then(response => response.text())
        .then(data => {
            
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");

            
            const contacts = xmlDoc.getElementsByTagName("contact");
            
            
            let contactList = "";
            for (let i = 0; i < contacts.length; i++) {
                const name = contacts[i].getElementsByTagName("name")[0].textContent;
                const email = contacts[i].getElementsByTagName("email")[0].textContent;
                const phone = contacts[i].getElementsByTagName("phone")[0].textContent;

                contactList += `
                    <div>
                        <h3>${name}</h3>
                        <p>Email: ${email}</p>
                        <p>Phone: ${phone}</p>
                    </div>
                `;
            }

            
            document.getElementById("contact-list").innerHTML = contactList;
        })
        .catch(error => console.error('Error loading XML:', error));
</script>