
function ValidParentheses(parentheses: string): boolean {

    const stack: String[] = [];

    for (let i of parentheses){
        if (i === "]" && stack.at(-1)==="[") stack.pop();
        else if (i === ")" && stack.at(-1)==="(") stack.pop();
        else if (i === "}" && stack.at(-1)==="{") stack.pop();
        else stack.push(i);
    }

    if(stack.length) return false;

    return true;
}

const parentheses = "(}(){]()[]{]{}";

console.log(ValidParentheses(parentheses));