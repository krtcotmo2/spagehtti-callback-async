const spa = ["created", "using", "spaghetti", "code"];
const addSpaghettiUl = (fruits, fun) => {
    const ul = document.createElement('ul');           
    document.body.appendChild(ul);           
    addLis(fruits, ul);
}
const callb = ["created", "using", "callback", "function"];
const addCallbackUl = (fruits, fun) => {
    const ul = document.createElement('ul');           
    document.body.appendChild(ul);
    fun(fruits, ul);
}
const asyn = ["created", "using", "async", "code"];
const addAsyncUl = async (fruits) => {
    const ul = document.createElement('ul');           
    await document.body.appendChild(ul);           
    return ul;
}

const addLis = (fruits, ul) => {
    for (const f of fruits) {
        const li = document.createElement('li');
        li.innerHTML = f;                
        ul.appendChild(li);
    };
}
//all three functions produce the same type of result just in different ways
addSpaghettiUl(spa);
addCallbackUl(callb, addLis);
addAsyncUl().then(arg => addLis(asyn, arg));
