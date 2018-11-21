namespace Sys {
    export function initSocketLister() {
        gt.SocketClientJson.registerOnEvent(LoginMSG, this.onLoginMSG, Sys)


    }

    //为了简单 只在自己登录后 推送 其他消息
    export function onLoginMSG(msg: msg.LoginMSG) {
        LayerGuajiBattle.Ins.createZhuJue(msg)
    }

    export function acterLogin() {
        gt.SocketClientJson.registerOnEvent(ChangePosMSG, this.onChangePosMSG, this)

    }

    export function onChangePosMSG(msg: msg.ChangePosMSG) {
        //如果没有 actor  直接创建  并且设置位置 下次就可以直接 修改位置了  但是不要显示  寻路线
        if (gt.actor.sysID != msg.__sysID) {//不是自己

        }


    }

}