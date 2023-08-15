const L = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
L.process = L.process || x;
const R = L.process;
const [Cs, Es] = R.versions.node.split(".").map((e2) => parseInt(e2, 10));
console.log(Cs, Es);