## 部署的流程：


## 本地项目搭建：
npx create-next-app@latest my-next-app

新建git仓库：
然后本地执行：
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin 你的GitHub仓库地址
git push -u origin main --force // 强制执行
```

服务器提前部署nginx
apt install nginx -y
安装 Nginx Web 服务器软件。
<!-- 在通过 apt 安装或更新任何涉及 systemd 服务的软件后，养成习惯运行一次 sudo systemctl daemon-reload 是一个良好的运维习惯。 -->

systemctl status nginx 
查看 Nginx 服务的当前运行状态。

nginx 配置中注意页面位置的存放；




步骤 1：本地生成 SSH 密钥
ssh-keygen -t rsa
一直按回车，不要输密码。
步骤 2：查看私钥
cat ~/.ssh/id_rsa
把输出的全部内容复制。
步骤 3：在 GitHub 仓库添加 Secrets
仓库 → Settings → Secrets and variables → Actions → New repository secret
添加 2 个密钥：
REMOTE_HOST
值：你的阿里云公网 IP
SSH_KEY
值：你刚才复制的 id_rsa 私钥


注意服务器的node版本，使用nvm减弱内存压力，

## 部署