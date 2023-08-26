#! /bin/bash

# This script tests the site locally

# Test that our server is running
if [ $(curl -o /dev/null -s -w "%{http_code}" http://localhost:4173/ | grep 200) ]
then
  echo "Looking great! Fire up your browser and head over to http://localhost:5173"
else
  echo "Site is not up :( ." 
fi
