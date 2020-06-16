var list = [];
$(document).ready(function() {
    $('#createLink').click(function() {
        list.push({ country: $('#newCountryText').val(), capital: $('#newCapitalText').val() });

        showList();
    })

});

function deleteItem(i) {
    debugger
    list.splice(i, 1);
    showList();
}


function initializeTable() {
    list.push({ country: "Sweden", capital: "Stockholm" });
    list.push({ country: "Germnay", capital: "Berlin" });
    list.push({ country: "France", capital: "Paris" });

    showList();
}

function up(i) {
    var a = list[i];
    list[i] = list[i - 1];
    list[i - 1] = a;
    showList();



}

function down(i) {
    var a = list[i];
    list[i] = list[i + 1];
    list[i + 1] = a;
    showList();


}

function showList() {
    for (i = list.length + 2; i >= 2; i--) {
        $("#countriesTable tr").eq(i).remove();
    }

    let index = 0;
    for (item of list) {
        let isUp = true;
        let isDown = true;

        if (list.indexOf(item) == 0) isUp = "";
        if (list.indexOf(item) == list.length - 1) isDown = "";

        $('#countriesTable tr:last').after(`
        <tr id="mylist">
            <td>${item.country}</td>
            <td>${item.capital}</td>
            <td>

                <a class="delete" onclick="deleteItem(${index})">[delete]</a>
           
                ${isUp && `<a onclick="up(${index})">[Up]</a>`}

                ${isDown && `<a onclick="down(${index})">[Down]</a>`}
            </td>
        </tr>`);
        index++;
    }

}