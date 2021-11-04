
async function getSalesHistory() {

    let eventFilter = marketplace.filters.MiceBought();
    let events = await marketplace.queryFilter(eventFilter);
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";

    let _darkClass;
    if (darkModeOn) {
        _darkClass = " dark";
    }
    else {
        _darkClass = "";
    }

    for (let i = events.length-1; i >= 0; i--) {
        const event = events[i];
        buyer = event.args.buyer;
        seller = event.args.seller;
        tokenID = event.args.tokenId;
        _mice = new Mice(tokenID)

        price = getPriceText(formatEther(event.args.price));
        let fakeJSX = `<tr class="sale-row${_darkClass}" onclick="showInfo(${Number(tokenID)})"><td><img src="${_baseImageURI}${tokenID}.png" loading="lazy" width="64" alt="" class="mice-image${_darkClass}"><br>#${tokenID}</td><td>${price}<span class="listing-eth-logo">Ξ</span></td><td>${seller}</td><td>${buyer}</td></tr>`
        $("#mice-sales").append(fakeJSX);
    }

}
