let txt = document.getElementById("txt")
let show = document.getElementById("showList")
let count = document.getElementById("count");

count.innerHTML = localStorage.length;
for (let i = 0, len = localStorage.length; i < len; i++) {
    let list = document.createElement("div");
    let key = localStorage.key(i);
    let val = localStorage[key];

    list.setAttribute("class", "lists");
    list.setAttribute("data-hex", key);
    list.innerHTML = new Date(parseFloat(key)).toLocaleTimeString() + " ： " + val;

    addListener(list, key);
    
    show.insertBefore(list, show.childNodes[0]);
}

const addListener = (list, key) => {
    list.addEventListener("click", function callback() {
        if (confirm("这项任务已经完成? ")) {
            this.parentNode.removeChild(this);

            document.getElementById("overList").appendChild(this);

            let countOver = document.getElementById("overCount");
            countOver.innerHTML = parseInt(countOver.innerHTML) + 1;

            this.setAttribute("class", "overLists");

            let count = document.getElementById("count");
            count.innerHTML = parseInt(count.innerHTML) - 1;

            let key = this.getAttribute("data-hex");
            localStorage.removeItem(key);

            this.removeEventListener("click", callback, false);
        }
    }, false);
}

const addList = () => {
    if (txt.value.trim() != "") {
        let list = document.createElement("div");
        let date = Date.parse(new Date());
        let time = new Date();

        list.setAttribute("class", "lists");
        list.innerHTML = ten(time.getHours())+":"+ten(time.getMinutes())+":"+ten(time.getSeconds())+" ： " + txt.value;
        list.setAttribute("data-hex", date);

        localStorage.setItem(date, txt.value);

        addListener(list, date);

        show.insertBefore(list, show.childNodes[0]);

        count.innerHTML = parseInt(count.innerHTML) + 1;
        txt.value = "";
    }
}

function ten(num) {
    if(parseInt(num) < 10) {
        return "0" + num;
    }else{
        return num;
    }
}

function enterPress(e) {
    let event = e || window.event;
    if (event.keyCode === 13) {
        addList();
    }
}