let ourList = document.getElementById("dataTable");
let ourData = document.getElementById("inputRecord");

function createNewData() {

    let userName = document.getElementById("who-is-feeding").value;
    let mealSize = document.getElementById("add-meal-size").value;
    let feedingTime = new Date().toLocaleTimeString();
    let feedingDate = new Date().toLocaleDateString();
    let userNote = document.getElementById("note").value;

    if (userNote === '') {
        userNote = '---';
    } else {
        userNote = userNote;
        document.getElementById("note").value = '';
    }

    if (userName !== '') {
        document.getElementById("who-is-feeding").value = '';
    } else {
        createNewData() = null;
    }

    if (mealSize !== '') {
        document.getElementById("add-meal-size").value = '';
    } else {
        createNewData() = null;
    }




    let ourHTML = `<div class="input-record" id="inputRecord">

    <button class="delete" onclick="removeData()">
		<img class="delete-icon" src="/img/more.svg" alt="Delete" />
	</button>

    <div class="time-record">
		<p>Date</p>
		<h3 id="date">${feedingDate}</h3>
	</div>
    
    <div class="who-feed-data">
        <p>Who Feed</p>
        <h3 id="who-feed">${userName}</h3>
    </div>

    <div class="meal-size-data">
        <p>Meal Size</p>
        <h3 id="meal-size">${mealSize}</h3>
    </div>

    <div class="meal-time-data">
        <p>Meal Time</p>
        <h3 id="feeding-time">${feedingTime}</h3>
    </div>
    
    <div class="meal-time-data">
        <p>Note</p>
        <h3 id="note">${userNote}</h3>
    </div>

    
    
</div>`


    ourList.insertAdjacentHTML("afterbegin", ourHTML)

}

function submitData() {

    let userName = document.getElementById("who-is-feeding").value;
    let mealSize = document.getElementById("add-meal-size").value;

    if (mealSize == '' || userName == '') {
        alert('Please select your name and meal size!')
    } else {
        createNewData();
    }

}

function removeData() {

    ourList.remove();
    location.reload();

}









