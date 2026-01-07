FROM node:24

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

CMD ["npm", "run", "preview", "--", "--host"]