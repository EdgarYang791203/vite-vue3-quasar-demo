# 使用 Node.js 作為基礎映像
FROM node:18.15.0

# 設置工作目錄
WORKDIR /usr/src/app

# 複製依賴配置文件並安裝依賴
COPY package.json package-lock.json ./
RUN npm install

# 複製所有項目文件
COPY . .

# 開放端口（對應 Vite 的默認開發端口）
EXPOSE 5173

# 啟動開發伺服器
CMD ["npm", "run", "dev"]