class NodeGuajiBG extends eui.Component {
    count = 28
    imgSize = 256//每个图片的大小  长宽 一样
    runLine: egret.Shape
    maskRunLine: egret.Shape
    bgFocus: eui.Group

    constructor() {
        super()
    }

    childrenCreated() {
        super.childrenCreated()
        //this.createBG()
        this.createColorBG()
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            console.log('x', e.stageX, 'y', e.stageY)
            let pos = <gt.pos>{}
            pos.x = e.stageX
            pos.y = e.stageY
            let msg = new ChangePosMSG()
            msg.sysID = gt.actor.sysID
            msg.x = pos.x
            msg.y = pos.y
            gt.SocketClientJson.send(msg)
            //gt.actor.changePosByClickMap(pos)
        }, this)
    }

    createBG() {
        this.bgFocus = new eui.Group()
        this.bgFocus.width = this.bgFocus.height = 0
        this.bgFocus.rotation = 90
        this.bgFocus.x = 2000
        this.addChild(this.bgFocus)
        for (let i = 0; i < this.count / 4; i++) {
            for (let j = 1; j <= this.count / 7; j++) {
                let index = i * 4 + j
                let img = new eui.Image("anlin" + index + "_jpg")
                img.x = (j - 1) * this.imgSize
                img.y = i * this.imgSize
                this.bgFocus.addChild(img)
            }
        }
    }

    private createColorBG() {


        let bgOut = new egret.Shape()
        bgOut.graphics.beginFill(0x000000)
        bgOut.graphics.drawRect(0, 0, gt.size.width, gt.size.height)
        bgOut.graphics.endFill()
        this.addChild(bgOut)

        let bgIn = new egret.Shape()
        bgIn.graphics.beginFill(0x03A89E )
        bgIn.graphics.drawRect(gt.size.width * .025, gt.size.height * .025, gt.size.width * .95, gt.size.height * .95)
        bgIn.graphics.endFill()
        this.addChild(bgIn)

    }

    // 通过 mc 位置 划线  并且  页面上只能存在一根线  线随着 移动而简短
    // 1 使用遮罩实现

    drawLine(beginPos: gt.pos, endPos: gt.pos) {
        this.tryRemoveLine()
        this.runLine = new egret.Shape()
        let shp = this.runLine
        shp.graphics.lineStyle(2, 0x000000)
        shp.graphics.moveTo(beginPos.x, beginPos.y)
        shp.graphics.lineTo(endPos.x, endPos.y)
        shp.graphics.endFill()

        let shp2 = this.maskRunLine = new egret.Shape()
        shp2.graphics.lineStyle(2, 0x00ff00)
        shp2.graphics.moveTo(beginPos.x, beginPos.y)
        shp2.graphics.lineTo(endPos.x, endPos.y)
        shp2.graphics.endFill()
        shp2.visible = false
        this.addChild(shp2)
        shp.mask = shp2
        //shp2.blendMode = egret.BlendMode.ERASE;
        window['shp'] = shp

        let time = gt.getGougu(beginPos, endPos) / gt.runStep * 1000

        egret.Tween.get(shp).to({x: endPos.x - beginPos.x, y: endPos.y - beginPos.y}, time).call(() => {
            //mc.parent.removeChild(mc)
        })

        this.addChild(shp)
    }

    tryRemoveLine() {
        if (this.runLine && this.runLine.parent) {
            this.runLine.parent.removeChild(this.runLine)
            this.runLine = undefined
        }
        if (this.maskRunLine && this.maskRunLine.parent) {
            this.maskRunLine.parent.removeChild(this.maskRunLine)
            this.maskRunLine = undefined
        }

    }


}