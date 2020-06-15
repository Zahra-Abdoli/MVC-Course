function search() {
    let val = $("#searchText").val();

    if (!val) return;

    let towns = extractTowns();

    let founds = towns.filter(x => x.toLowerCase().includes(val.toLowerCase()));

    $("#result").text(founds.length + " matches found!");

    updateLists(founds);
}

function updateLists(founds) {
    if (founds.length == 0) return;

    $("#towns li").each(function() {
        if (founds.includes(this.innerText)) {
            this.style.fontWeight = "bold";
        }
    });
}

function extractTowns() {
    let array = [];

    $("#towns li").each(function() {
        array.push(this.innerText);
    });

    return array;
}