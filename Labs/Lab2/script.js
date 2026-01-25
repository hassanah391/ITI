import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/esm/axios.min.js';


const student = {
  name: "hassan",
  university: "Cairo",
  faculty: "mechanical engineering",
  finalGrade: "good",
};

console.log(
  `${student.name} is a student in faculty of ${student.faculty} 
  in university ${student.university} And his final grade is ${student.finalGrade}`,
);


const studentNames = new Set();

studentNames.add('hassan');
studentNames.add('hossam');
studentNames.add('medhat');
studentNames.add('hassan'); // trying to add a repeated name

// a.	Try to add repeated names, will the set accept it?
// the set doesn't accept the repeated keys, set only accept unique keys

console.log([...studentNames]);

for (const name of studentNames) {
  console.log(name);
}

const products = ['samsung', 'iphone', 'nvidia'];
const newProducts = [...products, 'new product1', 'new product2'];

console.log(products);
console.log(newProducts);


const usersSelect = document.getElementById("usersSelect");
const showBtn = document.getElementById("showBtn");
const userDetails = document.getElementById("userDetails");

let users = [];

// Fetch users (ESNext)
const getUsers = async () => {
  try {
    // Using fetch()
    // const response = await fetch("https://dummyjson.com/users");
    // const data = await response.json();

    // Using axios instead of fetch()
    const response = await axios.get('https://dummyjson.com/users');
    users = await response.data.users;

    // users = data.users;

    users.forEach(({ id, firstName, lastName }) => {
      usersSelect.innerHTML += `
        <option value="${id}">
          ${firstName} ${lastName}
        </option>
      `;
    });

    // Enable button after loading users
    showBtn.disabled = false;

  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// Show selected user details
showBtn.addEventListener("click", () => {
  const selectedId = Number(usersSelect.value);

  if (!selectedId) {
    alert("Please select a user");
    return;
  }

  const user = users.find(({ id }) => id === selectedId);

  userDetails.innerHTML = `
    <h3>${user.firstName} ${user.lastName}</h3>
    <p>Email: ${user.email}</p>
    <p>Age: ${user.age}</p>
    <img src="${user.image}" alt="User Image">
  `;
});

// Load users on page start
getUsers();


// Adding new post
const newPost = {
  title: "foo",
  userId: 5,
};
const createPost = async () => {
  try {
    const response = await fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Declare the content type
    },
    body: JSON.stringify(newPost),
  });
  if (response.status === 201 || response.status.ok) {
    console.log(await "Creating new post using fetch()");
    console.log(await response.json());
  }
  } catch (error) {
      console.error("Error adding new post:", error);
  }
  
}

createPost();

// Adding new post using axios
const createPostAxios = async () => {
  try {
    const response = await axios
	.post('https://dummyjson.com/posts/add', newPost);
  if (response.status === 201) {
    console.log(await "Creating new post using axios");
    console.log(await response);
  }
  } catch (error) {
      console.error("Error adding new post:", error);
  }
  
}

createPostAxios();

const message = document.getElementById("message");
const userImage = document.getElementById("userImage");

// Promise that resolves after given time
const delay = (time) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

// Start promise chain
delay(3000)
  .then(() => {
    // a) Welcome message after 3 seconds
    message.textContent = "Welcome to our website";
  })
  .then(() => {
    // b) Display user image
    userImage.src = "https://placehold.co/600x400";
    userImage.style.display = "block";
  })
  .then(() => {
    // c) Thanks message after 3 seconds
    return delay(3000);
  })
  .then(() => {
    message.textContent = "Thanks for visiting";
  })
  .then(() => {
    // d) Redirect to another page
    window.location.href = "https://www.google.com";
  });
