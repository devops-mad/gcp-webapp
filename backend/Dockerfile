# Use lightweight Node.js Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy application code
COPY . .

# Expose port (adjust based on your app)
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
