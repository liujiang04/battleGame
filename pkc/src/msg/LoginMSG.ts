namespace msg {
    export class LoginMSG implements BaseMSG {
        static id = 2
        __id = LoginMSG.id
        __sysID :string
        constructor() {
        }
        name:string

    }
}