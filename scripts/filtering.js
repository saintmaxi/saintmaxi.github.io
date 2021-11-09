
var miceData;

$.getJSON('../assets/mice_data.json', function(json) {
    miceData = json;
});

var miceObjectMap = new Map();

function jumpToLocation(elementID) {
    let target = $(elementID).position().top;
    $([document.documentElement, document.body]).animate({
        scrollTop: target}, 100);
}


/* FILTERING FUNCTIONS  */

_populateFilters();

var filters = new Map();

function addFilter(type, trait) {
    if (trait != "") {
        filters.set(type, trait);
    }
    _filterTraits();
}

function removeFilter(type) {
    _unfilterTraits(type, filters.get(type));
    filters.delete(type);
    _filterTraits();
}

function resetFilters() {
    filters = new Map();
    $("select").each(function() { this.selectedIndex = 0 });
    $(".hidden").removeClass("hidden");
    $("#filter-results-count").text(`${listedMice.size} Mice Found`);
    let _listedMiceArray = Array.from(listedMice.values());
    for (let i = 0; i < _listedMiceArray.length; i++) {
        let mouse = _listedMiceArray[i];
        mouse.fakeJSX = $(`#${mouse.elementID}`).get(0).outerHTML;
    }
}

function _filterTraits() {
    let keys = Array.from(filters.keys());
    let _listedMiceArray = Array.from(listedMice.values());
    for (let i = 0; i < keys.length; i++) {
        let type = keys[i];
        for (let i = 0; i < _listedMiceArray.length; i++) {
            let mouse = _listedMiceArray[i];
            if (mouse[type] != filters.get(type)) {
                $(`#${mouse.elementID}`).addClass("hidden");
                mouse.fakeJSX = $(`#${mouse.elementID}`).get(0).outerHTML;
            } 
        }
    }
    let displayed = listedMice.size - $(".mice-on-sale.hidden").length;
    $("#filter-results-count").text(`${displayed} Mice Found`);
}

function _unfilterTraits(type, trait) {
    let _listedMiceArray = Array.from(listedMice.values());
    for (let i = 0; i < _listedMiceArray.length; i++) {
        let mouse = _listedMiceArray[i];
        if (mouse[type] != trait) {
            $(`#${mouse.elementID}`).removeClass("hidden");
            mouse.fakeJSX = $(`#${mouse.elementID}`).get(0).outerHTML;
        } 
    }
}

function _populateFilters() {
    const categories = new Map();
    categories.set("hat",  ["Astronaut", "Bane", "Soldier", "Cheese", "Motorcycle Helmet", "Elvis", "Halo", "Construction Hat", "Karate Kid", "No Hat"]);
    categories.set("whiskers", ["Handlebar", "No Whiskers", "Big Whiskers", "Tiny Whiskers", "Whiskers"]);
    categories.set("neck", ["Gold Chain", "Fancy", "Black Necklace", "Red Necklace", "Plain"])
    categories.set("earrings", ["Jim Dangles", "Bar", "Flower", "Stud", "None"])
    categories.set("eyes", ["VR Goggles", "3D Glasses", "Crazy", "Closed", "Sunglasses", "Bandit Mask", "Crosseyed", "Looking Left", "Looking Up", "Looking Right"])
    categories.set("mouth", ["Straight", "Small Frown", "Frown", "Big Smile", "Small Smile", "Big Frown", "Smile"])
    categories.set("nose", ["Dark", "Tiny", "Normal", "No Nose", "Big"])
    categories.set("character", ["gL1tCh3D", "Irradiated", "Alvin", "Matthias", "Simon", "Templeton", "Reepicheep", "Jerry", "Stuart", "Common"])
    let keys = Array.from(categories.keys());
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        $(`#${key}`).append(`<option value="" selected>${key}</option>`);
        categories.get(key).map(function(opt) {
            $(`#${key}`).append(`<option value="${opt}">${opt}</option>`);
        })
    }
}

/* SORTING FUNCTIONS */

function sortBy(type) {
    $("#mice-on-sale-block").empty();
    let _listedMiceArray = Array.from(listedMice.values());
    let _currentListings = _listedMiceArray;
    if (type == "PriceHighToLow") {
        _currentListings.sort((a, b) => (a.price < b.price) ? 1 : -1)
    }
    else if (type == "PriceLowToHigh") {
        _currentListings.sort((a, b) => (a.price > b.price) ? 1 : -1)
    }
    else if (type == "RarityHighToLow") {
        _currentListings.sort((a, b) => (a.totalRarity < b.totalRarity) ? 1 : -1)
    }
    else if (type == "RarityLowToHigh") {
        _currentListings.sort((a, b) => (a.totalRarity > b.totalRarity) ? 1 : -1)
    }
    else if (type == "IdHighToLow") {
        _currentListings.sort((a, b) => (a.miceID < b.miceID) ? 1 : -1)
    }
    else if (type == "IdLowToHigh") {
        _currentListings.sort((a, b) => (a.miceID > b.miceID) ? 1 : -1)
    }
    for (let i = 0; i < _currentListings.length; i++) {
        $("#mice-on-sale-block").append(_currentListings[i].fakeJSX); 
    }
    if (darkModeOn) {
        $(".mice-on-sale").addClass("dark");
        $(".mice-on-sale *").addClass("dark");
    }
    else {
        $(".mice-on-sale").removeClass("dark");
        $(".mice-on-sale *").removeClass("dark");

    }
}

function stopProp(event) {
    event.stopPropagation();
}

/* POPUP MICE INFO FUNCTIONS */

async function showInfo(miceID) {
    closeInfo("click-info");

    let _miceId = Number(miceID);
    let _mice = miceObjectMap.get(_miceId);
    let _propertiesToDisplay = ["original", "character", "earrings", "eyes", "hat", 
                                "mouth", "neck", "nose", "whiskers"];
    let _infoFakeJSX = "";
    
    for (let i = 0; i < _propertiesToDisplay.length; i++) {
        _property = _propertiesToDisplay[i];
        _value = _mice[_property];
        _infoFakeJSX += `<div class='trait-box'><p class='trait-box-header'>${_property}:</p><p class="trait-box-value">${_value}</p></div>`;
    }

    let _micePrice = _mice.price;
    let _hidden = "";
    let delistButton = "";
    let editButton = "";
    let listButton = "";
    if (_micePrice == null) {
        _micePrice = "Not Listed"
        _hidden = "hidden";
        if ((await checkIfOwnsMice(_miceId)) == true) {
            listButton = `<a href="#" class="button w-button" id="list-button" onclick=openListPrompt(${miceID})>Create Listing</a>`;
        }
    }
    else {
        if ((await checkIfOwnsMice(_miceId)) == true) {
            delistButton = `<a href="#" class="button w-button" id="delist-button" onclick=removeMiceOnSale(${miceID})>Delist</a>`;
            editButton = `<a href="#" class="button w-button" id="edit-button" onclick=openEditPrompt(${miceID})>Edit Listing</a>`;
        }
    }
    
    $("body").append(`<div id='click-info' class='click-info'><span id="close" onclick='closeInfo("click-info");'>x</span><div id="img-container"><h2 class='heading-2' id='click-info-header'>Anonymice #${_miceId}</h2><img src='https://raw.githubusercontent.com/jozanza/anonymice-images/main/${miceID}.png' class='info-image'>${delistButton}${editButton}${listButton}</div><div id="click-info-spacer"><div id="spacer-content">${_micePrice}<span class="click-info-eth-logo ${_hidden}">Ξ</span></div></div><div id='traits'>${_infoFakeJSX}</div></div>`);
    if (darkModeOn) {
        $(".click-info").addClass("dark");
        $(".click-info *").addClass("dark");
    }
}

async function openEditPrompt(miceID) {
    const _listedMice = miceObjectMap.get(miceID);
    const _currentPrice = _listedMice.price;
    const _currentPrivacy = _listedMice.privacy;
    const _currentToAddress = _currentPrivacy === "Public" ? "N/A" : _listedMice.toAddress;
    const _darkClass = getDarkMode();

    const currentInfoJSX = `<br><div id='current-info'>Current Price:<br><div>${_currentPrice}<span class="click-info-eth-logo ${_darkClass}">Ξ</span></div>Current Privacy:<br>${_currentPrivacy}<br>Current Private Sale Address:<br>${_currentToAddress}</div>`;

    const updateJSX = `<div class="w-row ${_darkClass}">
                        <div class="updt-block w-col w-col-6 ${_darkClass}">
                            <div>
                                <h3>Update Price</h3>
                                <div>
                                <form><input type="number" id="updatePrice-price" name="updatePrice-price"
                                    placeholder="Price in ETH" value=""></form>
                                </div><br>
                                <a href="#" class="updt-button button w-button ${_darkClass}" onclick=updateMiceOnSalePrice(${miceID})>Update Price</a>
                            </div>
                        </div>
                        <div class="updt-block w-col w-col-6 ${_darkClass}">
                            <div>
                                <h3>Update to Private</h3>
                                <div>
                                <form><input type="text" id="updatePrivacy-address" name="updatePrivacy-address"
                                    placeholder="Recipient Address" value=""></form>
                                </div><br>
                                <a href="#" class="updt-button button w-button ${_darkClass}" onclick=updateMiceOnSalePrivacy(${miceID})>Update Privacy</a>
                            </div>
                        </div>
                    </div>`;

    $("body").append(`<div id='edit-prompt' class='click-info ${_darkClass}'><span id="edit-back" class="${_darkClass}" onclick='closeInfo("edit-prompt");'>❮</span><h3 class='heading-3 ${_darkClass}'>Editing Listing: Anonymice #${miceID}</h3>${currentInfoJSX}<div>${updateJSX}</div></div>`);
}

async function openListPrompt(miceID) {
    const _darkClass = getDarkMode();

    const createListingJSX = `<br><div class="w-row ${_darkClass}">
                                <div class="list-block ${_darkClass}">
                                    <div>
                                        <h3>Public Sale</h3>
                                        <div>
                                            <form><input type="number" id="publicSale-price" name="publicSale-price"
                                                placeholder="Price in ETH" value=""></form>
                                        </div><br>
                                        <a href="#" class="button w-button ${_darkClass}" onclick=putMiceUpForSale(${miceID})>Create Public Listing</a>
                                    </div>
                                </div>
                                <br>
                                <div class="list-block ${_darkClass}">
                                    <div>
                                        <h3>Private Sale</h3>
                                        <div>
                                        <form><input type="number" id="privateSale-price" name="privateSale-price"
                                            placeholder="Price in ETH" value=""></form>
                                        </div><br>
                                        <div>Enter Recipient Address</div>
                                        <div>
                                            <form><input type="text" id="privateSale-address" name="privateSale-address" placeholder="Input Address"
                                                value=""></form>
                                        </div><br>
                                        <a href="#" class="button w-button ${_darkClass}" onclick=putMiceUpForPrivateSale(${miceID})>Create Private Listing</a>
                                    </div>
                                </div>
                            </div>`;

    $("body").append(`<div id='create-listing-prompt' class='click-info ${_darkClass}'><span id="list-back" class="${_darkClass}" onclick='closeInfo("create-listing-prompt");'>❮</span><h3 class='heading-3 ${_darkClass}'>Creating Listing: Anonymice #${miceID}</h3><div>${createListingJSX}</div></div>`);
}

function closeInfo(elementID) {
    $(`#${elementID}`).remove();
}

//can lose try catch logic when no longer on testnet (accomodation cause we list burned mice on testnet)
class Mice {
    constructor(miceID) {
        this.miceID = Number(miceID);
        this.original = this.miceID < 2000 ? "Yes" : "No";
        this.price = null;
        this.priceText = null;
        this.privacy = null;
        this.toAddress = null;
        this.fakeJSX = null;
        try {
            let _miceData = miceData[miceID];
            this.elementID = `mice-for-sale-${miceID}`;
            this.totalRarity = _miceData["rarity.score"];
            this.characterRarity = _miceData["character.rarity"];
            this.character = _miceData["character.value"]
            this.earringsRarity = _miceData["earrings.rarity"];
            this.earrings = _miceData["earrings.value"];
            this.eyesRarity = _miceData["eyes.rarity"];
            this.eyes = _miceData["eyes.value"];
            this.hatRarity = _miceData["hat.rarity"];
            this.hat = _miceData["hat.value"];
            this.mouthRarity = _miceData["mouth.rarity"];
            this.mouth = _miceData["mouth.value"];
            this.neckRarity = _miceData["neck.rarity"];
            this.neck = _miceData["neck.value"];
            this.noseRarity = _miceData["nose.rarity"];
            this.nose= _miceData["nose.value"];
            this.whiskersRarity = _miceData["whiskersr.rarity"];
            this.whiskers = _miceData["whiskers.value"];
        }
        catch {}
        miceObjectMap.set(this.miceID, this);
    }
  }