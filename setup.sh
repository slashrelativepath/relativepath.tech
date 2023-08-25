# This script sets up a Ubuntu machine to run this Node.js app locally

# Install Node.js JS runtime environment
if [ -n "$(nodejs --version)" ]
then
  echo "Node.js is already installed"
else
  echo "Installing nodejs"
  sudo apt update
  sudo apt install -y nodejs

# Install npm package manager for JS
if [ -n "$(npm --version)" ]
then
  echo "npm is already installed"
else
  echo "Installing npm"
  sudo apt update
  sudo apt install -y npm

# Install git
if [ -n "$(git --version)" ]
then
  echo "git is already installed"
else
  echo "Installing git"
  sudo apt-get update
  sudo apt-get install -y git-all

# Clone the repository
if [ -d ./relativepath.tech ]
then
  echo "Repository is already cloned locally on system"
else
  echo "Cloning relativepath.tech"
  git clone https://github.com/kensonjohnson/relativepath.tech.git
  cd ./relativepath.tech

# Move into the local repo
if [ -n "$(pwd | grep relativepath.tech)" ]
then
  echo "Already in relativepath.tech"
else
  cd ./relativepath.tech
  echo "In path $(pwd)"
