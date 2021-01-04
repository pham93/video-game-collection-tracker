# BUILD
[![Build Status](https://travis-ci.com/pham93/video-game-collection-tracker.svg?branch=main)](https://travis-ci.com/pham93/video-game-collection-tracker)


# Project Summary
Our app helps users organize and keep track of their video game collections. It offers the user a neatly organized list of queryable titles within their collection. It also leverages wish-lists to help users keep track of games they want to play. The appliation treats titles as sigle items, allowing users to see a nice summary of the game, what platforms the game is compatible with, and what developer/publishers are in their collection. Lastly it also allows users to rate games within their collection to help show which titles are their favorite and least favorite. 

## Software Requirements
* Git (of course)
* Docker, Kubernetes (https://www.docker.com). 
* Ansible version > 2.9
* Node & NPM & Yarn & Lerna. Node > 10.14

Windows Users
* WSL 1 or WSL 2 with Docker Desktop. Use Docker Desktop to set default distro and enable kubernetes

## Installation
Password file is needed to run ansible
create ~/.ansible.cfg file in home directory
The password is provided by your administrator
```
[defaults]
vault_password_file = /path/to/file.txt
```

Run the playbook to install all require dev tools (node, yarn, and lerna) for debian distro (ubuntu, debian, xubuntu, etc).
If you're not running debian flavor, follow your distro for instruction to install these packages
```bash
cd {repo}/ansible
ansible-playbook install_require_binaries_playbook.yml
```

## Getting Started
Run the deploy playbook to install all the images, preparing all the setup and start docker-compose
Pass in server_host_url. This is the host machine (one that serve all the docker containers).
server_host_url is needed for nginx and keycloak

```bash
cd {repo}/ansible
ansible-playbook deploy_dev_playbook.yml -e "server_host_url=${your host ip address}"
```
Then once the container starts you should be able to nagivate to the link below to acces the application.
```bash
http://localhost/app
```
This will redirect you to keycloak for authentication. For development, you can use 
username: admin, password: password


## API
To accesss api or swagger ui
```bash
http://localhost/api
http://localhost/swagger
```

## Keycloak admin
To access the keycloak admin console
username: admin
password: password
```bash
http://localhost/auth
```

# Diagrams

## Mockup Diagrams
This is an initial mockup for what the Home screen could look like:
![Home Mockup](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/Mockup_Home.PNG)

This is an initial mockup for what the Add New Game screen could look like:
![Add Game Mockup](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/Mockup_Add.PNG)

This is an initial mockup for what the Game Details screen could look like:
![Details Mockup](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/Mockup_Details.PNG)

This is an initial mockup for what the Library screen could look like:
![Library Mockup](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/Mockup_Library.PNG)

This is an initial mockup for what the Wish screen could look like:
![Wish Mockup](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/Mockup_Wish.PNG)

## Architecture Diagrams
This is the Level 1 System Context Diagram:
![System Context](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/VGCT_Level1_SystemContext-1.jpg)

This is the Level 2 Containers Diagram:
![Containers](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/VGCT_Level2_Containers-1.jpg)

This is the Level 3 Components Diagram:
![Components](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/VGCT_Level3_Components-1.jpg)

# License
The MIT License

Copyright (c) 2010-2020

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
