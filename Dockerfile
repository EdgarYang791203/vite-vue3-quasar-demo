# 使用 Node.js 官方映像作為基礎映像
FROM node:18.15.0 AS builder

# 設置工作目錄
WORKDIR /usr/src/app

# 複製 package.json文件
COPY package.json package-lock.json ./

# 安裝依賴
RUN npm install

# 清除緩存
RUN npm cache clean --force

# 複製其餘的專案文件
COPY . .

# 構建專案
RUN npm run build

# 使用 Nginx 提供靜態文件（生產環境）
FROM nginx:alpine AS production

# 複製靜態文件到 Nginx 默認的服務目錄
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# 暴露應用程序使用的端口
EXPOSE 80

# 設置默認的命令來啟動應用
# CMD [ "npm", "run", "dev" ]

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]