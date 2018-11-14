// w  上
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 87://w
            console.log("w up")
            gt.actor.runSkill("w")
            //gt.actor.changeActorPos({y: -1, x: 0})
            break
        case 83://s
            console.log("p1 down")
            gt.actor.changeActorPos({y: +1, x: 0})
            break
        case 65://a
            console.log("p1 left")
            gt.actor.changeActorPos({y: 0, x: -1})
            break
        case 68://d
            console.log("p1 right")
            gt.actor.changeActorPos({y: 0, x: 1})
            break
        case 37:
            console.log("p2 left")

            break
        case 38:
            console.log("p2 up")

            break
        case 39:
            console.log("p2 right")

            break
        case 40:
            console.log("p2 down")

            break
        case 74:
            console.log("j down")
            gt.actor.runSkill()

            break
        case 75:
            console.log("k down")
            gt.actor.runSkill()

            break

        case 81:
            console.log("q down")
            gt.actor.runSkill("q")

            break

        case 69:
            console.log("e down")
            gt.actor.runSkill("e")

            break
        case 82:
            console.log("r down")
            gt.actor.runSkill("r")

            break
        default:
            console.log("按了其他键", event.keyCode)
            break

    }

}


window.oncontextmenu = function (e) {  //可以频弊 默认属性
    //取消默认的浏览器自带右键 很重要！！
    e.preventDefault();
    console.log(e)
    let pos = <gt.pos>{}
    pos.x = e.clientX
    pos.y = e.clientY
    //获取我们自定义的右键菜单
}

// //关闭右键菜单，很简单
// window.onclick = function (e) {
// //用户触发click事件就可以关闭了，因为绑定在window上，按事件冒泡处理，不会影响菜单的功能
//     document.querySelector('#menu').style.height = 0;
// }

