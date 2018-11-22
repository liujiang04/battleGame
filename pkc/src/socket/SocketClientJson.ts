

class SocketClientJson  {
    private static _instance: SocketClientJson
    eventMaps = {}
    socket: any
    makeMessageIntall: any
    messageList = []
    constructor() {
    }
    public beginIntvall() {
        let self = this
        this.makeMessageIntall = window.setInterval(function () {
            self.makeMessageProcess()
        }, 33)
    }

    makeMessageProcess() {
        if (this.messageList == undefined || this.messageList.length <= 0) {
            return
        }
        // ;
        let len = this.messageList.length
        // 一次性不要处理太多消息,暂定5个
        let messageListBake: any = [];
        if (len < 5) {
            messageListBake = this.messageList
            this.messageList = []
        } else {
            messageListBake = this.messageList.splice(0, 5)
        }
        messageListBake.forEach((message) => {
            try {
                this.messageProcess(message)
            }
            catch (e) {
                Logger.error(e)
            }
        })
    }

    public registerOnEvent(event_id:any, cb, target, once?) {

        let events: Array<any> = this.eventMaps[event_id.id.toString()]
        if (!events) {
            events = []
            this.eventMaps[event_id.id.toString()] = events
        }
        events.push({
            target: target,
            invoker: cb,
            once: once || false
        })
        return
    }

    public unregisterOnEvent(event_id:any, target) {
        let id  = event_id.id
        let events = this.eventMaps[id.toString()]
        if (events) {
            if (!target) {
                this.eventMaps[id.toString()] = null
                return
            }
            let items = events.filter((item) => {
                return item.target != target // 找到不等于 target 的保留下来
            })
            this.eventMaps[id.toString()] = items
        }

        return
    }

    public unregisterAllOnTarget(target) {
        if (!target) {
            return
        }

        Object.keys(this.eventMaps).forEach((key) => {
            let items = this.eventMaps[key].filter((item) => {
                return item.target != target // 找到不等于 target 的保留下来
            })
            this.eventMaps[key] = items
        })
        return
    }

    public connectToCoreServer(host: String, port: string, cb: Function, cbTar: any) {
        // timeOutReconnectClear()
        // timeOutReconnectInit()
        let self = this
        //socketWaitCnt.clearMessage()
        WebSocket = window.WebSocket || window.MozWebSocket
        let socket: any
        if (WebSocket) {
            let preStr = ''
            if (gt.isHttps()) {
                preStr = "wss://"
            } else {
                preStr = "ws://"
            }
            let url = preStr + host + ':' + port
            socket = new WebSocket(url)
            //socket.binaryType = "arraybuffer" // We are talking binary
            //链接失败
            socket.onerror = this.onerror
            // 连接成功
            socket.onopen = () => {
                cb.call(cbTar)
            } //this.onopen.call(cb)
            // 断开连接
            socket.onclose = this.onclose

            // 收到指令
            let self = this
            socket.onmessage = (event) => {
                let data = event.data
                self.messageList.push(this.decode(data))

            }
            this.socket = socket
            this.beginIntvall()
        } else {
            throw "Your browser does not support Web Socket."
        }
        return
    }
    public send(objMsg, isSyncMessage?: boolean) {
        Logger.log("send",objMsg)
        this.socket.send(gt.base64.encode(JSON.stringify(objMsg)))
    }

    public onopen(cb: Function) {
        Logger.error('The connect begin!')
    }
    public onerror(...paro) {

    }
    public onclose() {
        Logger.error('The connect is lost!')
    }
    public decode(data) {
        var alldata = JSON.parse(data)
        var msg = gt.base64.decode(alldata.data.message)
        let object = JSON.parse(msg)
        console.log(object)
        object.sysID = alldata.data.sysID//区分人物
        Logger.log("onmessage",object)
        return object
    }
    // 消息回调接口
    public messageProcess(msg) {
        if (!msg) {
            return
        }
        let key = msg.__id
        let events = this.eventMaps[key]
        if (events) {
            // invoker回调中有可能会对events进行修改，所以必须等所有回调执行完成之后，才能处理once参数
            let list = []
            list.push(events)
            events.forEach((event) => {
                event.invoker.call(event.target, msg)
            })
            // 重新取值
            events = this.eventMaps[key]
            // 排除掉只能执行一次的那些 event
            let keeps = events.filter((event) => {
                return !event.once
            })
            this.eventMaps[key] = keeps
        }
    }
}
