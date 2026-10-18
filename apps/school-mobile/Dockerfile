FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy application files
COPY . .

# Expose port 3008 matching webschool.sdbo.ma.conf reverse proxy
EXPOSE 3008

# Run static HTTP server
CMD ["node", "server.js"]
