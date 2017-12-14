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
RUN npm install -g @angular/cli

# If you are building your code for production
# RUN npm install --only=production
RUN npm install

# Bundle app source
COPY . /fixit
COPY .angular-cli.json /CSCFUTSAL
COPY ./src/tsconfig.app.json /CSCFUTSAL/src

RUN ng build --prod

EXPOSE 80
#CMD [ "npm", "start" ]
