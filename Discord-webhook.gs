function onFormSubmit(e) {
    var fields = [];

    for (i = 0; i < e.response.getItemResponses().length; i++) {
        var response = e.response.getItemResponses()[i];
        fields.push({
            "name": response.getItem().getTitle(),
            "value": response.getResponse(),
            "inline": false
        });
    }

    var data = {
        "embeds": [{
            "title": "**New form submission** — " + (e.source.getTitle() != null && e.source.getTitle().length > 0 ? e.source.getTitle() : "Untitled Form"),
            "type": "rich",
            "fields": fields
        }]
    };

    var options = {
        method: "post",
        payload: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        muteHttpExceptions: true
    };

    Logger.log("Attempting to send:");
    Logger.log(JSON.stringify(data));

    var response = UrlFetchApp.fetch("DISCORDWEBHOOKURL", options);
    Logger.log(response.getContentText());
};