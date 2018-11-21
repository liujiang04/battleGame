class NodeActor extends eui.Group {
    mc: egret.MovieClip
    beishu = 20
    mcType: string
    played = false
    pos: any
    hurtLabel: HurtLabel //伤害值
    pifuName: string//皮肤
    NodeHeroData: NodeHeroData //血条 等
    constructor() {
        super()
        this.mc = new egret.MovieClip()
        this.addChild(this.mc)
        this.hurtLabel = new HurtLabel()
        this.addChild(this.hurtLabel)
        this.hurtLabel.y = -150
        gt.hurtLabel = this.hurtLabel
        this.NodeHeroData = new NodeHeroData()
        this.NodeHeroData.x = -90
        this.NodeHeroData.y = -150
        this.addChild(this.NodeHeroData)

    }

    deleteBlud() {
        this.NodeHeroData.deleteblud()

    }

    setPifu(pifuName: string) {
        this.pifuName = pifuName
    }
    setName(name: string) {
        this.NodeHeroData.setName(name)
    }

    playMCAction(actName) {
        this.mc.gotoAndPlay(actName, -1)
    }

    public changeActorPos(key) {
        this.x = this.x + key.x * this.beishu
        this.y = this.y + key.y * this.beishu
        this.changeMcData(key)
        this.pos = key
    }

    public changeMcData(type, pifuName = "") {
        let mcT = ''
        if (type.x == -1 || type.x == 1) {//left
            mcT = "3d"
        } else if (type.y == 1) {//down
            mcT = "2d"
        } else if (type.y == -1) {//up
            mcT = "1d"
        }
        mcT = this.pifuName + mcT
        this.mc.scaleX = 1
        if (type.x == -1 || type.x == 1) {
            if (type.x == -1) {
                this.mc.scaleX = 1
            } else {
                this.mc.scaleX = -1
            }
        }
        if (this.mcType == type) {
            return
        }
        this.mcType = type
        let movieClipData = gt.getMovieClipData(mcT + '_json', mcT + '_png', this.hashCode)
        this.mc.movieClipData = movieClipData
        this.mc.visible = true
        this.playMCAction(mcT.substring(mcT.length - 2))

        egret.callLater(() => {
            // this.mc.anchorOffsetY = this.mc.anchorOffsetX = .5
            // this.mc.x = this.mc.width// / 2
            // this.mc.y = this.mc.height// / 2
        }, this)
    }

    runSkill(kill?) {
        //anfdq_json,anfdq_png
        let spacename = kill || "w"
        let killObj = gt.space[spacename]
        if (!killObj) {
            console.log("按键 ", spacename, "下没有 配置")
            return
        }
        let bul = new Bullet()
        let mc = new egret.MovieClip()
        bul.addChild(mc)
        bul.mc = mc
        let movieClipData = gt.getMovieClipData(killObj.Skill + '_json', killObj.Skill + '_png', this.hashCode)
        mc.movieClipData = movieClipData
        bul.visible = true
        this.parent.addChild(bul)
        let type = this.pos
        bul.x = this.x
        bul.y = this.y

        if (type.x == -1) {//left
            bul.rotation = -90
        } else if (type.x == 1) {//right
            bul.rotation = 90
        } else if (type.y == 1) {//down
            bul.rotation = 180
        } else if (type.y == -1) {//up
            bul.rotation = 0
        }
        let x = type.x * gt.lang
        let y = type.y * gt.lang
        egret.Tween.get(bul).to({x: bul.x + x, y: bul.y + y}, 2000).call(() => {
            bul.tryRrmoveFromParent()

        })
        mc.gotoAndPlay('action', 1)
        LayerGuajiBattle.Ins.RegisterModule(bul)

        this.hurtLabel.createLabel(Math.floor(Math.random() * 5000 - 2500))

        gt.SocketClientJson.send({"fasongzidan":2})
    }
    //右键直接 改变位置  应该加一条线
    changePosByClickMap(pos: gt.pos, cb?: Function, cbtar?: any) {
        egret.Tween.removeTweens(this)
        let mc = this
        if( mc.x == pos.x && pos.y == mc.y){
            return
        }
        console.log("开始位置 ", mc.x, mc.y)
        console.log("结束位置 ", pos.x, pos.y)
        let bePos = {x: mc.x, y: mc.y}
        let endPos = {x: pos.x, y: pos.y}

        this.changeActorPos(this.getChangeOnePosByPos(bePos, endPos))

        let time = gt.getGougu(bePos, endPos) / gt.runStep * 1000
        egret.Tween.get(mc).to({x: pos.x, y: pos.y}, time).call(() => {
            if (cb) {
                cb.call(cbtar)
            } else {
                gt.guajiBg.tryRemoveLine()

            }
        })
        gt.guajiBg.drawLine(bePos, endPos)
    }

    //todo  通过 正余弦 设置 方向 并且 设置 旋转角度

    getChangeOnePosByPos(bePos: gt.pos, endPos: gt.pos) {

        let px = endPos.x - bePos.x
        let py = endPos.y - bePos.y

        let isXmax = (Math.abs(px) - Math.abs(py)) > 0
        let x_one = isXmax ? px / Math.abs(px) : 0
        let y_one = isXmax ? 0 : py / Math.abs(py)
        return {x: x_one, y: y_one}
    }


}