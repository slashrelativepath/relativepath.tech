#! /bin/bash

# This script sets up a Ubuntu machine to run this Node.js app locally


# Check if node is in apt-cache
if [ $(apt-cache show nodejs) ]
then
  echo "nodejs is already in the apt-cache"
else
  sudo apt update
fi

# Install Node.js runtime environment
if [ -n "$(nodejs --version)" ]
then
  echo "Node.js is already installed"
else
  echo "Installing nodejs"
  curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash -
  sudo apt install -y nodejs
fi

# Install git
if [ -n "$(git --version)" ]
then
  echo "git is already installed"
else
  echo "Installing git"
  sudo apt-get update
  sudo apt-get install -y git-all
fi

# Clone the repository
if [ -d ./relativepath.tech ]
then
  echo "Repository is already cloned locally on system"
else
  echo "Cloning relativepath.tech"
  git clone https://github.com/kensonjohnson/relativepath.tech.git
  cd ./relativepath.tech
fi

# Move into the local repo and install depedencies
if [ -n "$(pwd | grep relativepath.tech)" ]
then
  echo "Already in relativepath.tech"
else
  cd ./relativepath.tech
  echo "In path $(pwd)"
fi

# npm install will check if requirements have been installed, if so do nothing, 
# and if not install them
npm install