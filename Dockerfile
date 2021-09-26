FROM node:14.17.6-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli
RUN npm install 
COPY . .
EXPOSE 4200
CMD ng serve --host 0.0.0.0