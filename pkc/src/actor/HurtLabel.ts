class HurtLabel extends eui.Component {
    constructor() {
        super()
    }
    public createLabel(num:number) {

        let color = num >= 0 ? gt.TextColors.green : gt.TextColors.red

        let label = new eui.Label()
        label.textColor = color
        label.text = String(num)
        label.anchorOffsetX  = 0.5
        this.addChild(label)
        label.scaleX = label.scaleY = .2
        egret.Tween.get(label).to({scaleX:2,scaleY:2,y:label.y - 100 },500, egret.Ease.sineInOut)
            .to({scaleX:1,scaleY:1, },100, egret.Ease.sineIn).call(()=>{
            label.parent.removeChild(label)
        })
    }

}