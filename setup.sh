# This script sets up a Ubuntu machine to run this Node.js app locally

# Install Node.js runtime environment
if [ -n "$(nodejs --version)" ]
then
  echo "Node.js is already installed"
else
  echo "Installing nodejs"
  sudo apt update
  sudo apt install -y nodejs
fi

# Install npm package manager for JS
if [ -n "$(npm --version)" ]
then
  echo "npm is already installed"
else
  echo "Installing npm"
  sudo apt update
  sudo apt install -y npm
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

# Move into the local repo
if [ -n "$(pwd | grep relativepath.tech)" ]
then
  echo "Already in relativepath.tech"
else
  cd ./relativepath.tech
  echo "In path $(pwd)"
fi
