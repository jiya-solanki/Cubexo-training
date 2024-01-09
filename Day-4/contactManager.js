const contactManager = {
    contacts: [],
    addContact: function(name,phone,email) {
      const newContact = {
        name:name,
        phone:phone,
        email:email,
        isHighlighted:false,
      };
  
      this.contacts.push(newContact);
      displayContacts(this.contacts);
    },

    deleteContact: function (index) {
      this.contacts.splice(index, 1);
      displayContacts(this.contacts);
    },
  };
  
  function addContact() {
    const name=document.getElementById('name').value;
    const phone=document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    contactManager.addContact(name,phone,email);
    document.getElementById('contactForm').reset();
  }
  
  function searchContacts() {
    const searchTerm=document.getElementById('searchName').value.toLowerCase();
    const filteredContacts=contactManager.contacts.map(contact => ({...contact,
      isHighlighted:contact.name.toLowerCase().includes(searchTerm),
    }));
    displayContacts(filteredContacts);
  }
  
  function displayContacts(contacts) {
    const contactListContainer=document.getElementById('contactList');
    contactListContainer.innerHTML='';
  
    contacts.forEach((contact,index) => {
      const contactElement=document.createElement('div');
      contactElement.classList.add('contact');
      
      if(contact.isHighlighted) {
        contactElement.classList.add('highlighted-contact');
      }

      const infoElement=document.createElement('div');
      infoElement.innerHTML=`<strong>${contact.name}</strong> | ${contact.phone} | ${contact.email}`;
  
      const deleteButton=document.createElement('button');
      deleteButton.classList.add('delete-btn');
      deleteButton.textContent='Delete';
      deleteButton.onclick= () => contactManager.deleteContact(index);
  
      contactElement.appendChild(infoElement);
      contactElement.appendChild(deleteButton);
  
      contactListContainer.appendChild(contactElement);
    });
  }