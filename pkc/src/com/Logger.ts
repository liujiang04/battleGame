// log输出控制
module Logger {
    var _level = 0
    var _isCollect = false
    var _uuid = undefined
    var isToNet = false

    function isDebugEnabled(): boolean {
        return _level >= 0
    };

    export function log(...params) {
        if (_level > 0) {
            return
        } else {
            console.log.apply(console, arguments)
        }
    };

    export function logf(...params) { //无论什么环境都要打出来比较重要的流程才使用
        console.log.apply(console, arguments)
    }

    export function warn(...params) {
        console.warn.apply(console, arguments)
    };

    function isInfoEnabled(): boolean {
        return _level >= 1
    };

    function getFunctionName(func) {
        if (typeof func == 'function' || typeof func == 'object') {
            var name = ('' + func).match(/function\s*([\w\$]*)\s*\(/);
        }
        return name && name[1];
    }

    export function error(...params) {
        if (_level > 2) {
            return
        } else {
            console.error.apply(console, arguments)
            var stack = {};
            let errBake: any = Error
            if (errBake.captureStackTrace && this.touchReachTgt instanceof Function) {
                let obj: any = {}
                errBake.captureStackTrace(obj)
                stack = obj.stack
            } else {
                try {
                    throw new Error();
                } catch (e) {
                    // e.stack 中包含了堆栈数据，可以进行处理从而忽略不感兴趣的堆栈信息
                    stack = e.stack
                }
            }
            // (<any>window).reportError({ message: arguments[0], ezStack: stack })
        }
    };
} 