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
concatTypedArray(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4));


// TypedArray实例属性：buffer
// 只读：返回指定内存对应的ArrayBuffer对象
const v9 = new Int32Array(32);
console.log(v9.buffer);

// TypedArray实例属性：byteLength
// 只读：占据的内存长度（字节）

// TypedArray实例属性：byteOffset
// 只读：从底层的ArrayBuffer对象的哪个字节读取

// TypedArray实例方法：set()
// 复制数组: v11复制v10数组的整段内容
const v10 = new Int32Array(32);
const v11 = new Int32Array(32);
// 从v10[2]开始复制
v11.set(v10, 2);

// TypedArray实例方法：subArray()
// 复制数组的一部分，在建立一个新的视图
const v12 = new Int32Array(3);
const v13 = v12.subarray(1,3);
console.log(v12,v13); // Int32Array(3) [0, 0, 0] Int32Array(2) [0, 0]

// TypedArray实例方法：slice()
// 返回一个指定位置的新的TypedArray实例
const v14 = Uint8Array.of(0, 1, 2);
v14.slice(-1) //Uint8Array [2]


// TypedArray所有构造函数的静态方法：of()
// 将参数转化成TypedArray实例
const v15 =  Uint8Array.of([1,2,3])

// TypedArray.from (用法类似Array.from)
// 参数1：数组（普通或者TypedArray） 参数2： 类map函数
const v16 = Uint16Array.from([1,2,3]);
const v17 = Uint16Array.from(v16, x => x*2);
console.log(v16, v17); // Uint16Array(3) [1, 2, 3] Uint16Array(3) [2, 4, 6]
