#/usr/bin
# 当前镜像版本号
version="1.0.0";
# 镜像名
imageName="jsm_next_web";
# 容器名
containerName="jsm_next_web";
# 主机端口
port="3000"
# 【readonly】容器端口
exposePort="9527"

cd ..

echo "--> docker build"
docker build -t "$imageName":"$version" .
if [ "$(docker ps -aq -f name=$containerName)" ]; then
    # Cleanup container
    docker rm -f "$containerName" || echo 'continue'
fi
docker run -d -p "$port":"$exposePort" --restart=always --name "$containerName" "$imageName":"$version"
docker rmi -f "$imageName":"$version"
