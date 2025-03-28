FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clear any existing node_modules and install dependencies
RUN rm -rf node_modules && \
    npm ci --no-audit --no-fund && \
    npm audit fix --force

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]