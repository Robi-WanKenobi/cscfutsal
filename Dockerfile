FROM node:alpine

# Create app directory
RUN mkdir /CSCFUTSAL
WORKDIR /CSCFUTSAL
COPY package.json /CSCFUTSAL
RUN cd /CSCFUTSAL

# If you are building your code for production
# RUN npm install --only=production
RUN npm install
RUN npm install -g @angular/cli@1.4.7

# Bundle app source
COPY . /CSCFUTSAL
RUN ng build --prod

EXPOSE 80
