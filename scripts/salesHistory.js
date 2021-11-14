
async function getSalesHistory() {
    $(".sale-row").remove();
    let eventFilter = marketplace.filters.MiceBought();
    let events = await marketplace.queryFilter(eventFilter);

    for (let i = events.length-1; i >= 0; i--) {
        let sale = await getSaleHistoryItem(events[i]);
        // const event = events[i];
        // const txId = event.transactionHash;
        // const blockTimestamp = (await provider.getBlock(event.blockNumber)).timestamp * 1000;
        // const timeDelta = moment(blockTimestamp).fromNow();


        // const buyer = await getDisplayableAddress(event.args.buyer);
        // const seller = await getDisplayableAddress(event.args.seller);
        // const tokenID = Number(event.args.tokenId);
        // if (!listedMice.get(tokenID)) {
        //     const _mice = new Mice(tokenID)
        // }

        // const price = getPriceText(formatEther(event.args.price));
        // const fakeJSX = `<tr class="sale-row ${_darkClass}">
        //                 <td class="sold-mice-img-container ${_darkClass}"  onclick="showInfo(${tokenID})"><img src="${_baseImageURI}${tokenID}.png" loading="lazy" alt="" class="sold-mice-img ${_darkClass}"><br>#${tokenID}</td>
        //                 <td>${price}<span class="listing-eth-logo">Ξ</span></td>
        //                 <td><a href="${baseEtherscanLinkAddress}${event.args.seller}" target="_blank" rel="noopener noreferrer">${seller}<p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
        //                 <td><a href="${baseEtherscanLinkAddress}${event.args.buyer}" target="_blank" rel="noopener noreferrer">${buyer}<p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
        //                 <td><a href="${baseEtherscanLinkTx}${txId}" id="${txId}" target="_blank" rel="noopener noreferrer">${timeDelta} <p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
        //                </tr>`
        $("#mice-sales").append(sale);
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

async function getSaleHistoryItem(event) {
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";
    const baseEtherscanLinkTx = "https://rinkeby.etherscan.io/tx/";
    const baseEtherscanLinkAddress = "https://etherscan.io/address/";

    let _darkClass = getDarkMode();

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
                    <td><a href="${baseEtherscanLinkAddress}${event.args.seller}" target="_blank" rel="noopener noreferrer">${seller}<p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
                    <td><a href="${baseEtherscanLinkAddress}${event.args.buyer}" target="_blank" rel="noopener noreferrer">${buyer}<p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
                    <td><a href="${baseEtherscanLinkTx}${txId}" id="${txId}" target="_blank" rel="noopener noreferrer">${timeDelta} <p style="display:inline;font-size: 1.5vw">⬈</p></a></td>
                    </tr>`

    return fakeJSX;
}