let a = "hello";
const b = "bye";

console.log(a);
console.log(b);

function hello() {
    console.log("Hello");
}
hello();

let globalName = "Tim";

function bye(localName) {
    console.log("GoodBye " + localName);
}
bye(globalName);


let obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: function(){
        console.log('value3')
    },
    prop4: {
        prop5: 'value5'
    }
}
obj.prop3()
console.log(obj.prop4.prop5)

obj.prop6 = 'value6'
console.log(['obj.value6'])

let z = 0
function x() {}
console.log(z)
x()

let y = 0
function o() {
    console.log(this, argments,y);
}

console.log();
o()