# apps/backend/Dockerfile

FROM node:20-alpine AS builder

WORKDIR /app

# 경로 주의: Docker context는 루트, 파일은 apps/backend 안에 있음
COPY apps/backend/package*.json ./
COPY apps/backend/nest-cli.json ./
COPY apps/backend/tsconfig*.json ./

# 소스 전체 복사 (libs, 다른 앱이 없다면 아래 줄만 있어도 됨)
COPY apps/backend/src ./src

RUN npm install
RUN npm run build

# 실행 이미지
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY apps/backend/package*.json ./
COPY apps/backend/tsconfig*.json ./

RUN npm install --only=production

CMD ["node", "dist/main.js"]

