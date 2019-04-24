FROM node:latest

WORKDIR /app

RUN npm i npm@latest -g
RUN npm install -g @angular/cli

EXPOSE 4200
COPY ./entrypoint.sh /
CMD [ "bash", "/entrypoint.sh"]
