# Use official Nginx image
FROM nginx:alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy website files to Nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
