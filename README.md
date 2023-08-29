[![Build and Deploy Static Files to GitHub Pages](https://github.com/kensonjohnson/relativepath.tech/actions/workflows/deploy-to-github-pages.yml/badge.svg)](https://github.com/kensonjohnson/relativepath.tech/actions/workflows/deploy-to-github-pages.yml)

# Relative Path Website

![typescript]
![react]
![tailwindcss]
![vite]

## Description

This is the source code for the [relativepath.tech](https://relativepath.tech) website. The site is built using [React](https://reactjs.org/) and [TailwindCSS](https://tailwindcss.com/) and the demo site is hosted on [GitHub Pages](https://pages.github.com/).

## Requirements

For our developer setup the only requirement is that Node.js v18 is installed on their machine to run the site locally.

## Setup

1. Navigate to a location on your file system you'd like to put this project and clone this repository by running:

```bash
git clone https://github.com/kensonjohnson/relativepath.tech.git
```

2. Navigate to the `relativepath.tech` directory:

```bash
cd ./relativepath.tech
```

3. Run the `local.sh` bash script to install requirements:

```bash
bash local.sh
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

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[typescript]: https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript
[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react
[tailwindcss]: https://img.shields.io/badge/TailwindCSS-20232A?style=for-the-badge&logo=tailwind-css
[vite]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite
