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

# Install git
if $(git --version > /dev/null)
then
  echo "git is installed"
else
  echo "Installing git..."
  sudo apt update
  sudo apt install -y git
fi

# Clone the repository
if [ -d ./relativepath.tech ]
then
  echo "Repository is already cloned."
else
  echo "Cloning relativepath.tech..."
  git clone https://github.com/kensonjohnson/relativepath.tech.git
  cd ./relativepath.tech
fi

# Move into the local repo and install depedencies
if $(pwd | grep relativepath.tech > /dev/null)
then
  echo "Already in relativepath.tech"
else
  cd ./relativepath.tech
fi

# npm install will check if requirements have been installed, if so do nothing, 
# and if not install them
npm install