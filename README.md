# Project Summary
Our app helps users organize and keep track of their video game collections. It offers the user a neatly organized list of queryable titles within their collection. It also leverages wish-lists to help users keep track of games they want to play. The appliation treats titles as sigle items, allowing users to see a nice summary of the game, what platforms the game is compatible with, and what developer/publishers are in their collection. Lastly it also allows users to rate games within their collection to help show which titles are their favorite and least favorite. 

## Software Requirements
* Docker (https://www.docker.com)
* Postgres (https://hub.docker.com/_/postgres)
* Django (https://hub.docker.com/_/django)

## Installation
```bash
docker-build .
docker-compose run django bash
python manage.py migrate
python manage.py createsuperuser
```

## Getting Started
To run the Video Game Collection Tracker app in a powershell/terminal please run
```bash
docker-compose up
```
Then once the container starts you should be able to nagivate to the link below to acces the application.

http://localhost:8080

# Diagrams

## Mockup Diagrams
This is an initial mockup for what the Home screen could look like:
![Home Mockup](https://github.com/japerezg86/video-game-collection-tracker/blob/main/images/Mockup_Home.PNG)

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
