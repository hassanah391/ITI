const userIdInput = document.getElementById("userIdInput");
const displayBtn = document.getElementById("displayBtn");
const usersSelect = document.getElementById("usersSelect");
const userData = document.getElementById("userData");

let allUsers = [];

// Function to display user data
const displayUser = (user) => {
    userData.innerHTML = `
    <h4>${user.firstname} ${user.lastname}</h4>
    <p>Email: ${user.email}</p>
    <img src="${user.avatar}" width="150">
  `;
};

//
// a) Get user by ID
//
displayBtn.addEventListener("click", async () => {
    const userId = userIdInput.value;

    if (!userId) {
        alert("Please enter user ID");
        return;
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users${userId}`,
    );
    const user = await response.json();

    displayUser(user);
});


// b) Get all users and fill dropdown
const getAllUsers = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
    );
    allUsers = await response.json();

    allUsers.forEach(user => {
        usersSelect.innerHTML += `
      <option value="${user.id}">
        ${user.firstname} ${user.lastname}
      </option>
    `;
    });
};


// c) onchange → display selected user

usersSelect.addEventListener("change", () => {
    const selectedId = usersSelect.value;
    if (!selectedId) return;

    const selectedUser = allUsers.find(
        user => user.id == selectedId
    );

    displayUser(selectedUser);
});

// Load users on page load
getAllUsers();
