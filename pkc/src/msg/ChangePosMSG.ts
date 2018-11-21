namespace msg {
    export class ChangePosMSG implements BaseMSG {
        static id = 2
        __id = ChangePosMSG.id
        __sysID :any
        constructor() {
        }

        name: string
        sysID?: any
        x: number
        y: number
    }
}