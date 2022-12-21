let id = 0;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
document.getElementById('add').addEventListener('click',() => {
let createDate = new Date();
let table = document.getElementById('list');
let row = table.insertRow(1);
row.setATTRIBUTE('id', `item-${id}`);
row.inserCell(0).innerHTML = document.getElementById('new-task').value;
row.innerCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1 }-${createDate.getDate()}`;
row.innerCell(2).innerHTML = document.getElementById('new-start-date').value;
row.innerCell(3).innerHTML = document.getElementById('new-end-date').value;
let actions = row.insertCell(4);
actions.appendChild(createDeletebutton(id++));
document.getElementById('new-task').value ='';
});
function createDeletebutton(id) {
    let btn = document.createElement('button');
    btn.className ='btn btn-primary';
    btn.id =id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: test-${id}`);
        let elementToDelete = document.getElementById(`test-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
};