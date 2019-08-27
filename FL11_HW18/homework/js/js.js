const rootNode = document.getElementById('root');
const rootNodeForPosts = document.getElementById('root-for-posts');
function addElement(parentNode,tag='div',before=null) {
	let elem = document.createElement(tag);
	parentNode.insertBefore(elem,before);
	return elem;
}
function checkClass(nodeElement,classString) {
    let classList = nodeElement.className.split(' ')
    for (let i = 0; i < classList.length; i++) {
        if (classList[i]===classString) {
            return true;
        }
    }
    return false;
}
function toggleClass(element,classOff,classOn) {
    const classList = element.className.split(' ');
    for (let i = 0; i < classList.length; i++) { 
        if(classList[i]===classOff) {
            classList[i] = classOn;
        }
    }
    element.className = classList.join(' ')    
}
const usersData = [];
async function addCats(where) {    
    const listOfcats = await fetch('https://api.thecatapi.com/v1/images/search',{
        headers:{"x-api-key": "9f011b31-cfe7-4918-bd16-44a98322ed37"}    
    })
    const arr = listOfcats.json()
    arr.then((data)=> {
        const img = addElement(where,'img')
        img.setAttribute('src',data[0].url)
        img.setAttribute('width','80')
        img.setAttribute('height','80')
    })
}
function renderList() {
    showSpinner()
    const p = new Promise((resolve,reject)=>{
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xmlhttp.responseType = 'json'
        xmlhttp.send()
        xmlhttp.onload = () => { 
            if (xmlhttp.status === 200) {
                const data = xmlhttp.response;
                for(let i=0;i<data.length;i++) {
                    usersData[i] = data[i]
                }
                resolve(data)
            } else {
                reject('Error '+ xmlhttp.status)
            }
        }
    })
    .then((usersData)=>{
        const header = addElement(rootNode,'h2')
        header.innerHTML = 'List of users';        
        for (let i =0;i<usersData.length;i++) {
            const row = addElement(rootNode)
            row.setAttribute('class','row')
            const logo = addElement(row);
            logo.setAttribute('class','user-elem p1 logo')
            addCats(logo)    
            const name = addElement(row);
            name.setAttribute('class','user-elem p1 name')
            name.innerHTML = usersData[i].name;
            const edit = addElement(row)
            edit.innerHTML = 'Edit' 
            edit.setAttribute('class','user-elem hoverButton edit')  
            const deleteElement = addElement(row)
            deleteElement.innerHTML = 'Delete';
            deleteElement.setAttribute('class','user-elem hoverButton delete')     
        }
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        hideSpinner()
    })
}
renderList()
// spinner    
function showSpinner() {
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'block'
}
function hideSpinner() {
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'none'
}
// edit name
function editName(event) {
    if(event.target.innerHTML === 'Edit') {
        const choosenName = event.target.previousSibling.innerHTML;
        let index = 0;
        for (let i = 0; i < usersData.length; i++) {    
            if(usersData[i].name === choosenName) {
                index = i;
            }
        }
        event.target.display = 'none';
        event.target.nextSibling.style.display = 'none';
        event.target.previousSibling.style.display = 'none';
        const input =  addElement(event.target.parentNode,'input')
        input.value = choosenName;
        const saveButton = addElement(event.target.parentNode,'button')
        saveButton.innerHTML = 'Save';
        const canselButton = addElement(event.target.parentNode,'button')
        canselButton.innerHTML = 'Cancel';
        function sendEditRequest() {
            usersData[index].name = input.value;
            showSpinner();
            fetch('https://jsonplaceholder.typicode.com/users/'+(index+1), {
                method: 'PUT',
                body: JSON.stringify(usersData[index]),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((response) => {
                renovateItemsOfList.call(saveButton)
                return response.json()
            })
            .then((json) => {
                console.log(json)
            })
            .catch(()=>{
                
                alert('error')
                renovateItemsOfList.call(saveButton,false)
            })
            .finally(()=>{
                hideSpinner();
            })
        }
        function renovateItemsOfList(succsess=true) {
            event.target.display = 'block';
            event.target.nextSibling.style.display = 'block';
            event.target.previousSibling.style.display = 'block';
            event.target.parentNode.removeChild(saveButton);
            event.target.parentNode.removeChild(canselButton);
            event.target.parentNode.removeChild(input);
            if(this.innerHTML === 'Save' && succsess) {
                event.target.previousSibling.innerHTML = input.value;
            } else {
                event.target.previousSibling.innerHTML = choosenName;
            }   
        }
        saveButton.addEventListener('click',sendEditRequest)
        canselButton.addEventListener('click',renovateItemsOfList)
    }
}
rootNode.addEventListener('click',editName)
// deleting element
function deleteItem(event) {
    if(event.target.innerHTML === 'Delete') {
        const choosenName = event.target.previousSibling.previousSibling.innerHTML;
        let index = 0;
        for (let i = 0; i < usersData.length; i++) {    
            if(usersData[i].name === choosenName) {
                index = i;
            }
        }    
        showSpinner()
        fetch('https://jsonplaceholder.typicode.com/users/'+(index+1), {
            method: 'DELETE'
        })
        .then(()=>{
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=> {
            hideSpinner()
        })
    }
}
rootNode.addEventListener('click',deleteItem)
function createPost(post,comments,author) {
    const parent = document.getElementById('root-for-posts')
    const postParent = addElement(parent)    
    postParent.setAttribute('class','post')
    const postAuthor = addElement(postParent)
    postAuthor.setAttribute('class','post__author')
    postAuthor.innerHTML = author;
    const postDescription = addElement(postParent)
    postDescription.setAttribute('class','post__description')
    postDescription.innerHTML = post.title;
    const postContent = addElement(postParent)
    postContent.setAttribute('class','post__content')
    postContent.innerHTML = post.body;
    for (let i = 0; i < comments.length; i++) {
        const bodyOfComment =  addElement(postParent)
        bodyOfComment.setAttribute('class','post-comment')
        const commentAuthor = addElement(bodyOfComment)
        commentAuthor.setAttribute('class','post-comment__author')
        commentAuthor.innerHTML = comments[i].email;
        const commmentDescription = addElement(bodyOfComment)
        commmentDescription.setAttribute('class','post-comment__description')
        commmentDescription.innerHTML = comments[i].name;
        const commentContent = addElement(bodyOfComment)
        commentContent.setAttribute('class','post-comment__content')
        commentContent.innerHTML = comments[i].body;        
    }
}
// show post and comments
function showPostsAndComment(event) {
    if(checkClass(event.target,'name')) {
        rootNodeForPosts.innerHTML = '';
        const button = addElement(rootNodeForPosts,'button');
        button.innerHTML = 'Back to Userlist';
        button.addEventListener('click',()=>{
            window.location.hash = 'main'
        })        
        const choosenName = event.target.innerHTML;
        let index = 0;
        for (let i = 0; i < usersData.length; i++) {    
            if(usersData[i].name === choosenName) {
                index = i;
                break;
            }
        }
        window.location.hash = usersData[index].name;
        fetch('https://jsonplaceholder.typicode.com/posts?userId='+(index+1))
        .then((response) => {
            showSpinner()
            return response.json()})
        .then((json) =>{
            console.log(json)
            for (let i = 0; i < json.length; i++) {
                fetch('https://jsonplaceholder.typicode.com/comments?postId='+(i+1))
                .then(response => response.json())
                .then((jsonComments) => {
                    createPost(json[i],jsonComments,usersData[index].name)
                })   
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            hideSpinner();
        })   
    }
}
rootNode.addEventListener('click',showPostsAndComment)
// for toggling pages
function hashChange() {
	rootNode.style.display = 'none';
    rootNodeForPosts.style.display = 'none';
    if( window.location.hash !=='#' && window.location.hash!=='#main') {
        rootNodeForPosts.style.display = 'block';
    } else {
        rootNode.style.display = 'block'
    }
}
window.addEventListener('hashchange',hashChange)