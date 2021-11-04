
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

    for (let i=0; i< events.length; i++) {
        const event = events[i];
        buyer = event.args.buyer;
        seller = event.args.seller;
        tokenID = event.args.tokenId;
        price = formatEther(event.args.price);
        let fakeJSX = `<tr><td><img src="${_baseImageURI}${tokenID}.png" loading="lazy" width="64" alt="" class="mice-image${_darkClass}"><br>#${tokenID}</td><td>${price}<span class="listing-eth-logo">Ξ</span></td><td>${seller}</td><td>${buyer}</td></tr>`
        $("#mice-sales").append(fakeJSX);
        // console.log(` sold by  to  for `);
    }

}

// getSalesHistory()
