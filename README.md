# 👋 Welcome to the Hello Git Project!

This is a minimal project designed to help you get comfortable with the core Git commands, the branching workflow, and the Pull Request (PR) process on GitHub.

The goal is simple: Get your first change merged into the main codebase! 

# 🚀 The Git Challenge: Submitting Your First Change

Follow these steps to complete your first Pull Request:

## Step 1: Clone the Repository

First, get a copy of the repository onto your local machine.

```shell
git clone https://github.com/Jdwoodson/joe-hello-world-intro.git
# Navigate into the project directory
cd joe-hello-world-intro
```

## Step 2: Create a New Feature Branch

The Golden Rule of development: Never commit directly to `main`.
Create a branch for your work! Branches isolate your changes until they are ready to be reviewed.

We will name your branch after your feature, which is simply adding your name.

```shell
# Create and switch to a new branch in one command
git checkout -b feature/add-your-name
```

## Step 3: Make Your Code Changes (The Task)

You need to personalize the greeting in the index.js file.
1. Open the index.js file in your editor.
1. Find the line defining the message variable.
1. Change it to include your name.

### Example Change (Update the message with your actual name):

```shell
// Replace this line:
// const message = \`Hello, Git Learner! You successfully built and ran this Node.js application.\`;

// With this:
const message = \`Hello, [YOUR NAME HERE]! Thanks for the commit! You successfully built and ran this Node.js application.\`;
```

## Step 4: Stage and Commit Your Changes

Stage your file to prepare it for inclusion, then commit the change with a descriptive message.

```shell
# Stage the modified file (tells Git to track the changes in index.js)
git add index.js

# Commit the staged file with a descriptive message
# A good commit message describes *what* you changed and *why*.
git commit -m "feat: personalize greeting with engineer name"
```

## Step 5: Push Your Branch to GitHub

Your changes are only local right now. Push the new branch to the remote repository (GitHub) so others can see it.

```shell
# The '-u' or '--set-upstream' links your local branch to the remote one.
git push --set-upstream origin feature/add-your-name
```

## Step 6: Create the Pull Request (PR)

1. Go to the repository page on GitHub (the URL will be displayed in your terminal after the `git push` command).
1. GitHub should immediately notice your new branch and offer a prominent button to "Compare & Pull Request."
1. Click that button.
1. Write a clear title and description for your PR (e.g., "Feature: Added personalized greeting")
1. Submit the PR!
The mentor will now review your code, and once approved, merge it into the `main` branch, completing the cycle!

## 🐳 Bonus Challenge: Running with Docker

This project is containerized! If you have Docker installed, you can try these commands to build and run your application in a stable, isolated environment.

1. Build the image (This uses the Dockerfile):
```shell
docker build -t hello-git-app:latest .
```
1. Run the container (This executes the CMD in the Dockerfile):
```shell
docker run --rm hello-git-app:latest
```
This confirms your application works correctly inside the container.