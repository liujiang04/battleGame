namespace msg {
    export class LoginMSG implements BaseMSG {
        static id = 1
        __id = LoginMSG.id
        sysID :string
        constructor() {
        }
        name:string

    }
}