const contacts = [
  {
    id: 1,
    fullName: "Devina Aulia",
    phone: 6282320747396,
    email: "devinaa07@gmail.com",
    location: "Garut",
  },
  {
    id: 2,
    fullName: "nadila",
    phone: 6289700654321,
    email: "nadila99@gmail.com",
    location: "Garut",
  },
  {
     id: 3,
    fullName: "kaylla",
    phone: 6289733678955,
    email: "kayllaaa@gmail.com",
    location: "Garut",
  },
  { 
    id: 4,
    fullName: "rendy",
    phone: 6282224544321,
    email: "rednyyy84@gmail.com",
    location: "Garut",
  },
];

function displayContacts() {
  for (const contact of contacts) {
    console.log(`
      🙎‍♀️ : ${contact.fullName}
      📞 : ${contact.phone}
      📍  : ${contact.location}
      📧 : ${contact.email}
      `);
  }
}

function addContact() {
  contacts.push({
  id: 5,
    fullName: "firgi",
    phone: 6289888322321,
    email: "firgii02@gmail.com",
    location: "Garut",
  });
}

function searchContacts() {
}


addContact();
displayContacts();