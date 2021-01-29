// 构造函数1：TypedArray(buffer, bufferOffset = 0, length?)
// 参数1：ArrayBuffer实例
// 参数2: 视图开始的字节序号位，默认是0
// 参数3: 视图包含的数据个数，默认直到最后
const buffer = new ArrayBuffer(8);
const v1 = new Int32Array(buffer);
const v2 = new Uint8Array(buffer, 2);
const v2 = new Int16Array(buffer, 2, 2);

// 构造函数2：TypedArray(lenght)
// length:生成的数组长度
const v4 = new Float32Array(8); // 字节长度 8 * 4 = 32
console.log(v4) // Float32Array(8) [0, 0, 0, 0, 0, 0, 0, 0]

// 构造函数3：TypedArray(TypedArray)
// 复制参数视图对象实例的值，然后重新分配内存空间
const v5 = new Int32Array(3);
const v6 = new Int16Array(v5);
v5[0] = 1;
v6[0] = 2;
console.log(v5[0]); // 1

// 构造函数4；TypedArray(arrayLikeObject)
// arrayLikeObject: 普通数组 || TypedArray实例转换而成的普通数组
// 重新分配内存空间
const v7 = new Int32Array([1,1,1]);
const v8 = new Int32Array([...v7]);


// TypedArray实例方法：普通数组的方法基本适用，concat除外
function concatTypedArray(resultConstructor, ...arrays) {
    let totalLength = 0;
    for (let arr of arrays) {
        totalLength += arr.length;
    }
    const newResults = new resultConstructor(totalLength);
    let offset = 0;
    for (let arr of arrays) {
        newResults.set(arr, offset);
        offset += arr.length;
    }
    return newResults;
}
concatTypedArray(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4))