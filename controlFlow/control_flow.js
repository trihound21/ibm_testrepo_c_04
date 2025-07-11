let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Practice task
// 1. Suppose an organization arranges a "Dietary Services" program
// to provide diets to its employees and customers,
// based on a person's weight and day-to-day routine.
// You need to create an authorization-based code
// to provide access to people based on their roles in organization,
// such as employees, enrolled members for "Dietary Services," and subscribers.

// If the person is an Employee,
// they are authorized to have access to "Dietary Services".

// If the person is an Enrolled Member,
// they are authorized to have access to "Dietary Services"
// and one-on-one interaction with a dietician.

// If the person is a Subscriber,
// they are authorized to have partial access to facilitate "Dietary Services" only.

// If the person is a Non-Subscriber,
// they need to enroll
// or at least subscribe first to avail this facility.

// 2. You need to communicate with the user
// by printing a message indicating whether that person
// is eligible to avail which type of services.