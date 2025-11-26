/**
 * index.js
 * The core application file.
 * This script simply outputs a greeting and the current date/time to the console.
 *
 * JUNIOR ENGINEER TASK:
 * Update the 'message' variable to include your name and commit the change
 * on a new feature branch.
 */

function greet() {
    const now = new Date();
    // 💡 TASK LINE: Modify this string to include your name!
    const message = `Hello, Frank Joe! You successfully built and ran this Node.js application.`;
    const timestamp = `Current time: ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`;

    console.log("------------------------------------------");
    console.log(message);
    console.log(timestamp);
    console.log("------------------------------------------");
}

greet();