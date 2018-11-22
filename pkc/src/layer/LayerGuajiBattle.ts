class LayerGuajiBattle extends eui.Component {
    nodeGuajiBG: NodeGuajiBG
    dicData: Array<Bullet>
    private static ins: LayerGuajiBattle;
    armArr: Array< NodeActor > = <any>{}

    constructor() {
        super()
        this.armArr = []
        this.dicData = []
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);

    }

    public static get Ins(): LayerGuajiBattle {
        if (this.ins == null) this.ins = new LayerGuajiBattle();
        return this.ins;
    }

    childrenCreated() {
        super.childrenCreated()
        this.initUI()
    }

    private initUI() {
        this.nodeGuajiBG = new NodeGuajiBG()
        this.addChild(this.nodeGuajiBG)
        gt.guajiBg = this.nodeGuajiBG
    }

    public createActor(msg:msg.LoginMSG) {
        let arm = new NodeActor()
        this.addChild(arm)
        arm.setName("arm" + msg.sysID )
        arm.setPifu('xiaoz')
        arm.changeActorPos({y: +1, x: 0})
        //arm.changePosByClickMap({x: 800, y: 400})
        arm.sysID = msg.sysID
        arm.isZhujue = false
        this.armArr[msg.sysID] = arm

        //qthis.randomArmPos(arm)
    }
    public createZhuJue(msg:msg.LoginMSG){
        let actor = new NodeActor()
        this.addChild(actor)
        actor.setPifu('ayin')
        actor.setName("actor" + msg.sysID)
        gt.actor = actor
        gt.actor.x = 0
        gt.actor.y = 0
        gt.actor.changeActorPos({y: +1, x: 0})
        actor.sysID = msg.sysID
        actor.isZhujue = true
        gt.actor = actor
    }

    private randomArmPos(arm) {
        let x = (gt.size.width - arm.x) * (Math.random() * 2 - 1) / 2
        let y = (gt.size.height - arm.y) * (Math.random() * 2 - 1) / 2

        let time = gt.getGougu({x: arm.x, y: arm.y}, {x: x, y: y}) / gt.runStep * 1000
        arm.changePosByClickMap({x: x, y: y}, () => {
            this.randomArmPos(arm)
        }, this)
        // egret.Tween.get(arm).to(, time).call(() => {
        //         this.randomArmPos(arm)
        //     }
        // )

    }

    update(e: egret.Event) {
        // for (let key in this.dicData) {
        //     let obj = this.dicData[key]
        //     for (let arm in this.armArr) {
        //         let armActor = this.armArr[arm]
        //         if (gt.hitAcotrBullet(obj, armActor)) {
        //             armActor.hurtLabel.createLabel(Math.floor(Math.random() * 5000 - 5000))
        //             obj.tryRrmoveFromParent()
        //             armActor.deleteBlud()
        //         }
        //     }
        // }
    }
    changeSomeOneActorPos(msg:msg.ChangePosMSG){
        let x = msg.x
        let y = msg.y
        if(gt.actor.sysID == msg.sysID){
            gt.actor.changePosByClickMap({x: x, y: y})
            return
        }

        if(this.armArr[msg.sysID] ) {
            this.armArr[msg.sysID].changePosByClickMapNoLine({x: x, y: y})
        }
    }


    shootBullet(msg:msg.BulletMSG){
        if(gt.actor.sysID == msg.sysID){
            gt.actor.runSkill(msg.killName)
            return
        }
        if(this.armArr[msg.sysID] ) {
            this.armArr[msg.sysID].runSkill(msg.killName)
        }
    }


    public RegisterModule(object: Bullet): void {
        this.dicData[object.hashCode] = object;
    }

    public UnRegisterModule(object: Bullet): void {
        if (this.dicData[object.hashCode]) {
            delete this.dicData[object.hashCode];
        }
    }

}