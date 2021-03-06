// Ethers.js Implementation by Inuarashi @ https://twitter.com/0xInuarashi; 
// Contact for work or partnerships at Discord => 0xInuarashi #1234;

/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const anonymiceAddress = "0xbad6186E92002E312078b5a1dAfd5ddf63d3f731";
// const anonymiceAbi = () => {
//     return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct Anonymice.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCheethCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cheethAddress","type":"address"}],"name":"setCheethAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]';
// };

// const marketplaceAddress = "";
// const marketplaceAbi = () => {
//     return
// };

// const etherscanBase = `https://etherscan.io/tx/`;

// const metamaskDeeplink = "";

// const baseURL = "";

// const correctChain = 1;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

const anonymiceAddress = "0x0C721A99C1181eEa7BE92bb45b764cC7b9172E3e";
const anonymiceAbi = () => {
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct Anonymice.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCheethCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cheethAddress","type":"address"}],"name":"setCheethAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]';
};

const marketplaceAddress = "0xF356D734695a1B7041Ab98d843905DC6d1bB216b";
const marketplaceAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": false, "internalType": "address", "name": "privateSaleAddress", "type": "address" } ], "name": "ListingUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": true, "internalType": "address", "name": "buyer", "type": "address" } ], "name": "MiceBought", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": false, "internalType": "address", "name": "privateSaleAddress", "type": "address" } ], "name": "MicePutUpForSale", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" } ], "name": "MiceRemovedFromSale", "type": "event" }, { "inputs": [], "name": "anonymiceAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "buyMice", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getAllMiceOnSale", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAmountOfMiceOnSale", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getAmountOfMiceOnSaleByAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getMiceOnSaleByAddress", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "start_", "type": "uint256" }, { "internalType": "uint256", "name": "end_", "type": "uint256" } ], "name": "getMiceOnSaleByAddressSegment", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "start_", "type": "uint256" }, { "internalType": "uint256", "name": "end_", "type": "uint256" } ], "name": "getMiceOnSaleSegment", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceCurrentlyOnSale", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceCurrentlyOnSaleIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceForSaleToTokenId", "outputs": [ { "internalType": "address", "name": "sellerAddress", "type": "address" }, { "internalType": "uint256", "name": "miceId", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "address", "name": "privateSaleAddress", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceOnSaleByAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceOnSaleByAddressIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" }, { "internalType": "address", "name": "privateSaleAddress_", "type": "address" } ], "name": "putMiceUpForPrivateSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "putMiceUpForSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "removeMiceOnSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmountOfEthTraded", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalAmountOfMiceSold", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "updateMiceOnSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" }, { "internalType": "address", "name": "privateSaleAddress_", "type": "address" } ], "name": "updateMiceOnSaleToPrivate", "outputs": [], "stateMutability": "nonpayable", "type": "function"}]';
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

const baseURL = "https://saintmaxi.github.io";

const metamaskDeeplink = "https://metamask.app.link/dapp/saintmaxi.github.io/";

const correctChain = 4;

/*********************************END CONFIG************************************/


if (window.ethereum == undefined) {
    if (window.location.pathname != "/" && window.location.pathname != "/index" && window.location.pathname != "/faq" && window.location.pathname != "/all-mice") {
        displayErrorMessage('Use a web3 enabled browser with MetaMask or the MetaMask mobile app to access this feature of Anonymice Marketplace.', false);
        $("#error-popup p").append(`<br><a href="/" class="contract-link ${getDarkMode()}" rel="noopener noreferrer">Home</a>|<a href="${metamaskDeeplink}" class="contract-link ${getDarkMode()}" target="_blank" rel="noopener noreferrer">Open in MetaMask???</a>`);
    }

    window.onload = async() => {
        if (window.location.pathname == '/all-mice') {
            await loadRarityData();
            await getAllMice();
        }
    }
}

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

var anonymice = new ethers.Contract(anonymiceAddress, anonymiceAbi(), provider);
var marketplace = new ethers.Contract(marketplaceAddress, marketplaceAbi(), provider);

const connect = async() => { 
    await provider.send("eth_requestAccounts", []);
    connected = true;
    anonymice = new ethers.Contract(anonymiceAddress, anonymiceAbi(), signer);
    marketplace = new ethers.Contract(marketplaceAddress, marketplaceAbi(), signer);
};

const getAddress = async() => { return await signer.getAddress() };

const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus

const getChainId = async() => { return await signer.getChainId() };

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network", false);
    }
    else {
        $("#error-popup").remove();
        $("#block-screen-error").remove();
    }
}

var listedMice = new Map();

var loading = false;

// mice updater functions
const updateAvailableMice = async() => {
    let _miceInWallet = await anonymice.walletOfOwner( (await getAddress()) );
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";

    $("#your-mice").empty();
    $("#your-available-mice-count").text(`Your Available Mice (${_miceInWallet.length})`);
    let _darkClass = getDarkMode();
    _miceInWallet = [..._miceInWallet].sort(function(a, b){return a - b});
    for (let i = 0; i < _miceInWallet.length; i++) {
        const _miceId = _miceInWallet[i];
        new Mice(_miceId);
        const _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="available-mice-${_miceId}" onclick=showInfo(${_miceId})><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="100%" alt="" class="mice-image${_darkClass}" style="border:none;background-color:transparent;"><div>#${_miceId}</div></div>`;
        $("#your-mice").append(_fakeJSX);
    };
};

// mice updater functions
const updateYourMarketMice = async() => {
    let _miceInMarket = await marketplace.getMiceOnSaleByAddress( (await getAddress()) );
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";

    $("#your-market-mice").empty();
    $("#your-listed-mice-count").text(`Your Listed Mice (${_miceInMarket.length})`);

    let _darkClass = getDarkMode();
    _miceInMarket = [..._miceInMarket].sort();
    if (_miceInMarket.length == 0) {
        $("#your-market-mice").text('No mice listed.');
    }
    else {
        for (let i = 0; i < _miceInMarket.length; i++) {
            const _miceId = _miceInMarket[i];
            const _miceListing = await marketplace.miceForSaleToTokenId(_miceId);
            const _micePrice = _miceListing.price;
            const _micePriceInETH = formatEther(_micePrice);
            const _priceText = getPriceText(_micePriceInETH);
            const _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="my-listed-mice-${_miceId}" onclick=showInfo(${_miceId})><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="100%" alt="" class="mice-image${_darkClass}"  style="border:none;background-color:transparent;"><div>#${_miceId}</div><div class="listed-mice-price ${_darkClass}">${_priceText}<span class="listing-eth-logo">??</span></div></div>`;
            $("#your-market-mice").append(_fakeJSX);
        };
    }
};

var publicListingsCount = 0;
var privateListingsCount = 0;

// marketplace updater functions
const updateMarketListings = async() => {
    resetFilters()
    clearPriceFilter()
    publicListingsCount = 0;
    privateListingsCount = 0;
    $("#filter-results-count").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span> Mice Found`);


    const linkedid = getUrlVars()['id'];

    const _currentMiceOnSale = await marketplace.getAllMiceOnSale();

    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";

    $("#mice-on-sale-block").empty();
    $("#mice-on-sale-block-prvt").empty();

    let _darkClass = getDarkMode();

    let publicSalesJSX = "";
    let privateSalesJSX = "";

    let floor = 9999999999999;
    listedMice = new Map();
    for (let i = 0; i < _currentMiceOnSale.length; i++) {
        const _miceId = _currentMiceOnSale[i];
        const _miceOnSale = new Mice(_miceId);
        const _miceListing = await marketplace.miceForSaleToTokenId(_miceId);
        const _micePrice = _miceListing.price;
        const _micePriceInETH = formatEther(_micePrice);

        let _priceText = getPriceText(_micePriceInETH);

        const _listingPrivacy = _miceListing.privateSaleAddress === "0x0000000000000000000000000000000000000000" ? "Public" : "Private";
        _miceOnSale.toAddress = _miceListing.privateSaleAddress;
        const _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="mice-for-sale-${_miceId}" onclick=showInfo(${_miceId}) ><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="100%" alt="" class="mice-image${_darkClass}" style="border:none;background-color:transparent;"><div>#${_miceId}</div><div class="listed-mice-price ${_darkClass}">${_priceText}<span class="listing-eth-logo">??</span></div></div>`;
        _miceOnSale.price = Number(_micePriceInETH);
        _miceOnSale.priceText = _priceText;
        _miceOnSale.privacy = _listingPrivacy;
        _miceOnSale.fakeJSX = _fakeJSX;
        listedMice.set(Number(_miceId), _miceOnSale);
        if (_listingPrivacy == "Public") {
            publicSalesJSX += _fakeJSX; 
            publicListingsCount+=1;
            if (_micePriceInETH < floor) {
                floor = _micePriceInETH;
            }
        }
        else {
            if (connected) {
                if (_miceListing.privateSaleAddress == (await getAddress())) {
                    privateSalesJSX += _fakeJSX; 
                    privateListingsCount += 1;
                }
            }
        }
        floor = Number(Number(floor).toFixed(4));
    };

    $("#mice-on-sale-block").append(publicSalesJSX); 
    $("#mice-on-sale-block-prvt").append(privateSalesJSX); 

    sortBy("PriceLowToHigh");

    if (linkedid) {
        showInfo(linkedid);
    }

    if (privateListingsCount > 0) {
        $("#your-prvt-sales").removeClass("prvt-hidden");
    }
    else {
        $("#your-prvt-sales").addClass("prvt-hidden");
    }

    $("#filter-results-count").text(`${publicListingsCount} Mice Found`);


    if (floor == 0) {
        floor = "0";
    }
    else if (floor < 0.01) {
        floor = "< 0.01";
    }
    else if (floor == 9999999999999) {
        floor = "-";
    }
    $("#floor").text(floor);
};

const checkPrivateSaleAddress = async() => {
    const _miceId = $("#privateSaleLookup-miceId").val();
    const _miceListing = await marketplace.miceForSaleToTokenId(_miceId);
    const _privateSaleAddress = _miceListing.privateSaleAddress;
    $("#privateSaleLookup-address").text(_privateSaleAddress);
};

function getPriceText(_micePriceInETH) {
    let _priceText = _micePriceInETH;
    if (_micePriceInETH == 0) {
        _priceText = "0";
    }
    else if (_micePriceInETH < 0.01) {
        _priceText = "< 0.01";
    }
    else if (_micePriceInETH > 1000) {
        _priceText = "> 1000";
    }
    else {
        _priceText = Number(Number(_micePriceInETH).toFixed(4));
    }
    return _priceText;
}

const checkIfOwnsMice = async(tokenId_) => {
        let isOwner;
        const buyerAddress = await getAddress();
        if (buyerAddress == (await anonymice.ownerOf(tokenId_))) {
            isOwner = true;
        }
        else {
            let buyerListings = await marketplace.getMiceOnSaleByAddress(buyerAddress);
            buyerListings = buyerListings.map(function(x) {
                return Number(x);
            });
    
            isOwner = buyerListings.includes(tokenId_);
        }

        return isOwner;
}

// contract approval functions (unused, lol)
const approveMiceToMarketplace = async() => {
    await anonymice.setApprovalForAll(marketplaceAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
        closeInfo("click-info");
        $('#block-screen').remove();
    });
};

const checkApprovalOfMice = async() => {
    const userAddress = await getAddress();
    if ( ! (await anonymice.isApprovedForAll(userAddress, marketplaceAddress)) ) {
        // displayErrorMessage(`Error: You must set approval for marketplace.`);
        $("#market-approval-section").removeClass("hidden");
        return false;
    } else {
        $("#market-approval-section").remove();
        return true;
    }
};

// marketplace functions
const buyMice = async(tokenId_) => {
    try {
        const _listingInfo = listedMice.get(Number(tokenId_));
        const buyerAddress = await getAddress();
        const isOwner = await checkIfOwnsMice(tokenId_);
        if (isOwner) {
            displayErrorMessage("Error: You own this Mice!");
        }
        else if (_listingInfo.privacy == "Private" && buyerAddress !== _listingInfo.toAddress) {
            displayErrorMessage("Error: You are not the recipient!");
        }
        else {
            const _listing = await marketplace.miceForSaleToTokenId(tokenId_);
            const _price = _listing.price;

            await marketplace.buyMice(tokenId_, {value: _price}).then( async(tx_) => {
                $(`#mice-for-sale-${tokenId_}`).remove();
                closeInfo("click-info");
                $('#block-screen').remove();
                await waitForTransaction(tx_)
            });
        }
    }
    catch (error) {
        errorMsg = error.error.message;
        if (errorMsg.includes("insufficient funds")) {
            displayErrorMessage("Error: Insufficient Funds!");
        }
        else {
            displayErrorMessage(errorMsg);
        }
    }
};

const putMiceUpForSaleInternal = async(_tokenId) => {
    try {
        const _priceInETH = $("#publicSale-price").val();
        const _priceInWei = parseEther((_priceInETH).toString());
        await marketplace.putMiceUpForSale(_tokenId, _priceInWei).then( async(tx_) => {
            $(`#available-mice-${_tokenId}`).remove();
            closeInfo("click-info");
            $('#block-screen').remove();
            closeInfo("create-listing-prompt");
            $("#your-available-mice-count").html(`Your Available Mice (<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
            await waitForTransaction(tx_)
        });
    }
    catch (error) {
        displayErrorMessage(error.error.message);
    }
};

const putMiceUpForSale = async(_tokenId) => {
    try {
        if ( ! (await anonymice.isApprovedForAll( (await getAddress()), marketplaceAddress)) ) {
            displayErrorMessage(`Error: You must set approval for marketplace. Requesting...`);
            await sleep(2000)
            await anonymice.setApprovalForAll(marketplaceAddress, true).then( async(tx_) => {
                provider.once(tx_, async (transaction_) => {
                    await putMiceUpForSaleInternal();
                });
            });
        } else {
            await putMiceUpForSaleInternal(_tokenId);
        };
    }
    catch (error) {
        displayErrorMessage(error.error.message);
    }
};

const putMiceUpForPrivateSaleInternal = async(_tokenId) => {
    try {
        const _priceInETH = $("#privateSale-price").val();
        const _priceInWei = parseEther((_priceInETH).toString());
        const _toAddress = $("#privateSale-address").val();
        await marketplace.putMiceUpForPrivateSale(_tokenId, _priceInWei, _toAddress).then( async(tx_) => {
            $(`#available-mice-${_tokenId}`).remove();
            closeInfo("click-info");
            $('#block-screen').remove();
            closeInfo("create-listing-prompt");
            $("#your-available-mice-count").html(`Your Available Mice (<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
            await waitForTransaction(tx_);
        });
    }
    catch (error) {
        displayErrorMessage(error.error.message);
    }
};

const putMiceUpForPrivateSale = async(_tokenId) => {
    try {
        if ( ! (await anonymice.isApprovedForAll( (await getAddress()), marketplaceAddress)) ) {
            await anonymice.setApprovalForAll(marketplaceAddress, true).then( async(tx_) => {
                provider.once(tx_, async (transaction_) => {
                    await putMiceUpForPrivateSaleInternal();
                });
            });
        } else {
            await putMiceUpForPrivateSaleInternal(_tokenId);
        };
    }
    catch (error) {
        displayErrorMessage(error.error.message);
    }
};

const removeMiceOnSale = async(_tokenId) => {
    try {
        await marketplace.removeMiceOnSale(_tokenId).then( async(tx_) => {
            $(`#my-listed-mice-${_tokenId}`).remove();
            $(`#mice-for-sale-${_tokenId}`).remove();
            closeInfo("click-info");
            $('#block-screen').remove();
            $("#your-listed-mice-count").html(`Your Listed Mice (<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
            await waitForTransaction(tx_)
        });
    }
    catch (error) {
        displayErrorMessage(error.error.message);
    }
};

const updateMiceOnSalePrice = async(_tokenId) => {
    try {
        const _priceInETH = $("#updatePrice-price").val();
        const _priceInWei = parseEther((_priceInETH).toString());
        const _listing = listedMice.get(Number(_tokenId))
        const _privacy = _listing.privacy;
        if (_privacy == "Private") {
            const _toAddress = _listing.toAddress;
            await marketplace.updateMiceOnSaleToPrivate(_tokenId, _priceInWei, _toAddress).then( async(tx_) => {
                closeInfo("click-info");
                $('#block-screen').remove();
                closeInfo("edit-prompt");
                $(`#my-listed-mice-${_tokenId}`).remove();
                $(`#mice-for-sale-${_tokenId}`).remove();
                await waitForTransaction(tx_)
            });
        }
        else {
            await marketplace.updateMiceOnSale(_tokenId, _priceInWei).then( async(tx_) => {
                closeInfo("click-info");
                $('#block-screen').remove();
                closeInfo("edit-prompt");
                $(`#my-listed-mice-${_tokenId}`).remove();
                $(`#mice-for-sale-${_tokenId}`).remove();
                await waitForTransaction(tx_)
            });
        }
    }
    catch (error) {
        displayErrorMessage(error.error.message);
    }
};

const updateMiceOnSalePrivacy = async(_tokenId) => {
    try {
        const _priceInETH = listedMice.get(Number(_tokenId)).price;
        const _priceInWei = parseEther((_priceInETH).toString());
        const _toAddress = $("#updatePrivacy-address").val();
        await marketplace.updateMiceOnSaleToPrivate(_tokenId, _priceInWei, _toAddress).then( async(tx_) => {
            closeInfo("click-info");
            $('#block-screen').remove();
            closeInfo("edit-prompt");
            $(`#my-listed-mice-${_tokenId}`).remove();
            $(`#mice-for-sale-${_tokenId}`).remove();
            await waitForTransaction(tx_)
        });
    }
    catch (error) {
        displayErrorMessage(error.error.message);
    }
};

// update info
const updateInfo = async() => {
    let userAddress = await getAddress();
    const headerAddress = await getDisplayableAddress(userAddress);
    $("#wallet").text("CONNECTED:" + headerAddress);
    $("#wallet").addClass("disabled");

    // if ((await getChainId()) === 1) {

    // } else {
    //     $("#wallet").text(`Wrong Chain!`);
    // };
};

const updateStats = async() => {
    $.getJSON('https://raw.githubusercontent.com/saintmaxi/anonymice/main/holders_today.json', function(holderData) {
        $("#holder-count").text(`${holderData["Holders"]}`);
    });
    
    let osData = await $.getJSON('https://api.opensea.io/api/v1/collection/anonymice/stats')
    let osSales = osData["stats"]["total_sales"];
    let osVolume = (osData["stats"]["total_volume"]).toFixed(0);

    $("#os-floor").text(`${osData["stats"]["floor_price"]}`);

    await marketplace.totalAmountOfEthTraded().then(async(vol) => {
        let totalVolume = Number(osVolume) + Number(Number(formatEther(vol.toString())).toFixed(0));
        $("#volume").text(totalVolume);
    });
    await marketplace.totalAmountOfMiceSold().then(async(miceSold) => {
        let totalSold = Number(miceSold) + Number(osSales)
        $("#mice-sold").text(totalSold);
    });
}

const updateMarketplaceDetails = async() => {
    if ((await getChainId()) === correctChain) {
        loading = true;
        let darkClass = getDarkMode();

        const loadingDiv = `<div class="loading-div${darkClass}" id="refresh-notification">REFRESHING MARKETPLACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>???</div><br>`;
        $("#pending-transactions").append(loadingDiv);
        if (connected) {
            await updateInfo();
        }
        if (window.location.pathname == "/create-listing.html") {
            checkApprovalOfMice();
            await updateAvailableMice();
            await updateMarketListings();
        }
        else if (window.location.pathname == "/activity.html") {
            await updateStats();
            await updateMarketListings();
            if (connected) {
                await updateYourMarketMice();
            }
            await getRecentListings()
            await getSalesHistory();
            await getHighestSales();
        }
        else if (window.location.pathname == "/buy-mice.html") {
            await updateMarketListings();
        }
        else if (window.location.pathname == "/edit-listing.html") {
            await updateMarketListings();
            await updateYourMarketMice();
        }
        else if (window.location.pathname == '/all-mice.html') {
            await getAllMice();
            await updateMarketListings();
        }
        $("#privateSaleLookup-address").empty();
        $("#refresh-notification").remove();
        loading = false;
    }
    else {
        displayErrorMessage("Error: Wrong Network", false);
    }
};

// Processing tx returns
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("pendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("pendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("pendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let darkClass = getDarkMode();
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div${darkClass}" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);

    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
         if (window.location.pathname != "/faq") {
            await updateMarketplaceDetails();
         }
    }
}

setInterval( async() => {
    try {
        await updateInfo();
    }
    catch {
        console.log("Not connected")
    }
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    $("#your-prvt-sales").addClass("prvt-hidden");
    location.reload();
    await updateMarketplaceDetails();
    resetFilters();
});

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        $("#refresh-notification").remove();
        await updateCurrentChain();
        await updateMarketplaceDetails();
    }
});

const watchForBuy  = async () => {
    filter = marketplace.filters.MiceBought(null, null, null);
    marketplace.on(filter, async (id, price, seller, buyer, event) => {
        if (!loading && pendingTransactions.size == 0) {
            let sale = await getSaleHistoryItem(event);
            if ($("#no-sales").length) {
                $("#no-sales").remove();
            }
            $("#title-row").after(sale);
            $("#mice-sales tr:eq(1)").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
        }
    
    });
}

const watchForList = async() => {
    filter = marketplace.filters.MicePutUpForSale(null, null);
    marketplace.on(filter, async (id, price, seller, addressee, event) => {
        if (!loading && pendingTransactions.size == 0) {
            let listing = await getSaleHistoryItem(event, false, true);
            if ($("#no-listings").length) {
                $("#no-listings").remove();
            }
            $("#listings-title-row").after(listing);
            $("#mice-listings tr:eq(1)").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
        }
    });
}

const watching = async () => {
    await watchForBuy();
    await watchForList();
}

watching()

var connected = false;

window.onload = async() => {
    await loadRarityData();

    try {
        await updateInfo();
        connected = true;
        anonymice = new ethers.Contract(anonymiceAddress, anonymiceAbi(), signer);
        marketplace = new ethers.Contract(marketplaceAddress, marketplaceAbi(), signer);
    }
    catch {
        console.log("Not connected")
    }

    if (!loading && pendingTransactions.size <1) {
        if (window.location.pathname != "/faq" && window.location.pathname != "/index" && window.location.pathname !="/") {
            await updateMarketplaceDetails();
         }
    }
};

window.onunload = async()=>{
    cachePendingTransactions();
}
