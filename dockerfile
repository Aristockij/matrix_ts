# deps
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --force

# builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_BASEURL
ARG PUBLIC_URL
ARG NEXT_PUBLIC_STRIPE
ARG BUILD_TYPE=ru

ENV NEXT_PUBLIC_BASEURL=${NEXT_PUBLIC_BASEURL}
ENV PUBLIC_URL=${PUBLIC_URL}
ENV NEXT_PUBLIC_STRIPE=${NEXT_PUBLIC_STRIPE}

RUN npm run build:${BUILD_TYPE}

# runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY package.json .
EXPOSE 3000
CMD ["npm","start"]
