const spa = ["created", "using", "spaghetti", "code"];
const addSpaghettiUl = (items) => {
    const ul = document.createElement('ul');           
    document.body.appendChild(ul);           
    addLis(items, ul);
}
const callb = ["created", "using", "callback", "function"];
const addCallbackUl = (items, fun) => {
    const ul = document.createElement('ul');           
    document.body.appendChild(ul);
    fun(items, ul);
}
const asyn = ["created", "using", "async", "code"];
const addAsyncUl = async () => {
    const ul = document.createElement('ul');           
    await document.body.appendChild(ul);           
    return ul;
}

const addLis = (items, ul) => {
    for (const i of items) {
        const li = document.createElement('li');
        li.innerHTML = i;                
        ul.appendChild(li);
    };
}
//all three functions produce the same type of result just in different ways
addSpaghettiUl(spa);
addCallbackUl(callb, addLis);
addAsyncUl().then(arg => addLis(asyn, arg));
