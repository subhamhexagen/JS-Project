// alert("connection established")

let addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

function addItem() {
    // console.log('add button clicked');
    let input = document.getElementById('input');
    let item = input.value;
    let ul = document.getElementById('list');
    let textnode = document.createTextNode(item);
    
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id','checkb');
    let label = document.createElement('label');
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li,ul.childNodes[0]) //--later hitesh w3s

}

function removeItem() {
    // console.log('remove clicked')
    let ul = document.getElementById('list');
    let li = ul.children;
    console.log(li);
    for (let index = 0; index < li.length; index++) { 
        while(li[index].children[0].checked){//--later clarity for 2nd loop
            ul.removeChild(li[index])
        }
    }
}