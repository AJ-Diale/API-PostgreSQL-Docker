const form = document.getElementById('userForm');
const userTable = document.getElementById('userTable');

// Fetch all users and display in table
async function loadUsers() {
  const res = await fetch('/users');
  const users = await res.json();

  userTable.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${new Date(user.created_at).toLocaleString()}</td>
    `;
    userTable.appendChild(row);
  });
}

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const res = await fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });

  if (res.ok) {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    loadUsers();
  } else {
    const error = await res.json();
    alert('Error: ' + error.error);
  }
});

// Load users on page load
loadUsers();