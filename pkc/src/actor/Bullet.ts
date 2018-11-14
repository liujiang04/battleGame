class Bullet extends egret.Sprite implements BulletObj {
    id: number
    mc: egret.MovieClip
    public get ID(): number {
        return this.id;
    }
    constructor() {
        super()
    }

    tryRrmoveFromParent() {
        egret.Tween.removeTweens(this.mc)
        if (this.parent) {
            this.parent.removeChild(this)
        }
        LayerGuajiBattle.Ins.UnRegisterModule(this)

    }

}

interface BulletObj {

    ID: number;

}
