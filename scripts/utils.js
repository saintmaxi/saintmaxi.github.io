async function displayErrorMessage(message, timed=true) {
    let darkClass = getDarkMode();
    let fakeJSX = `<div class="${darkClass}" id="error-popup"><p>${message}</p></div>`;
    $("#directory").append(fakeJSX);
    if (timed) {
        await sleep(2500);
        $("#error-popup").remove();
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