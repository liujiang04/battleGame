namespace gt {
    export let actor: NodeActor
    export let guajiBg: NodeGuajiBG
    export let hurtLabel: any
    export let SocketClient:SocketClient
    export let SocketClientJson:SocketClientJson
    export let base64= new Base64()

    export function getMovieClipData(fileJson: string, filePng: string, hashId?: number, id?: string) {
        let data = RES.getRes(fileJson);
        let txtr = RES.getRes(filePng);
        let mcFactory = new egret.MovieClipDataFactory(data, txtr);
        return mcFactory.generateMovieClipData(id)
    }

    //技能最长 动作
    export let lang = 0
    export let size = {width: 0, height: 0}

    export function initConfig() {
        gt.lang = Math.max.apply(Math, [egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight])
        size = {
            width: egret.MainContext.instance.stage.stageWidth,
            height: egret.MainContext.instance.stage.stageHeight
        }
    }

    export interface pos {
        x: number,
        y: number
    }

    export const runStep = 300  //每秒 走的距离

    export function getGougu(beginPos: gt.pos, endPos: gt.pos) {
        return Math.sqrt(Math.pow(beginPos.x - endPos.x, 2) + Math.pow(endPos.y - beginPos.y, 2))

    }

    export function hitTest(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
        //两物品重叠的碰撞判断方式
        var rect1: egret.Rectangle = obj1.getBounds();
        var rect2: egret.Rectangle = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    }

    export function hitAcotrBullet(bullet: Bullet, actor: NodeActor): boolean {
        //两物品重叠的碰撞判断方式
        var rect1: egret.Rectangle = bullet.getBounds();
        var rect2: egret.Rectangle = actor.getBounds();
        rect1.x = bullet.x;
        rect1.y = bullet.y;
        rect2.x = actor.x - actor.mc.width;
        rect2.y = actor.y - actor.mc.height;
        return rect1.intersects(rect2);
    }

    export function setProp(tgt, props) {
        if (!tgt || !props) {
            return
        }
        for (let key in props) {
            tgt[key] = props[key]
        }
    }

    export function arrayWeighting(arr: Array<any>) {
        let hasMap = {}
        let list1 = []
        arr.forEach((item) => {
            if (!hasMap[item]) {
                list1.push(item)
                hasMap[item] = true
            }
        })
        return list1
    }

    export function isHttps() {
        return window.location.href.indexOf('https://') == 0
    }

    export var getFnName = function (callee) {
        var _callee = callee.toString().replace(/[\s\?]*/g, ""),
            comb = _callee.length >= 50 ? 50 : _callee.length;
        _callee = _callee.substring(0, comb);
        var name = _callee.match(/^function([^\(]+?)\(/);
        if (name && name[1]) {
            return name[1];
        }
        var caller = callee.caller,
            _caller = caller.toString().replace(/[\s\?]*/g, "");
        var last = _caller.indexOf(_callee),
            str = _caller.substring(last - 30, last);
        name = str.match(/var([^\=]+?)\=/);
        if (name && name[1]) {
            return name[1];
        }
        return "anonymous"
    };


}