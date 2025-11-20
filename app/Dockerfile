# Use the official Node.js 18 image as the base image for stability and compatibility.
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application source code
COPY index.js ./

# Define the command to run the application
# This executes 'node index.js' as defined in package.json
CMD [ "npm", "start" ]