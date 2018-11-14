module gp {
    export function initAllMessage(protoPath: string, cb: Function, tar: any) {

        protobuf.load(protoPath, function (err, root) {
            if (err)
                throw err;
            //gt.setProp(gp,root.nested)
            console.log(root)
            for (let ket in root.nested) {
                let key: any = ket
                if (root.nested[key] instanceof protobuf.Type) {
                    pb[ket] = root.lookupType(ket)
                    gp[ket] = ()=>{
                        return {"msdID":root["MSG_HEADER"][key]}
                         //return {}
                    }
                } else if (root.nested[key] instanceof protobuf.Enum) {
                    pb[ket] = root.lookupEnum(ket)
                }
            }
            cb.call(tar)
        });
    }
}