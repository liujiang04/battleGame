##从 https://github.com/google/protobuf/releases 下载编译器，并设置环境变量。

./configure --prefix=/usr/local/protobuf2.5    要安装到的目录
make
make install
# PS：之前还用过2.3版本protobuf，make时会报错，解决方法：
# 在src/google/protobuf/message.cc中，添加`#include<istream>`



~/.bash_profile 

export PATH=/usr/local/protobug3.6.1/bin

source ~/.bash_profile   #生效


add log4j 



安装 protobufjs 
#sudo npm install protobufjs -g
