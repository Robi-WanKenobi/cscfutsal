FROM node:alpine

# Create app directory
#WORKDIR /usr/src/app
RUN mkdir /CSCFUTSAL
WORKDIR /CSCFUTSAL
# Install app dependencies

COPY package.json /CSCFUTSAL

RUN cd /CSCFUTSAL
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./
RUN npm install

RUN npm install -g @angular/cli

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /fixit

RUN ng build

EXPOSE 80
#CMD [ "npm", "start" ]
