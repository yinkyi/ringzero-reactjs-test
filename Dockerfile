from node:latest
WRKDIR /apps
ADD ..
RUN npm install
CMD ["npm","run","start"]
