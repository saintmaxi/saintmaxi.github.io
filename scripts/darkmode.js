let darkModeOn = JSON.parse(localStorage.getItem("darkModeOn"));
if (!darkModeOn) {
    darkModeOn = false;
}
else {
    $('*').addClass('dark');
}

function addDark() {
    if (!darkModeOn) {
        $('*').addClass('dark');
        darkModeOn = true;
        localStorage.setItem("darkModeOn", JSON.stringify(true));
    }
    else {
        $('*').removeClass('dark');
        darkModeOn = false;
        localStorage.setItem("darkModeOn", JSON.stringify(false));
    }

}

function getDarkMode() {
    let _darkClass;
    if (darkModeOn) {
        _darkClass = " dark";
    }
    else {
        _darkClass = "";
    }
    return _darkClass;
}