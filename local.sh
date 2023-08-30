#! /bin/bash

# This script sets up the development environment for relativepath.tech

# Install Node.js runtime environment
if (nodejs --version > /dev/null)
then
  echo "Node is installed."
else
  echo "Installing nodejs..."
  curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash -
  sudo apt install -y nodejs
fi

# npm install will check if requirements have been installed, if so do nothing, 
# and if not install them
npm install