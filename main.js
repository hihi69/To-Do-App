const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if(inputBox.value === ""){
        alert("内容を入力してください");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

/* エンターキー押下時フィールドに出力 */
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}
inputBox.addEventListener("keypress", handleKeyPress);

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/* ローカルストレージに入力したデータを保存、再読込時に再取得 */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function enterKeyPress(event){
	if(event.key === 'Enter'){
		console.log('Press your Enter key.')
	}
}