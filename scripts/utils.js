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