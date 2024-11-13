Question01 - Explain This

`console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");`

Ans- Output : Start End TimeOut Promise

Explanation - When start goes to line 1 and print Start then Goes to timeout and send this to callback stack as it is asyncronous operation and same for promise then comes to line 4 and print End then goes to event loop and check callback queue then see timeout it completed then print Timeout and then print Promise.

---

Question02 - `let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c);`

    **Question:** What will be the output? Explain why shallow copy behaves this way.

Ans - Output: 3

Explanation - Here when we create a first variable and then copy them it to second variable so it makes a copy from first to second but both of the variable pointing to same object and when we change something on second variable then still it also changes for first varible. This is the behaviour of Shallow Copy.

---

Question03 - for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 1000);
}
for (let j = 1; j <= 3; j++) { setTimeout(() => console.log(j), 1000);
}

Ans - Output: for let - 1 2 3

for var - 3 3 3

Explantion- when let loop start whenever value change of let so let is blocked scope it created a new address for every new value then when a timeout ends it print 1 2 3 because everytime it points to one address

But when var loop starts when value is changed because of global scope value change at it place and everytime the variable pointing to same place loop ends then compiler goes to event loop and print 3 3 3 because i pointing to same address.

---

Question04 - `let obj1 = { a: 10 };
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);`

    **Question:** What will be the output? Explain how JavaScript treats objects when assigned to another variable.

Ans- output: 20

Explantion- Here when we create a first variable and then copy them it to second variable so it makes a copy from first to second but both of the variable pointing to same object and when we change something on second variable then still it also changes for first varible. Same when we assign obj to obj2 it creates copy of obj to obj2 but still both referring to same object and when we change something to obj2 changes happening for obj.
