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
