let rootNode = document.getElementById('root');
let list =document.querySelector('.list');
const MAX_AMOUNT_OF_POINT_OF_LIST = 10;
let dataForm = document.getElementById('form-input');
function newPontOfList(text) {
	let listItem = document.createElement('li');
	listItem.setAttribute('class','list-item');
	listItem.setAttribute('draggable','true');
	let div = document.createElement('div')
	div.setAttribute('class','left-part');
	let deleteSymbol  = document.createElement('i');
	deleteSymbol.setAttribute('class','material-icons delete');
	deleteSymbol.innerHTML='delete';
	listItem.appendChild(div);
	listItem.appendChild(deleteSymbol)
	let checkbox = document.createElement('input')
	checkbox.setAttribute('type','checkbox')
	div.appendChild(checkbox);
	let content = document.createElement('span')
	content.setAttribute('class','content');
	content.innerHTML = text;
	div.appendChild(content);
	let edit = document.createElement('i');
	edit.setAttribute('class', 'material-icons')
	edit.innerHTML = 'edit'
	div.appendChild(edit)
	list.appendChild(listItem)
}

function isChecked(event) {
	let target = event.target;
	if (target.getAttribute('type') === 'checkbox') {
		target.setAttribute('disabled','')
	}	
}
let inputForNewItem = document.querySelector('#form-input input');
function isEmptyInput() {
	if (inputForNewItem.value==='') {
		let button = document.querySelector('#form-input button');
		button.setAttribute('disabled','')
	} else {
		button.removeAttribute('disabled');
	}
}
inputForNewItem.addEventListener('change',isEmptyInput)

//we know button is only one
let button = document.getElementById('add-action');
button.addEventListener('click',addNewPointOfList)
function addNewPointOfList (el) {
	//we know button is only one
	let button = document.getElementById('add-action');
	let inputText = button.previousSibling.previousSibling.value;
	newPontOfList(inputText)
	button.previousSibling.previousSibling.value =''
	button.setAttribute('disabled','')
	if (list.children.length === MAX_AMOUNT_OF_POINT_OF_LIST) {
		button.setAttribute('disabled','')
		button.previousSibling.previousSibling.setAttribute('disabled','');
		let notification = document.createElement('div');
		notification.innerHTML = 'Maximum item per list are created’ is displayed';
		notification.setAttribute('id','notification');
		rootNode.insertBefore(notification,rootNode.firstChild.nextSibling.nextSibling)
	}
}
function deleteElement(event) {
	let target = event.target;
	if (target.innerHTML === 'delete') {
		if(list.children.length===MAX_AMOUNT_OF_POINT_OF_LIST) {
			button.toggleAttribute('disabled');
			button.previousSibling.previousSibling.toggleAttribute('disabled');
			let notification = document.getElementById('notification')
			notification.parentNode.removeChild(notification)
			
		}
		let listItem = target.parentNode;
		listItem.parentNode.removeChild(listItem)
	}
}
list.addEventListener('click',deleteElement)
function editAndSaveElement(event) {
	let target = event.target;
	if (target.innerHTML === 'edit') {
		let contentSpan = target.previousSibling;
		let buffer = contentSpan.innerHTML;
		target.parentNode.removeChild(contentSpan);
		let input = document.createElement('input');
		input.value = buffer;
		target.parentNode.insertBefore(input,target);
		target.innerHTML = 'save';
		return;
	}	
	if (target.innerHTML==='save') {
		let contentInput = target.previousSibling;
		let buffer = contentInput.value;
		target.parentNode.removeChild(contentInput);
		let span = document.createElement('span');
		span.setAttribute('class','content')
		span.innerHTML = buffer;
		target.parentNode.insertBefore(span,target);
		target.innerHTML = 'edit';	
	}
}


let dragging,dropElem;
function allowDrop(event) {
	event.preventDefault()
}
function dragStart(event) {
	let target = event.target;
	while (target.tagName!=='LI') {
		target = target.parentNode;
	}
	dragging = target;
	console.log(dragging)
	event.dataTransfer.setData('text/html', dragging);
};
function drop(event) {
	let target = event.target;
	while (target.tagName!=='LI') {
		target = target.parentNode;
	}
    if(target.parentNode.tagName === 'UL') {
        target.parentNode.insertBefore(dragging, target.nextSibling);
    }
}

list.addEventListener('click',editAndSaveElement)
list.addEventListener('click',isChecked)
list.addEventListener('dragover', allowDrop)
list.addEventListener('dragstart', dragStart)
list.addEventListener('drop',drop)