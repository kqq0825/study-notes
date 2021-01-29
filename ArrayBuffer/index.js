// DEMO1:
// 分配出连续的内存空间 32字节  32*8进制位
const buffer = new ArrayBuffer(32);
// 通过DataView去读取操作二进制数据
const dv = new DataView(buffer);
console.log(dv.getInt8());


// DEMO2:
// 同一段二进制数据  通过不同的视图进行操作会互相影响覆盖
const buffer2 = new ArrayBuffer(24);
// TypeView的两种视图的构造函数
// Int32Array 32位带符号整数
const x1 = new Int32Array(buffer2);
console.log(x1); // Int32Array(6) [0, 0, 0, 0, 0, 0]
x1[0] =  1;
// Uint8Array 8位不带符号整数
const x2 = new Uint8Array(buffer2);
console.log(x2); // Uint8Array(24) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
x2[0] =  2;

console.log(x1); // 2


// DEMO3:
// TypedArray构造函数的参数 1.ArrayBuffer实例对象 2，普通数组
// 当普通数组当作参数时，会完成以下几个步骤 1.直接生成底层的ArrayBuffer实例 2.并且分配内存空间 3，完成这段内存的赋值
const typed = new Uint8Array([1,2,3]);
console.log(typed); // Uint8Array(3) [1, 2, 3]
