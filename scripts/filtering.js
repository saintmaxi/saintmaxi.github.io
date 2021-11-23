
var miceData;

$.getJSON('../assets/mice_data.json', function(json) {
    miceData = json;
});

var rarityData;
var rarityLoaded = false;

$.getJSON('../assets/rarity_data.json', function(json) {
    rarityData = json;
    rarityLoaded = true;
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
    let displayed = publicListingsCount - $(".mice-on-sale.hidden").length - $(".mice-on-sale.price-hidden").length + $(".mice-on-sale.hidden.price-hidden").length;
    $("#filter-results-count").text(`${displayed} Mice Found`);
    let _listedMiceArray = Array.from(listedMice.values()).filter(listing => listing.privacy == "Public");;
    for (let i = 0; i < _listedMiceArray.length; i++) {
        let mouse = _listedMiceArray[i];
        mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
    }
}

function _filterTraits() {
    let keys = Array.from(filters.keys());
    let _listedMiceArray = Array.from(listedMice.values()).filter(listing => listing.privacy == "Public");;
    for (let i = 0; i < keys.length; i++) {
        let type = keys[i];
        for (let i = 0; i < _listedMiceArray.length; i++) {
            let mouse = _listedMiceArray[i];
            if (mouse[type] != filters.get(type)) {
                $(`#${mouse.elementID}`).addClass("hidden");
                mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
            } 
        }
    }
    let displayed = publicListingsCount - $(".mice-on-sale.hidden").length - $(".mice-on-sale.price-hidden").length + $(".mice-on-sale.hidden.price-hidden").length;
    $("#filter-results-count").text(`${displayed} Mice Found`);
}

function _unfilterTraits(type, trait) {
    let _listedMiceArray = Array.from(listedMice.values()).filter(listing => listing.privacy == "Public");;
    for (let i = 0; i < _listedMiceArray.length; i++) {
        let mouse = _listedMiceArray[i];
        if (mouse[type] != trait) {
            $(`#${mouse.elementID}`).removeClass("hidden");
            mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
        } 
    }
}

function _populateFilters() {
    const categories = new Map();
    categories.set("Hat",  ["Astronaut", "Bane", "Soldier", "Cheese", "Motorcycle Helmet", "Elvis", "Halo", "Construction Hat", "Karate Kid", "No Hat"]);
    categories.set("Whiskers", ["Handlebar", "No Whiskers", "Big Whiskers", "Tiny Whiskers", "Whiskers"]);
    categories.set("Neck", ["Gold Chain", "Fancy", "Black Necklace", "Red Necklace", "Plain"])
    categories.set("Earrings", ["Jim Dangles", "Bar", "Flower", "Stud", "None"])
    categories.set("Eyes", ["VR Goggles", "3D Glasses", "Crazy", "Closed", "Sunglasses", "Bandit Mask", "Crosseyed", "Looking Left", "Looking Up", "Looking Right"])
    categories.set("Mouth", ["Straight", "Small Frown", "Frown", "Big Smile", "Small Smile", "Big Frown", "Smile"])
    categories.set("Nose", ["Dark", "Tiny", "Normal", "No Nose", "Big"])
    categories.set("Character", ["gL1tCh3D", "Irradiated", "Alvin", "Matthias", "Simon", "Templeton", "Reepicheep", "Jerry", "Stuart", "Common"])
    let keys = Array.from(categories.keys());
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        $(`#${key}`).append(`<option value="" selected>${key}</option>`);
        categories.get(key).map(function(opt) {
            $(`#${key}`).append(`<option value="${opt}">${opt}</option>`);
        })
    }
}

function filterByPrice() {
    let _listedMiceArray = Array.from(listedMice.values()).filter(listing => listing.privacy == "Public");;
    let min = Number($('#minPrice').val());
    let max = Number($('#maxPrice').val());
    if (min && max) {
        if (min > max || max < min) {
            displayErrorMessage('Invalid price range');
        }
        else {
            console.log(`${min} - ${max}`)
            for (let i = 0; i < _listedMiceArray.length; i++) {
                let mouse = _listedMiceArray[i];
                if (mouse.price < min || mouse.price > max) {
                    $(`#${mouse.elementID}`).addClass("price-hidden");
                    mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
                } 
                else {
                    $(`#${mouse.elementID}`).removeClass("price-hidden");
                    mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
                }
            }
        }
    }
    else if (min) {
        console.log(`> ${min}`)
        for (let i = 0; i < _listedMiceArray.length; i++) {
            let mouse = _listedMiceArray[i];
            if (mouse.price < min) {
                $(`#${mouse.elementID}`).addClass("price-hidden");
                mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
            } 
            else {
                $(`#${mouse.elementID}`).removeClass("price-hidden");
                mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
            }
        }
    }
    else if (max) {
        console.log(`< ${max}`)
        for (let i = 0; i < _listedMiceArray.length; i++) {
            let mouse = _listedMiceArray[i];
            if (mouse.price > max) {
                $(`#${mouse.elementID}`).addClass("price-hidden");
                mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
            } 
            else {
                $(`#${mouse.elementID}`).removeClass("price-hidden");
                mouse.fakeJSX = $(`#${mouse.elementID}`).get(0);
            }
        }
    }
    let displayed = publicListingsCount - $(".mice-on-sale.hidden").length - $(".mice-on-sale.price-hidden").length + $(".mice-on-sale.hidden.price-hidden").length;
    $("#filter-results-count").text(`${displayed} Mice Found`);
}

function clearPriceFilter() {
    $("#minPrice").val("");
    $("#maxPrice").val("");
    $(".price-hidden").removeClass("price-hidden");
    let displayed = publicListingsCount - $(".mice-on-sale.hidden").length - $(".mice-on-sale.price-hidden").length + $(".mice-on-sale.hidden.price-hidden").length;
    $("#filter-results-count").text(`${displayed} Mice Found`);
}

/* SORTING FUNCTIONS */

function sortBy(type) {
    $("#mice-on-sale-block").empty();
    let _listedMiceArray = Array.from(listedMice.values());
    let _currentListings = _listedMiceArray.filter(listing => listing.privacy == "Public");
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

function titleCase(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

/* POPUP MICE INFO FUNCTIONS */

async function showInfo(miceID, ethEnabledBrowser=true) {
    closeInfo("click-info");
    closeInfo("edit-prompt");
    closeInfo("create-listing-prompt");

    let _miceId = Number(miceID);
    let _mice = miceObjectMap.get(_miceId);
    let _propertiesToDisplay = ["original", "character", "earrings", "eyes", "hat", 
                                "mouth", "neck", "nose", "whiskers"];
    let _infoFakeJSX = "";
    
    for (let i = 0; i < _propertiesToDisplay.length; i++) {
        _property = _propertiesToDisplay[i];
        _value = _mice[_property];
        _rarity = _mice[`${_property}Rarity`];
        _infoFakeJSX += `<div class='trait-box'><p class='trait-box-header'>${titleCase(_property)}:</p><p class="trait-box-value">${_value} <br id='trait-box-space-big-screen'><br id='trait-box-space'>(${_rarity})</p></div>`;
    }

    let _hidden = "";
    let delistButton = "";
    let editButton = "";
    let listButton = "";
    let buyButton = "";
    let _micePrice = _mice.price;
    if (ethEnabledBrowser) {
        if (connected) {
            if (_micePrice == null) {
                _micePrice = "Not Listed"
                _hidden = "hidden";
                if ((await checkIfOwnsMice(_miceId)) == true) {
                    listButton = `<a href="#" class="button w-button" id="list-button" onclick=openListPrompt(${miceID})>List Mice</a>`;
                }
            }
            else {
                if ((await checkIfOwnsMice(_miceId)) == true) {
                    delistButton = `<a href="#" class="button w-button" id="delist-button" onclick=removeMiceOnSale(${miceID})>Delist</a>`;
                    editButton = `<a href="#" class="button w-button" id="edit-button" onclick=openEditPrompt(${miceID})>Edit Listing</a>`;
                }
                else {
                    buyButton = `<a href="#" class="button w-button" id="buy-button" onclick=buyMice(${_miceId})>Buy</a>`;
                }
            }
        }
        else {
            if (_micePrice == null) {
                _micePrice = "Not Listed"
                _hidden = "hidden";
            }
            else {
                buyButton = `<a href="#" class="button w-button" id="buy-button" onclick='closeInfo("click-info");connect()')>Connect Wallet to Buy</a>`;
            }
        }
    }
    else {
        console.log('here')
        _micePrice = "";
        _hidden = "hidden";
    }
   
   
    
    $("body").append(`<div id='click-info' class='click-info'><span id="close" onclick='closeInfo("click-info");'>x</span><div id="img-container"><h2 class='heading-2' id='click-info-header'>Anonymice #${_miceId}</h2><img src='https://raw.githubusercontent.com/jozanza/anonymice-images/main/${miceID}.png' class='info-image'>${delistButton}${editButton}${listButton}${buyButton}</div><div id="click-info-spacer"><div id="spacer-content">${_micePrice}<span class="click-info-eth-logo ${_hidden}">Ξ</span></div></div><div id='mobile-buttons'>${delistButton}${editButton}${listButton}${buyButton}</div><div id='traits'>${_infoFakeJSX}</div></div>`);
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

    const currentInfoJSX = `<br><div id='current-info'><h3>Current Price:</h3><div>${_currentPrice}<span class="click-info-eth-logo ${_darkClass}">Ξ</span></div><h3>Current Privacy:</h3>${_currentPrivacy}<br><h3>Private Sale Address:</h3><div style="overflow-x:scroll;max-width:100%;">${_currentToAddress}</div></div>`;

    const updateJSX = `<div class="w-row ${_darkClass}" id='updt-content'>
                        <div class="updt-block w-col w-col-6 ${_darkClass}">
                            <div>
                                <h3>Update Price</h3>
                                <div>
                                <form><input class="${_darkClass}" type="number" id="updatePrice-price" name="updatePrice-price"
                                    placeholder="Price in ETH" value=""></form>
                                </div><br>
                                <a href="#" class="updt-button button w-button ${_darkClass}" onclick=updateMiceOnSalePrice(${miceID})>Update Price</a>
                            </div>
                        </div>
                        <div class="updt-block w-col w-col-6 ${_darkClass}">
                            <div>
                                <h3>Update to Private</h3>
                                <div>
                                <form><input class="${_darkClass}" type="text" id="updatePrivacy-address" name="updatePrivacy-address"
                                    placeholder="Recipient Address" value=""></form>
                                </div><br>
                                <a href="#" class="updt-button button w-button ${_darkClass}" onclick=updateMiceOnSalePrivacy(${miceID})>Update Privacy</a>
                            </div>
                        </div>
                    </div>`;

    $("body").append(`<div id='edit-prompt' class='click-info ${_darkClass}'><span id="edit-back" class="${_darkClass}" onclick='closeInfo("edit-prompt");'>❮</span><h3 class='heading-3 ${_darkClass}'>Editing Listing: Anonymice #${miceID}</h3><div id='edit-prompt-content'>${currentInfoJSX}<br>${updateJSX}</div></div>`);
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
                                        <div>
                                            <form><input type="text" id="privateSale-address" name="privateSale-address" placeholder="Recipient Address"
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
        this.originalRarity = rarityData["Original"][this.original];
        this.price = null;
        this.priceText = null;
        this.privacy = null;
        this.toAddress = null;
        this.fakeJSX = null;
        try {
            let _miceData = miceData[miceID];
            this.elementID = `mice-for-sale-${miceID}`;
            this.totalRarity = _miceData["rarity.score"];
            this.character = _miceData["character.value"];
            this.characterRarity = rarityData["Character"][this.character];
            this.earrings = _miceData["earrings.value"];
            this.earringsRarity = rarityData["Earrings"][this.earrings];
            this.eyes = _miceData["eyes.value"];
            this.eyesRarity = rarityData["Eyes"][this.eyes];
            this.hat = _miceData["hat.value"];
            this.hatRarity = rarityData["Hat"][this.hat];
            this.mouth = _miceData["mouth.value"];
            this.mouthRarity = rarityData["Mouth"][this.mouth];
            this.neck = _miceData["neck.value"];
            this.neckRarity = rarityData["Neck"][this.neck];
            this.nose= _miceData["nose.value"];
            this.noseRarity = rarityData["Nose"][this.nose];
            this.whiskers = _miceData["whiskers.value"];
            this.whiskersRarity = rarityData["Whiskers"][this.whiskers];
        }
        catch {}
        miceObjectMap.set(this.miceID, this);
    }
  }