namespace msg {
    export class ChangePosMSG implements BaseMSG {
        static id = 2
        __id = ChangePosMSG.id
        sysID :any
        constructor() {
        }
        name:string
        x: number
        y: number
    }
}