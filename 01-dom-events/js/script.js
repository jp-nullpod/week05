let element = document.getElementById('anotherbutton').onclick = function () {
    alert('Another Button Clicked');
}

function inform() {
    alert("you clicked me");
}

function insertRow() {
    let sampleTable = document.getElementById('sampleTable');
    let rows = sampleTable.rows.length;
    let rowAdded = `<tr><td>Row${rows + 1} Cell 1</td><td>Row${rows + 1} Cell 2</td></tr>`;

    sampleTable.insertAdjacentHTML("beforeend", rowAdded);
}