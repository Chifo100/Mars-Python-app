# Stage 1: Build Stage
FROM python:3.9-slim as builder

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --user -r requirements.txt

# Copy the rest of the application code
COPY . .

# Stage 2: Runtime Stage
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /root/.local /root/.local
COPY --from=builder /app .

# Make sure scripts in .local are usable
ENV PATH=/root/.local/bin:/home/ubuntu/my_python_project/venv/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin

# Expose the port the app runs on
EXPOSE 80

# Run the application
CMD ["python3", "-m", "http.server", "80"]
