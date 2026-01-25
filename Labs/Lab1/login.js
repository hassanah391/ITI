// Retrieve saved username and password from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
    }

    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
});

// Save username and password to localStorage when login button is pressed
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const isRememberMe = document.getElementById('rememberMe').checked;

    // Save to localStorage if the user checked remember me box
    if (isRememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        console.log('Credentials saved to localStorage');
        // Using cookies instead of local storage
        // Note: Cookies require HTTP/HTTPS protocol - won't work with file:// protocol
        const expirationDate = new Date(2026, 0, 24, 5, 29).toUTCString();
        document.cookie = `username=${encodeURIComponent(username)}; expires=${expirationDate}; path=/`;
        document.cookie = `password=${encodeURIComponent(password)}; expires=${expirationDate}; path=/`;
        console.log('Credentials saved as cookies');
        console.log('All cookies:', document.cookie);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        // Using cookies instead of local storage
        const expirationDate = new Date(0).toUTCString();
        document.cookie = `username=${encodeURIComponent(username)}; expires=${expirationDate}; path=/`;
        document.cookie = `password=${encodeURIComponent(password)}; expires=${expirationDate}; path=/`;
    }


    console.log('Username:', username);
    console.log('Password:', password);
});

// a. Can you use session storage in the previous assignment? Why?
//    Yes, you can use sessionStorage by replacing localStorage with sessionStorage.
//    However, sessionStorage only persists for the current tab/window session and
//    is cleared when the tab closes, while localStorage persists until explicitly cleared.
//    For login credentials, localStorage is typically preferred for persistence across sessions.

// b. What's the difference between local storage and session storage?
//    localStorage: Persists until explicitly cleared, shared across all tabs/windows
//                  of the same origin, survives browser restarts.
//    sessionStorage: Persists only for the current tab/window session, cleared when
//                   the tab closes, not shared across different tabs/windows.

// c. Can you access local storage and session storage in another page than the page that created it (on the same site)?
//    localStorage: Yes, accessible from any page on the same origin (same protocol, domain, and port).
//    sessionStorage: No, only accessible from the same tab/window that created it.
//                   Each tab has its own isolated sessionStorage.

// 3. Make JSON Object that holds Student data (ID, name, Age, Address, Skills (array), IsLeader (Boolean))
// JavaScript object (will be converted to JSON)
const student = {
    id: 1,
    name: 'hassan',
    age: 24,
    address: "bani mazar",
    skills: ["Javascript", "python", "C"],
    isLeader: false
};

// Convert javascript object to JSON string
const studentJSON = JSON.stringify(student);
console.log('Student JSON:', studentJSON);

// 4. Make an array of 3 students, print each student name along with skills, make address null for one student
const students = [
    {
        id: 1,
        name: 'hassan',
        age: 24,
        address: "bani mazar",
        skills: ["Javascript", "python", "C"],
        isLeader: false
    },
    {
        id: 2,
        name: 'ahmed',
        age: 22,
        address: null, // Address is null for this student
        skills: ["Java", "React", "Node.js"],
        isLeader: true
    },
    {
        id: 3,
        name: 'sara',
        age: 23,
        address: "cairo",
        skills: ["Python", "Django", "SQL"],
        isLeader: false
    }
];

// Print each student name along with his skills
console.log('\n--- Students and their skills ---');
students.forEach((student, index) => {
    console.log(`Student ${index + 1}: ${student.name}`);
    console.log(`Skills: ${student.skills.join(', ')}`);
    console.log(`Address: ${student.address === null ? 'null' : student.address}`);
    console.log('---');
});

// Convert students array to JSON
const studentsJSON = JSON.stringify(students);
console.log('\nStudents Array as JSON:', studentsJSON);

// a. Can JSON hold null and Boolean values?
//    Yes, JSON can hold both null and Boolean values (true/false).
//    JSON supports: strings, numbers, booleans, null, arrays, and objects.
//    Example: {"name": "John", "age": 25, "isActive": true, "address": null}

// b. What are the differences between XML and JSON?
//    XML (eXtensible Markup Language):
//    - Uses tags and attributes (<student><name>John</name></student>)
//    - More verbose and larger file size
//    - Requires XML parser to parse
//    - Supports comments and namespaces
//    - Can have attributes and text content
//    - Case-sensitive
//
//    JSON (JavaScript Object Notation):
//    - Uses key-value pairs and arrays ({"student": {"name": "John"}})
//    - More compact and readable
//    - Native JavaScript support (JSON.parse/JSON.stringify)
//    - No comments or namespaces
//    - Simpler structure (only data, no attributes)
//    - Case-sensitive
//    - Faster to parse and generate
//    - Better suited for web APIs and JavaScript applications
