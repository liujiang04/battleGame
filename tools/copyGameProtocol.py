# -*- coding: utf-8 -*-
# @Time    : 2018/10/19 下午8:03
import os

import shutil


def mkdir(path):
    path = path.strip()
    path = path.rstrip("\\")
    isExists = os.path.exists(path)
    if not isExists:
        os.makedirs(path)
        return True
    else:
        return False


def copyfile(srcfile, dstfile):
    if not os.path.isfile(srcfile):
        print("%s not exist!" % (srcfile))
    else:
        fpath, fname = os.path.split(dstfile)
        if not os.path.exists(fpath):
            '''创建路径'''
            mkdir(fpath)
        '''复制文件'''
        shutil.copyfile(srcfile, dstfile)
        print("copy %s -> %s" % (srcfile, dstfile))

    # gameprotocol.d.ts  添加
    # import  $protobuf = protobuf
    # declare module gp{
    # 最后一行
    # }



copyfile("/Users/admin/Documents/ljworkspace/local/java/serverDemo/tools/GameProtocol.d.ts",
         "/Users/admin/Documents/ljworkspace/local/cocos/workPro/cocosjsDemo/egretDemo/normalDemo/libs/GameProtocol.d.ts")
copyfile("/Users/admin/Documents/ljworkspace/local/java/serverDemo/tools/GameProtocol.d.ts",
         "/Users/admin/Documents/ljworkspace/local/cocos/workPro/cocosjsDemo/egretDemo/normalDemo/libs/GameProtocol2.d.ts")
copyfile("/Users/admin/Documents/ljworkspace/local/java/serverDemo/proto/GameProtocol.proto",
         "/Users/admin/Documents/ljworkspace/local/cocos/workPro/cocosjsDemo/egretDemo/normalDemo/resource/proto/GameProtocol.proto")

filee = os.path.realpath(__file__)
fpath,fname = os.path.split(filee)
#sed 命令  像个屎

GameProtocoldtsFile = "/Users/admin/Documents/ljworkspace/local/cocos/workPro/cocosjsDemo/egretDemo/normalDemo/libs/GameProtocol.d.ts"
gp2 = "/Users/admin/Documents/ljworkspace/local/cocos/workPro/cocosjsDemo/egretDemo/normalDemo/libs/GameProtocol2.d.ts"
sel = "sed  -i '' 1,2d " + GameProtocoldtsFile
os.system(sel)
add =  "sed -i '' '1i\\'$'\n''import $protobuf=protobuf;declare module gp{\n' " + GameProtocoldtsFile
os.system(add)
os.system('echo "}" >> '+ GameProtocoldtsFile)

sel = "sed  -i '' 1,2d " + gp2
os.system(sel)
add =  "sed -i '' '1i\\'$'\n''declare module pb{\n' " + gp2
os.system(add)
os.system('echo "}" >> '+ gp2)





