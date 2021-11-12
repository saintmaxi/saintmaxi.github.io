
async function getSalesHistory() {

    let eventFilter = marketplace.filters.MiceBought();
    let events = await marketplace.queryFilter(eventFilter);
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";
    const baseEtherscanLink = "https://rinkeby.etherscan.io/tx/";

    let _darkClass = getDarkMode();

    for (let i = events.length-1; i >= 0; i--) {
        const event = events[i];
        const txId = event.transactionHash;
        const blockTimestamp = (await provider.getBlock(event.blockNumber)).timestamp * 1000;
        const timeDelta = moment(blockTimestamp).fromNow();


        const buyer = await getDisplayableAddress(event.args.buyer);
        const seller = await getDisplayableAddress(event.args.seller);
        const tokenID = Number(event.args.tokenId);
        if (!listedMice.get(tokenID)) {
            const _mice = new Mice(tokenID)
        }

        const price = getPriceText(formatEther(event.args.price));
        const fakeJSX = `<tr class="sale-row ${_darkClass}">
                        <td class="sold-mice-img-container ${_darkClass}"  onclick="showInfo(${tokenID})"><img src="${_baseImageURI}${tokenID}.png" loading="lazy" alt="" class="sold-mice-img ${_darkClass}"><br>#${tokenID}</td>
                        <td>${price}<span class="listing-eth-logo">Ξ</span></td>
                        <td>${seller}</td>
                        <td>${buyer}</td>
                        <td><a href="${baseEtherscanLink}${txId}" id="${txId}" target="_blank" rel="noopener noreferrer">${timeDelta} <p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
                       </tr>`
        $("#mice-sales").append(fakeJSX);
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