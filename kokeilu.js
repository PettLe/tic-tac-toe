const greeting = (name, age) => {
    const hello = () => {console.log(`Hello ${name}! You are only ${age} years old!`)}
    return {name, age, hello}
}

//const puppe = greeting("Puppe", "30");

const retku = (name, age) => {
    const {hello} = greeting(name, age);
    const doRetkuilua = () => {
        console.log("Vittu kun olen pähee!");
    }
    return {name, age, hello, doRetkuilua}
}

const puppe = retku("Puppe", "30");

console.log(puppe.name);
puppe.hello();
console.log(puppe.age);
puppe.doRetkuilua();