# Use a lightweight Python image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy only dependencies file first (leverages caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . /app

# Expose the Flask port
EXPOSE 5000

# Run the Flask app using Gunicorn with multiple workers
CMD ["gunicorn", "-b", "0.0.0.0:5000", "--workers=4", "--threads=2", "app:app"]
