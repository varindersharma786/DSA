class Stack {
  constructor() {
    this.Stack = [];
  }

  push(element) {
    return this.Stack.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is Empty";
    return this.Stack.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is Empty";
    return this.Stack[this.Stack.length - 1];
  }

  size() {
    return this.Stack.length;
  }

  isEmpty() {
    return this.Stack.length === 0;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.size()); // 4
console.log(stack.peek()); // 40
console.log(stack.pop());  // 40
console.log(stack.peek()); // 30
console.log(stack);