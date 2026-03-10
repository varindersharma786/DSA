// class Stack {
//   constructor() {
//     this.Stack = [];
//   }

//   push(element) {
//     return this.Stack.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) return "Stack is Empty";
//     return this.Stack.pop();
//   }

//   peek() {
//     if (this.isEmpty()) return "Stack is Empty";
//     return this.Stack[this.Stack.length - 1];
//   }

//   size() {
//     return this.Stack.length;
//   }

//   isEmpty() {
//     return this.Stack.length === 0;
//   }

//   printStack(){
//     if(this.isEmpty()) return "Stack is Empty"
//     for (let i = 0; i < this.Stack.length; i++) {

//         const element = this.Stack[i];
//         console.log(element)
//     }
//   }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);

// stack.printStack();

const reverseString = (string) => {
  const splitS = string.split(" ");
  const stack = [];
  splitS.forEach((element) => {
    stack.push(element);
  });
  console.log(stack);

  const final = "";
  while (stack.length) {
    const current = stack.pop();
    console.log(final)
    if (current === final) {
      final += " " + current;
    }
  }
  console.log(final)
  return final.trim();
};

console.log(reverseString("this is manjit singh"))