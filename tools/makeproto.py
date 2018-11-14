import os

'''  proto 文件 存放在 后端  后端改完后 直接复制到 前端 resources  '''
if __name__ == '__main__':
    filee = os.path.realpath(__file__)
    fpath, fname = os.path.split(filee)
    projectFile = fpath.replace("/tools", "")
    print('项目 路径', projectFile)
    print('开始生成 java Proto文件 ')
    javaProto = 'protoc --proto_path=. --java_out=' + projectFile + '/nettywebsocket/src/main/java/com/game/socket/protobuf/ GameProtocol.proto'
    os.system(javaProto)
    print('java Proto文件 生成 完毕')

    print('java Proto文件 生成 完毕')
    ss = 'pbjs -t static-module -w commonjs -o ' + 'GameProtocol.js ' + projectFile + '/nettywebsocket/src/resources/protobuf/GameProtocol.proto'
    ts = 'pbts -o GameProtocol.d.ts GameProtocol.js'
    os.system(ss)
    os.system(ts)
