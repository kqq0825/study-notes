// 构造函数：ArrayBuffer
// 参数：需要分配的内存空间大小（字节） 1字节 = 8进制位
const buffer = new ArrayBuffer(32);

// 实例属性：byteLength 
// 所分配到的字节长度（可用于判断内存是否分配正确）
if (buffer.byteLength === 32) {
    console.log('success');
}  

// 实例方法：slice();
// 以字节为单位，将内存的一部分拷贝后生成新的ArrayBuffer对象。
// buffer.slice(0, 3);拷贝第0个到第三个字节。
const newBuffer = buffer.slice(0, 3);
console.log(newBuffer); // ArrayBuffer(3) {}

// ArrayBuffer静态方法：ArrayBuffer.isView();
// 判断是否为ArrayBuffer的视图实例
console.log(ArrayBuffer.isView(buffer)) // false;

const view = new Int16Array(buffer);
console.log(ArrayBuffer.isView(view)); // true

console.log(ArrayBuffer.isView(new Uint8Array([1,2])));// true

// ArrayBuffer与字符串的相互转化
// TextEncoder TextDecoder
// 构造函数的传参指定字符串编码方式
const decoder = new TextDecoder('utf8');
const decoderBuffer = new ArrayBuffer(16);
const decoderData = new Int32Array([1,2,3,4])
const result = decoder.decode(decoderBuffer);
const result1 = decoder.decode(decoderData);