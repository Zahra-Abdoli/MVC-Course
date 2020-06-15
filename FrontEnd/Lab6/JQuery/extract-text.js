function extractText() {
    let array = [];

    $("#items li").each(function() {
        array.push(this.innerText);
    });

    $("#result").text(array.join(","));
}