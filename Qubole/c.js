console.clear();

process.nextTick(() => {
    console.log("nextTick");
});
setTimeout(() => {
    console.log("setTimeout");
}, 0);
setImmediate(() => {
    console.log("setImmediate");
});    
console.log("I am the last line")

// setTimeout(() => {
//     process.nextTick(() => {
//         console.log("nextTick");
//     });
//     setTimeout(() => {
//         console.log("setTimeout");
//     }, 0);
//     setImmediate(() => {
//         console.log("setImmediate");
//     });    
//     console.log("I am the last line")
// }, 2000);


