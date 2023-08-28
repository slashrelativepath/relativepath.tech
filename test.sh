#! /bin/bash

# This script tests if the site is running locally

if [ $(curl -o /dev/null -s -w "%{http_code}" http://localhost:4173/ | grep 200) ]
then
  echo "Server OK and running at http://localhost:5173"
else
  echo "Server not running or not OK" 
fi
