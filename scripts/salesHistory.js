
async function getSalesHistory() {
    $("#recent-loading").remove();
    let eventFilter = marketplace.filters.MiceBought();
    let events = await marketplace.queryFilter(eventFilter);
    events = events.slice(-25);

    for (let i = events.length-1; i >= 0; i--) {
        let sale = await getSaleHistoryItem(events[i]);
        $("#mice-sales").append(sale);
    }

}

async function getHighestSales() {
    let eventFilter = marketplace.filters.MiceBought();
    let events = await marketplace.queryFilter(eventFilter);
    $("#top-loading").remove();

    events = events.sort((a, b) => (Number(a.args.price) < Number(b.args.price)) ? 1 : -1).slice(0, 15);

    for (let i = 0; i < events.length; i++) {
        let sale = await getSaleHistoryItem(events[i]);
        $("#mice-top-sales").append(sale);
    }

}

async function getRecentListings() {
    let eventFilter = marketplace.filters.MicePutUpForSale();
    let events = await marketplace.queryFilter(eventFilter);
    $(".sale-row").remove();

    $("#listings-loading").remove();
    events = events.slice(-25);

    for (let i = events.length-1; i >= 0; i--) {
        let sale = await getSaleHistoryItem(events[i], false, true);
        $("#mice-listings").append(sale);
    }
}

async function getDisplayableAddress(address) {
    let ensAddress = await provider.lookupAddress(address)
    if (ensAddress) {
        return ensAddress
    }
    else {
        return address.substring(0, 8);
    }
}

async function getSaleHistoryItem(event, individual=false, recentlyListed=false) {
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";
    const baseEtherscanLinkTx = "https://rinkeby.etherscan.io/tx/";
    const baseEtherscanLinkAddress = "https://etherscan.io/address/";

    let _darkClass = getDarkMode();

    const txId = event.transactionHash;
    const blockTimestamp = (await provider.getBlock(event.blockNumber)).timestamp * 1000;
    const timeDelta = moment(blockTimestamp).fromNow();

    let buyer = ""
    if (!recentlyListed) {
        buyer = await getDisplayableAddress(event.args.buyer);
    }

    const seller = await getDisplayableAddress(event.args.seller);
    const tokenID = Number(event.args.tokenId);
    if (!listedMice.get(tokenID)) {
        const _mice = new Mice(tokenID)
    }

    let miceImgCol = "";
    if (!individual) {
        miceImgCol = `<td class="sold-mice-img-container ${_darkClass}"  onclick="showInfo(${tokenID})"><img src="${_baseImageURI}${tokenID}.png" loading="lazy" alt="" class="sold-mice-img ${_darkClass}"><br>#${tokenID}</td>`;
    }

    let buyerCol = "";
    if (!recentlyListed) {
        buyerCol = `<td><a href="${baseEtherscanLinkAddress}${event.args.buyer}" target="_blank" rel="noopener noreferrer">${buyer}<p style="display:inline;font-size: 1.5vw">⬈</p></a></td>`
    }

    const price = getPriceText(formatEther(event.args.price));
    const fakeJSX = `<tr class="sale-row ${_darkClass}">
                    ${miceImgCol}
                    <td>${price}<span class="listing-eth-logo">Ξ</span></td>
                    <td><a href="${baseEtherscanLinkAddress}${event.args.seller}" target="_blank" rel="noopener noreferrer">${seller}<p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
                    ${buyerCol}
                    <td><a href="${baseEtherscanLinkTx}${txId}" id="${txId}" target="_blank" rel="noopener noreferrer">${timeDelta} <p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
                    </tr>`

    return fakeJSX;
}

async function getTokenSalesHistory(id) {
    let eventFilter = marketplace.filters.MiceBought(id);
    let events = await marketplace.queryFilter(eventFilter);

    if (events.length > 0) {
        let historyJSX = `<table id="mice-sales">
        <tr id="title-row">
            <th class="${getDarkMode()}">Price</th>
            <th class="${getDarkMode()}">From</th>
            <th class="${getDarkMode()}">To</th>
            <th class="${getDarkMode()}">Time</th>
        </tr>`;

        for (let i = events.length - 1; i >= 0; i--) {
            historyJSX += await getSaleHistoryItem(events[i], true);
        }

        historyJSX += "</table>"

        return historyJSX;
    }
    else {
        return "<div>No trading history.</div>"
    }

}

async function getCurrentOwner(id) {
    let currentOwner = await anonymice.ownerOf(id);
    if (currentOwner == marketplaceAddress) {
        const _listing = await marketplace.miceForSaleToTokenId(id);
        currentOwner = _listing.sellerAddress;
    }

    return currentOwner;
}