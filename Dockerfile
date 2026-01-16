FROM node:24-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build-only

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

CMD ["npm", "run", "preview", "--", "--host"]