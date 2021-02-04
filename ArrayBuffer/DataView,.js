// 构造函数
// new DataView(ArrayBuffer buffer [, 字节起始位置 [, 长度]]);

// 实例属性 同TypedArray
// buffer  |  byteLength  |  byteOffset

// 实例方法 getInt8 | getUint8 ...
// 参数1：正的字节序号 —— 从哪个字节开始读取
// 参数2：是否使用小端字节序使用
const buffer = new ArrayBuffer(24);
const dv = new DataView(buffer);

const v1 = dv.getInt8(0);
const v2 = dv.getInt16(1)
const v3 = dv.getInt16(3)