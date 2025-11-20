let contacts = JSON.parse(localStorage.getItem('contacts')) || [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' }
];

function showContacts() {
    const div = document.getElementById('contacts');
    div.innerHTML = contacts.map(c => <p>${c.name} - ${c.email} - ${c.phone}</p>).join('');
}

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (name && email && phone) {
        contacts.push({ name, email, phone });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        showContacts();
        document.getElementById('form').reset();
    }
});

showContacts();