#! /bin/bash

# This script builds and tests the site locally

# Install the requirements for our site
npm install

# Start the server up
npm run dev

# Test that our server is running
if [ $(curl -o /dev/null -s -w "%{http_code}" http://localhost:5173 | grep 200) ]
then
  echo "Looking great! Fire up your browser and head over to http://localhost:5173"
else
  echo "Error with our server." 
fi
