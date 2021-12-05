async function displayErrorMessage(message, timed=true) {
    if (!($("#error-popup").length)) {
        let darkClass = getDarkMode();
        let fakeJSX = `<div class="${darkClass}" id="error-popup"><p>${message}</p></div>`;
        $("#directory").append(fakeJSX);
        $("body").append("<div id='block-screen-error'></div>");
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hideFilters() {
    if ($("#filter").hasClass("hidden")) {
        $("#price-filtering-container").removeClass("hidden");
        $("#filter-results-count-container").removeClass("hidden");
        $("#filter").removeClass("hidden");
        $("#reset-filter-div").removeClass("hidden");
        $("#hide-filters").text("Hide Filters ↑");
    }
    else {
        $("#price-filtering-container").addClass("hidden");
        $("#filter-results-count-container").addClass("hidden");
        $("#filter").addClass("hidden");
        $("#reset-filter-div").addClass("hidden");
        $("#hide-filters").text("Show Filters ↓");
    }
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}