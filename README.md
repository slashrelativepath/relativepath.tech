[![Build and Deploy Static Files to GitHub Pages](https://github.com/kensonjohnson/relativepath.tech/actions/workflows/deploy-to-github-pages.yml/badge.svg)](https://github.com/kensonjohnson/relativepath.tech/actions/workflows/deploy-to-github-pages.yml)

# React + TypeScript + Vite

Template from [here](https://github.com/tailwindtoolbox/Landing-Page/blob/master/index.html).

## Requirements

For our developer setup the only requirement is that Node.js v18 is installed on their machine to run the site locally.

## Description

A simple setup using:

- Vite ( build tool)
- TypeScript (build tool)
- React (UI)
- Tailwind CSS (UI)
- Example of the project file structure

## Setup

1. Navigate to a location on your file system you'd like to put this project and clone this repository by running:

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

## Building

1. To build the server, run the `build.sh` script with bash:

```bash
bash build.sh
```

## Start the server

1. To start the server locally at `http://localhost:4173`, run the 'start-server.sh` script with bash:

```bash
bash start-server.sh
```

## Testing

1. Run the `test.sh` bash script to test the server locally:

```bash
bash test.sh
```

2. If you see a `200 OK` response back, congrats! Open your browser and head over to `http://localhost:4173` to take a peak at the site.

## In Progress

- `policy.sh` for compliance
- `build.sh` script for local build automation
- `test.sh` script for local testing automation
- Add a badge for CICD status visibility
- Add badges for requirements visibility
