var form = document.getElementById('my-form');
const ul = document.getElementById('lists');

form.addEventListener('submit',addToStorage);
function addToStorage(e){
    e.preventDefault();


    var name = document.getElementById('name').value;
    var emailId = document.getElementById('email').value;

    var info = {
         name,
         emailId
        }
    var infoToString = JSON.stringify(info);
    localStorage.setItem(info.emailId,infoToString);
    showList(info);
    
}

function showList(info){
    
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    li.textContent= info.name + " : " + info.emailId;
    // li.id = 'info.emailId';
    ul.appendChild(li);
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.style.float = 'right';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        if(confirm('Are You Sure?.....')){
        localStorage.removeItem(info.emailId);
        ul.removeChild(li);
        }
    }
    li.appendChild(deleteBtn);
}
 