# Description: This file is used to create a docker image for the flask application

# Use an official Python runtime as a parent image
FROM python:3.7

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir flask

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.py when the container launches
CMD ["python", "app.py"]