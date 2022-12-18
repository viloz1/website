# build environment
FROM node:19-alpine3.16 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./

RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]