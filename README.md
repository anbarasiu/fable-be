# Fable Backend

# Set environment variables
export $(cat .env | xargs)

# Install dependencies
npm install

# Run the server
node src/server.js