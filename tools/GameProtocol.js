/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * MSG_HEADER enum.
 * @exports MSG_HEADER
 * @enum {string}
 * @property {number} loginC2S=1 loginC2S value
 * @property {number} loginS2C=2 loginS2C value
 */
$root.MSG_HEADER = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "loginC2S"] = 1;
    values[valuesById[2] = "loginS2C"] = 2;
    return values;
})();

$root.loginC2S = (function() {

    /**
     * Properties of a loginC2S.
     * @exports IloginC2S
     * @interface IloginC2S
     * @property {string|null} [name] loginC2S name
     * @property {string|null} [sex] loginC2S sex
     */

    /**
     * Constructs a new loginC2S.
     * @exports loginC2S
     * @classdesc Represents a loginC2S.
     * @implements IloginC2S
     * @constructor
     * @param {IloginC2S=} [properties] Properties to set
     */
    function loginC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * loginC2S name.
     * @member {string} name
     * @memberof loginC2S
     * @instance
     */
    loginC2S.prototype.name = "";

    /**
     * loginC2S sex.
     * @member {string} sex
     * @memberof loginC2S
     * @instance
     */
    loginC2S.prototype.sex = "";

    /**
     * Creates a new loginC2S instance using the specified properties.
     * @function create
     * @memberof loginC2S
     * @static
     * @param {IloginC2S=} [properties] Properties to set
     * @returns {loginC2S} loginC2S instance
     */
    loginC2S.create = function create(properties) {
        return new loginC2S(properties);
    };

    /**
     * Encodes the specified loginC2S message. Does not implicitly {@link loginC2S.verify|verify} messages.
     * @function encode
     * @memberof loginC2S
     * @static
     * @param {IloginC2S} message loginC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    loginC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.sex != null && message.hasOwnProperty("sex"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sex);
        return writer;
    };

    /**
     * Encodes the specified loginC2S message, length delimited. Does not implicitly {@link loginC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof loginC2S
     * @static
     * @param {IloginC2S} message loginC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    loginC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a loginC2S message from the specified reader or buffer.
     * @function decode
     * @memberof loginC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {loginC2S} loginC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    loginC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.sex = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a loginC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof loginC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {loginC2S} loginC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    loginC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a loginC2S message.
     * @function verify
     * @memberof loginC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    loginC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.sex != null && message.hasOwnProperty("sex"))
            if (!$util.isString(message.sex))
                return "sex: string expected";
        return null;
    };

    /**
     * Creates a loginC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof loginC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {loginC2S} loginC2S
     */
    loginC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.loginC2S)
            return object;
        var message = new $root.loginC2S();
        if (object.name != null)
            message.name = String(object.name);
        if (object.sex != null)
            message.sex = String(object.sex);
        return message;
    };

    /**
     * Creates a plain object from a loginC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof loginC2S
     * @static
     * @param {loginC2S} message loginC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    loginC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.sex = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        return object;
    };

    /**
     * Converts this loginC2S to JSON.
     * @function toJSON
     * @memberof loginC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    loginC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return loginC2S;
})();

$root.loginS2C = (function() {

    /**
     * Properties of a loginS2C.
     * @exports IloginS2C
     * @interface IloginS2C
     * @property {string|null} [id] loginS2C id
     * @property {string|null} [name] loginS2C name
     * @property {string|null} [sex] loginS2C sex
     * @property {Imod|null} [ds] loginS2C ds
     */

    /**
     * Constructs a new loginS2C.
     * @exports loginS2C
     * @classdesc Represents a loginS2C.
     * @implements IloginS2C
     * @constructor
     * @param {IloginS2C=} [properties] Properties to set
     */
    function loginS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * loginS2C id.
     * @member {string} id
     * @memberof loginS2C
     * @instance
     */
    loginS2C.prototype.id = "";

    /**
     * loginS2C name.
     * @member {string} name
     * @memberof loginS2C
     * @instance
     */
    loginS2C.prototype.name = "";

    /**
     * loginS2C sex.
     * @member {string} sex
     * @memberof loginS2C
     * @instance
     */
    loginS2C.prototype.sex = "";

    /**
     * loginS2C ds.
     * @member {Imod|null|undefined} ds
     * @memberof loginS2C
     * @instance
     */
    loginS2C.prototype.ds = null;

    /**
     * Creates a new loginS2C instance using the specified properties.
     * @function create
     * @memberof loginS2C
     * @static
     * @param {IloginS2C=} [properties] Properties to set
     * @returns {loginS2C} loginS2C instance
     */
    loginS2C.create = function create(properties) {
        return new loginS2C(properties);
    };

    /**
     * Encodes the specified loginS2C message. Does not implicitly {@link loginS2C.verify|verify} messages.
     * @function encode
     * @memberof loginS2C
     * @static
     * @param {IloginS2C} message loginS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    loginS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.sex != null && message.hasOwnProperty("sex"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sex);
        if (message.ds != null && message.hasOwnProperty("ds"))
            $root.mod.encode(message.ds, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified loginS2C message, length delimited. Does not implicitly {@link loginS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof loginS2C
     * @static
     * @param {IloginS2C} message loginS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    loginS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a loginS2C message from the specified reader or buffer.
     * @function decode
     * @memberof loginS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {loginS2C} loginS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    loginS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.sex = reader.string();
                break;
            case 4:
                message.ds = $root.mod.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a loginS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof loginS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {loginS2C} loginS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    loginS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a loginS2C message.
     * @function verify
     * @memberof loginS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    loginS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.sex != null && message.hasOwnProperty("sex"))
            if (!$util.isString(message.sex))
                return "sex: string expected";
        if (message.ds != null && message.hasOwnProperty("ds")) {
            var error = $root.mod.verify(message.ds);
            if (error)
                return "ds." + error;
        }
        return null;
    };

    /**
     * Creates a loginS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof loginS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {loginS2C} loginS2C
     */
    loginS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.loginS2C)
            return object;
        var message = new $root.loginS2C();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.sex != null)
            message.sex = String(object.sex);
        if (object.ds != null) {
            if (typeof object.ds !== "object")
                throw TypeError(".loginS2C.ds: object expected");
            message.ds = $root.mod.fromObject(object.ds);
        }
        return message;
    };

    /**
     * Creates a plain object from a loginS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof loginS2C
     * @static
     * @param {loginS2C} message loginS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    loginS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.sex = "";
            object.ds = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.ds != null && message.hasOwnProperty("ds"))
            object.ds = $root.mod.toObject(message.ds, options);
        return object;
    };

    /**
     * Converts this loginS2C to JSON.
     * @function toJSON
     * @memberof loginS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    loginS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return loginS2C;
})();

$root.mod = (function() {

    /**
     * Properties of a mod.
     * @exports Imod
     * @interface Imod
     * @property {string|null} [mod1] mod mod1
     * @property {string|null} [mod2] mod mod2
     */

    /**
     * Constructs a new mod.
     * @exports mod
     * @classdesc Represents a mod.
     * @implements Imod
     * @constructor
     * @param {Imod=} [properties] Properties to set
     */
    function mod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mod mod1.
     * @member {string} mod1
     * @memberof mod
     * @instance
     */
    mod.prototype.mod1 = "";

    /**
     * mod mod2.
     * @member {string} mod2
     * @memberof mod
     * @instance
     */
    mod.prototype.mod2 = "";

    /**
     * Creates a new mod instance using the specified properties.
     * @function create
     * @memberof mod
     * @static
     * @param {Imod=} [properties] Properties to set
     * @returns {mod} mod instance
     */
    mod.create = function create(properties) {
        return new mod(properties);
    };

    /**
     * Encodes the specified mod message. Does not implicitly {@link mod.verify|verify} messages.
     * @function encode
     * @memberof mod
     * @static
     * @param {Imod} message mod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mod1 != null && message.hasOwnProperty("mod1"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mod1);
        if (message.mod2 != null && message.hasOwnProperty("mod2"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.mod2);
        return writer;
    };

    /**
     * Encodes the specified mod message, length delimited. Does not implicitly {@link mod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mod
     * @static
     * @param {Imod} message mod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mod message from the specified reader or buffer.
     * @function decode
     * @memberof mod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mod} mod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mod1 = reader.string();
                break;
            case 2:
                message.mod2 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mod} mod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mod message.
     * @function verify
     * @memberof mod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mod1 != null && message.hasOwnProperty("mod1"))
            if (!$util.isString(message.mod1))
                return "mod1: string expected";
        if (message.mod2 != null && message.hasOwnProperty("mod2"))
            if (!$util.isString(message.mod2))
                return "mod2: string expected";
        return null;
    };

    /**
     * Creates a mod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mod} mod
     */
    mod.fromObject = function fromObject(object) {
        if (object instanceof $root.mod)
            return object;
        var message = new $root.mod();
        if (object.mod1 != null)
            message.mod1 = String(object.mod1);
        if (object.mod2 != null)
            message.mod2 = String(object.mod2);
        return message;
    };

    /**
     * Creates a plain object from a mod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mod
     * @static
     * @param {mod} message mod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mod.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mod1 = "";
            object.mod2 = "";
        }
        if (message.mod1 != null && message.hasOwnProperty("mod1"))
            object.mod1 = message.mod1;
        if (message.mod2 != null && message.hasOwnProperty("mod2"))
            object.mod2 = message.mod2;
        return object;
    };

    /**
     * Converts this mod to JSON.
     * @function toJSON
     * @memberof mod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mod;
})();

module.exports = $root;
