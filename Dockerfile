FROM node:16.16.0 as dependencies
WORKDIR /dndvault
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.16.0 as builder
WORKDIR /dndvault
COPY . .
COPY --from=dependencies /dndvault/node_modules ./node_modules/
RUN yarn build

FROM node:16.16.0 as runner
WORKDIR /dndvault
ENV NODE_ENV production

COPY --from=builder /dndvault/public ./public
COPY --from=builder /dndvault/package.json ./package.json
COPY --from=builder /dndvault/.next ./.next
COPY --from=builder /dndvault/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]