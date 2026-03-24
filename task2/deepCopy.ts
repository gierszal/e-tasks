
function deepCopy(obj: any): any{
    const newObj = JSON.parse(JSON.stringify(obj));
    return newObj;
}

const obj = {"a":1, "b":[{"a":2, "b":2}]};

const obj2 = deepCopy(obj);

console.log(obj===obj2);



