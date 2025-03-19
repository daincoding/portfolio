# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Default command (overridden by docker-compose in dev mode)
CMD ["npm", "start"]