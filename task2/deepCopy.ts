
// function deepCopy(obj: any): any{
//     // const newObj = JSON.parse(JSON.stringify(obj));
//     // return newObj; previous one

//     const newObj = structuredClone(obj);
//     return newObj;
// }

function deepCopy(obj, hash = new WeakMap()){
    console.log("obj: ", obj);
    console.log("hash: ", hash);
    
    
    if(obj===null || typeof obj!== "object") return obj; // und/null/prim

    if(hash.get(obj)) return hash.get(obj);
    
    if(obj instanceof Array){ //arr
        const copy = [];
        hash.set(obj, copy);
        for (let i = 0; i < obj.length; i++) {
            copy.push(deepCopy(obj[i], hash));
        }
        return copy;
    }

    if (obj instanceof Date) return new Date(obj.getTime()); //date

    if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags); //reg

    if (obj instanceof Map){
        const copy = new Map();
        hash.set(obj, copy);
        for (const [key, value] of obj){
            copy.set(deepCopy(key, hash), deepCopy(value, hash));
        }
        return copy;
    }

    if (obj instanceof Set){
        const copy = new Set();
        hash.set(obj, copy);
        for (const val of obj){
            copy.add(deepCopy(val, hash));
        }
        return copy;
    }

    //remaining - obj
    const copy = {};
    hash.set(obj, copy);
    for(const key of Object.keys(obj)){
        copy[key] = deepCopy(obj[key], hash);
    }
    
    Object.setPrototypeOf(copy, Object.getPrototypeOf(obj));
    return copy;
}

const obj = {"a":1, "b":[{"a":2, "b":2}]};

const obj2 = deepCopy(obj);

console.log(obj===obj2);



