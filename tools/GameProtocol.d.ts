import * as $protobuf from "protobufjs";
/** MSG_HEADER enum. */
export enum MSG_HEADER {
    loginC2S = 1,
    loginS2C = 2
}

/** Properties of a loginC2S. */
export interface IloginC2S {

    /** loginC2S name */
    name?: (string|null);

    /** loginC2S sex */
    sex?: (string|null);
}

/** Represents a loginC2S. */
export class loginC2S implements IloginC2S {

    /**
     * Constructs a new loginC2S.
     * @param [properties] Properties to set
     */
    constructor(properties?: IloginC2S);

    /** loginC2S name. */
    public name: string;

    /** loginC2S sex. */
    public sex: string;

    /**
     * Creates a new loginC2S instance using the specified properties.
     * @param [properties] Properties to set
     * @returns loginC2S instance
     */
    public static create(properties?: IloginC2S): loginC2S;

    /**
     * Encodes the specified loginC2S message. Does not implicitly {@link loginC2S.verify|verify} messages.
     * @param message loginC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IloginC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified loginC2S message, length delimited. Does not implicitly {@link loginC2S.verify|verify} messages.
     * @param message loginC2S message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IloginC2S, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a loginC2S message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns loginC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): loginC2S;

    /**
     * Decodes a loginC2S message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns loginC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): loginC2S;

    /**
     * Verifies a loginC2S message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a loginC2S message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns loginC2S
     */
    public static fromObject(object: { [k: string]: any }): loginC2S;

    /**
     * Creates a plain object from a loginC2S message. Also converts values to other types if specified.
     * @param message loginC2S
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: loginC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this loginC2S to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a loginS2C. */
export interface IloginS2C {

    /** loginS2C id */
    id?: (string|null);

    /** loginS2C name */
    name?: (string|null);

    /** loginS2C sex */
    sex?: (string|null);

    /** loginS2C ds */
    ds?: (Imod|null);
}

/** Represents a loginS2C. */
export class loginS2C implements IloginS2C {

    /**
     * Constructs a new loginS2C.
     * @param [properties] Properties to set
     */
    constructor(properties?: IloginS2C);

    /** loginS2C id. */
    public id: string;

    /** loginS2C name. */
    public name: string;

    /** loginS2C sex. */
    public sex: string;

    /** loginS2C ds. */
    public ds?: (Imod|null);

    /**
     * Creates a new loginS2C instance using the specified properties.
     * @param [properties] Properties to set
     * @returns loginS2C instance
     */
    public static create(properties?: IloginS2C): loginS2C;

    /**
     * Encodes the specified loginS2C message. Does not implicitly {@link loginS2C.verify|verify} messages.
     * @param message loginS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IloginS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified loginS2C message, length delimited. Does not implicitly {@link loginS2C.verify|verify} messages.
     * @param message loginS2C message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IloginS2C, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a loginS2C message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns loginS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): loginS2C;

    /**
     * Decodes a loginS2C message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns loginS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): loginS2C;

    /**
     * Verifies a loginS2C message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a loginS2C message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns loginS2C
     */
    public static fromObject(object: { [k: string]: any }): loginS2C;

    /**
     * Creates a plain object from a loginS2C message. Also converts values to other types if specified.
     * @param message loginS2C
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: loginS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this loginS2C to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mod. */
export interface Imod {

    /** mod mod1 */
    mod1?: (string|null);

    /** mod mod2 */
    mod2?: (string|null);
}

/** Represents a mod. */
export class mod implements Imod {

    /**
     * Constructs a new mod.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imod);

    /** mod mod1. */
    public mod1: string;

    /** mod mod2. */
    public mod2: string;

    /**
     * Creates a new mod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mod instance
     */
    public static create(properties?: Imod): mod;

    /**
     * Encodes the specified mod message. Does not implicitly {@link mod.verify|verify} messages.
     * @param message mod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mod message, length delimited. Does not implicitly {@link mod.verify|verify} messages.
     * @param message mod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mod;

    /**
     * Decodes a mod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mod;

    /**
     * Verifies a mod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mod
     */
    public static fromObject(object: { [k: string]: any }): mod;

    /**
     * Creates a plain object from a mod message. Also converts values to other types if specified.
     * @param message mod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
