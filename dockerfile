FROM node:20-alpine as dependencies
WORKDIR /app 

COPY package.json package-lock.json ./
RUN npm install --force

FROM node:20-alpine as builder
ARG BUILD_TYPE=ru
ARG NEXT_PUBLIC_BASEURL

ENV NEXT_PUBLIC_BASEURL=${NEXT_PUBLIC_BASEURL}

WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build:$BUILD_TYPE

FROM node:20-alpine as runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
CMD ["npm" , "start"]