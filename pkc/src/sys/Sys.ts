namespace Sys {
    export function initSocketLister() {
        gt.SocketClientJson.registerOnEvent(LoginMSG, onLoginMSG, Sys)
    }

    //为了简单 只在自己登录后 推送 其他消息
    export function onLoginMSG(msg: msg.LoginMSG) {
        if(!gt.actor){
            LayerGuajiBattle.Ins.createZhuJue(msg)
            afterLogin()
        }else {
            let ms = new ChangePosMSG()
            ms.x = 0
            ms.name = ''
            ms.y = 0
            ms.sysID = msg.sysID
            onChangePosMSG(ms)
        }
    }

    export function afterLogin() {
        gt.SocketClientJson.registerOnEvent(ChangePosMSG, onChangePosMSG, Sys)
    }

    export function onChangePosMSG(msg: msg.ChangePosMSG) {
        //如果没有 actor  直接创建  并且设置位置 下次就可以直接 修改位置了  但是不要显示  寻路线
        if (gt.actor.sysID != msg.sysID) {//不是自己
            if( !LayerGuajiBattle.Ins.armArr[msg.sysID]){//创建
                let Loginmsg = new LoginMSG()
                Loginmsg.sysID = msg.sysID
                LayerGuajiBattle.Ins.createActor(Loginmsg)
            }

        }
        LayerGuajiBattle.Ins.changeSomeOneActorPos(msg)

    }

}