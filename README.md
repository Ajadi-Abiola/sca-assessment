# SCA Assessment
This is a webpage that display a text and uses docker to containerize the application. The webpage is built with react.js and Material-UI.
# Installation
Ensure you have docker installed on your laptop. To install docker go to https://docs.docker.com/get-started/. select your operating system and click on download.
# DockerFile
The dockerfile contains the following commands:
```
 FROM node:16-alpine
 WORKDIR /SCA-ASSESSMENT
 COPY . .
 RUN npm run build
 CMD ["npm", "start"]
```
**FROM node:16-alpine**
To get started, we decide on a base image to use, since we are working with a react application i chose a node 16 alpine image which contains the tools and packages needed to run a node application.

**WORKDIR /SCA-ASSESSMENT**
this specifies the default directory for future commands.

**COPY . .**
we now have an image that is based on Node , as well as our dependencies installed. The next step is to incorporate our source code into the image. Just like we did with our package.json files earlier, To carry out this step the COPY command is used.

**RUN npm run build**
We use the RUN command to run npm run build which executes the build field in the package.json script. the build field in the this projects runs "build": "react-scripts build".

**CMD ["npm","start"]**
The CMD directive specifies the default command to run when starting a container from this image.
All of the files in the current directory will be copied into the image using this COPY command. All that remains is to tell Docker the command we want to perform when our image is run within a container. The CMD command is used to accomplish this.

# Building a Docker Image
 Now that we have our docker file the next step is to build our image. To do this, we open our terminal cd into the directory and run this command: 
 `docker build -t image-name`
 in this case i ran; `docker build -t sca-assessment .`

 `-t` is used to tag our image.
 The period `.` at the end of the command is important, it tells Docker to check for the dockerfile in the current directory, without it the image will not build.

 # Running our Application container
 If done correctly our image should build successfully and now we need to start our container. To carry out this step we run the command docker run and map the our port to docker's port. On my local machine the application runs on http://localhost:3000/ so we need to map this to Docker's 3000 port. 
   ![](https://i.ibb.co/Q9ppmC3/rundocker.png)
 To implement this run: 
 `docker run -d 3000:3000 sca-assessment.`
 -d is used to run our container in a detached mode therefore it runs in the background it is optional.
 `3000:3000` maps the port
 `sca-assessment` is the image name we are working with.
 To view our application we open localhost:3000 in our browser.
  ![](https://i.ibb.co/ZTpjzG0/dockerruning.png)
 # Updating our Application
To make changes to our application, we edit the source code in this case in the `App.js` file but then it won't reflect on our container that is already running. In order for us to see the changes carried out we need to update our container by building it again. We just need to run the `docker build -t sca-assesment` command and it will update our application. Luckily for us the base image and dependencies has already been downloaded and cached so it does not take as long as building the image for the first time. 
 Remember after building we map the ports. So the next command to run is `docker run -d 3000:3000 sca-assessment`. 
 **Kindly note:** To prevent error, We need to stop the previous application running before buidling and mapping the updated application. We can stop/delete it in dockerhub or we make use of the terminal.
 The commands to run are:
  `docker ps` this is used to get the ID of the container.
  ![](https://i.ibb.co/kQRCJMh/dockerps.png)
  After we get the ID of the container, `docker stop <container-ID>` is the next command to run. this stops the container from running and finally we remove the container with the command  `docker rm <container-ID>`
  To view our application we open localhost:3000 in our browser.
     ![](https://i.ibb.co/Px0Zhtg/webpage.png)
  
  # Pushing to DockerHub
  To push to dockerhub ensure you have a dockerhub account. you can create one here https://hub.docker.com/ and also Create a repository in Dockerhub.
  Next step is to run `docker images` in our terminal to see the list of docker images we have and the details. The image we want to push is `sca-assessment`. To enable you push to dockerhub you need to login, run `docker login` in ther terminal and it will prompt us to enter out username and password. After a successfully login into docker, we want to tag the image we want to push run `docker tag sca-assessment:<tag-name> <dockerID>/sca-assessment`
  Note: `tag-name` is copied from the current image after running docker images `<dockerID> `is your username on dockerhub.
  we can include `:<tag-name>` at the end of the command to add a new tag or it will take `latest` as the tag.
  To confirm our command ran successfully, we run `docker images` again to view the list of images and we should see the new docker image with our dockerID attached.
  Next, we push to Dockerhub! the command to do this is `docker push <image-name>` in this case it will be the name of the new docker image that has the` DockerID`attached. Awesome! next go to dockerHub and refresh the latest version we just pushed will be in the repository.
  
  # Link to DockerHub
 Below is the link to dockerhub that shows the image i built for this assessment.
  https://hub.docker.com/repository/docker/barry1103/sca-assessment
   [Barakat's assessment](https://hub.docker.com/repository/docker/barry1103/sca-assessment).