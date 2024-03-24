// Sample user details (you can replace these with your actual user details)
const sampleUserDetails = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    address: {
        street: "123 Main Street",
        city: "New York",
        zipcode: "10001"
    },
    phone: "123-456-7890",
    website: "example.com",
    company: {
        name: "Example Inc",
        catchPhrase: "Your success is our priority",
        bs: "Making great products"
    }
};

// Function to fetch user details from API (in this case, using sampleUserDetails)
async function fetchUserDetails() {
    return new Promise((resolve) => {
        // Simulating API call with a delay of 1 second using setTimeout
        setTimeout(() => {
            resolve(sampleUserDetails);
        }, 1000);
    });
}

// Function to display user details
async function displayUserDetails() {
    const userDetails = await fetchUserDetails();
    console.log("User Details:");
    console.log("Name:", userDetails.name);
    console.log("Username:", userDetails.username);
    console.log("Email:", userDetails.email);
    console.log("Address:", userDetails.address.street + ", " + userDetails.address.city + " " + userDetails.address.zipcode);
    console.log("Phone:", userDetails.phone);
    console.log("Website:", userDetails.website);
    console.log("Company:", userDetails.company.name);
    console.log("Catch Phrase:", userDetails.company.catchPhrase);
    console.log("BS:", userDetails.company.bs);
}

// Call the function to display user details
displayUserDetails();
