function addToLocalStorage(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const desc = document.getElementById('desc').value;
    const category = document.getElementById('select').value;

    let obj = {
        amount,
        desc,
        category
    }

    let serializedObj = JSON.stringify(obj);
    localStorage.setItem(desc,serializedObj);
    showOnScreen(obj)
    
}

Object.keys(localStorage).forEach((key) => {
    const data = JSON.parse(localStorage.getItem(key));

})


function showOnScreen(obj) {
    document.getElementById('amount').value = '';
    document.getElementById('desc').value = '';

    if(localStorage.getItem(obj.desc)) {
        removeFromScreen(obj.desc)
    }
    const parentNode = document.getElementById('list-group');
    const childHTML = `<li id="${obj.desc}" class="list-group-item">${obj.amount} - ${obj.desc} - ${obj.category}
    <button class="btn btn-dark btn-sm float-end btn-outline-light" onclick=editBtn('${obj.amount}','${obj.desc}','${obj.category}')>Edit</button>
    <button class="btn btn-danger btn-sm float-end btn-outline-light" onclick=deleteBtn('${obj.desc}')>X</button>
    
    </li>`;

    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

function deleteBtn(key) {
    if(key){
        localStorage.removeItem(key);
        removeFromScreen(key)
    }
   
    
}

function removeFromScreen(key) {
    const parentNode = document.getElementById('list-group');
    const child = document.getElementById(key);

    if(child != null) {
        
        parentNode.removeChild(child);
    }
}

function editBtn(amount,desc,category) {
    document.getElementById('amount').value = amount;
    document.getElementById('desc').value = desc;
    document.getElementById('select').value = category

    removeFromScreen(desc);
}
