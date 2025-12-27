document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const lokasi = document.getElementById('lokasi').value;
    
    if (name && phone && email && lokasi) {
        addContact(name, phone, email, lokasi);
        document.getElementById('contactForm').reset();
    }
});

function addContact(name, phone, email, lokasi) {
    const contactList = document.getElementById('contactList');
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center p-2 bg-gray-50 rounded';
    
    li.innerHTML = `
        <div>
            <strong>${name}</strong><br>
            ${phone}<br>
            ${email}<br>
            ${lokasi}<br>
           
        </div>
        <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onclick="deleteContact(this)">Delete</button>
    `;
    
    contactList.appendChild(li);
}

function deleteContact(button) {
    button.parentElement.remove();
}