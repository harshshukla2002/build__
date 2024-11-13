Question01 - Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial.

Ans - In JavaScript, a closure is a feature that allows a function to access variables from outer function scope even after the outer function has completed execution. Closures are formed when a function is declared inside another function.

Closure are used in multiple places -

1. Closures can help create private variables that are only accessible through specific functions, which is useful for data encapsulation.
2. Memoization is an optimization technique that stores the results of expensive function calls in this Closures can help retain these stored results for future use.

---

Question02 - Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope.

Ans- In JavaScript var, let, and const are used to declare variables, but they different in terms of scope and hoisting.

- var has global scope and when complilation phase starts it hoisted top of the container scope and when it is accessed before assignment it gives undefined
- let and const has both block scope and when complilation phase starts it hoisted top of the container scope but when it is accessed before assignment it gives type error that you cannot access before assignment or intialization because they are in Temporal Dead Zone.

---

Question03 - What are the differences between a programming language and a scripting language? Where does JavaScript fit in?

Ans - Programming Language is used to designed to create standalone applications or systems from scratch and generally compiled into machine code, allowing them to run directly on the operating system. It can be run independently of any other software.

Scripting Language is designed mainly to automate tasks within a host environment or application.It usually interpreted, meaning code is executed line-by-line by an interpreter within a host environment and runs within a host environment (like a browser, web server, or OS shell) and relies on it to execute commands.

Technically JavaScript is both. JavaScript began as a scripting language because it was originally designed to automate tasks within the web browser environment.However, JavaScript has evolved significantly and now also functions as a general-purpose programming language. With the introduction of Node.js, JavaScript can now run on servers and execute outside the browser.
