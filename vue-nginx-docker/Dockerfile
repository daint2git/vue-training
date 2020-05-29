# ------------------------------------------------------
# Stage 1 - the build stage
# ------------------------------------------------------
FROM node:12.16.3-alpine3.11 as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# ------------------------------------------------------
# Stage 2 - the production stage
# ------------------------------------------------------
FROM nginx:1.16.0-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
# Copy from the stage 1
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
