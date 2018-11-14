class NodeHeroData extends eui.Component {
    HPProgressBar: eui.ProgressBar
    bludNum: number
    name: string
    lblName: eui.Label

    constructor() {
        super()
        //初始化血条
        this.bludNum = gt.hpNum
        this.initHPB()
    }

    initHPB() {
        this.HPProgressBar = new eui.ProgressBar();
        this.HPProgressBar.maximum = this.bludNum;//设置进度条的最大值
        this.HPProgressBar.minimum = 0;//设置进度条的最小值
        this.HPProgressBar.width = 200;
        this.HPProgressBar.height = 30;
        this.addChild(this.HPProgressBar);
        this.HPProgressBar.value = this.bludNum;//设置进度条的初始值

    }

    setName(txt: string) {
        if (!this.lblName) {
            this.lblName = new eui.Label()
            this.addChild(this.lblName)
        }
        this.lblName.y = this.HPProgressBar.y - this.HPProgressBar.height - 20
        this.lblName.text = this.name = txt
    }

    deleteblud() {
        this.bludNum = this.bludNum - 0.1
        this.HPProgressBar.value = this.bludNum
    }


}