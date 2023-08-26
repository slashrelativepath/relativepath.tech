# React + TypeScript + Vite

Template from [here](https://github.com/tailwindtoolbox/Landing-Page/blob/master/index.html).

## Requirements

For our developer setup we have assumed Ubuntu 22.04 as our base OS.

## Description

A simple setup using:

Vite ( build tool)
TypeScript (build tool)
React (UI)
Tailwind CSS (UI)
Example of the project file structure

## Setup

1. Navigate to a location on your file system you'd like to put this project and clone this repository and run:

```bash
git clone https://github.com/kensonjohnson/relativepath.tech.git
```

2. `cd` into the `relativepath.tech` directory:

```bash
cd ./relativepath.tech
```

3. Run the `setup.sh` bash script to make sure your system has necessary requirements:

```bash
bash setup.sh
```

4. Run `npm install` from the `relativepath.tech` directory to install the dependencies for the site:

```bash
npm install
```

5. To start your server, run:

```bash
npm run dev
```

6. To test that the server is up and running, either open a browser and navigate to `http://localhost:5173` or from the command-line run:

```bash
curl -o /dev/null -s -w "%{http_code}" http://localhost:5173 | grep 200
```

7. If you see the site in your browser or got a `200 OK` response back, congrats!

## In Progress

- `build.sh` script for local build automation
- `test.sh` script for local testing automation
- We need a `token` or `ssh-key` to actually deploy the site to GitHub Pages
- After we have a working GH Pages pipeline, swap branch in `cicd.yaml` to trigger on push or pull request to "main"
- Add a badge for CICD status visibility
- Add badges for requirements visibility
