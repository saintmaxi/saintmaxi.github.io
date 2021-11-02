// Ethers.js Implementation by Inuarashi @ https://twitter.com/0xInuarashi; 
// Contact for work or partnerships at Discord => 0xInuarashi #1234;

/* const anonymiceAddress = "0xbad6186E92002E312078b5a1dAfd5ddf63d3f731";
const anonymiceAbi = () => {
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct Anonymice.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCheethCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cheethAddress","type":"address"}],"name":"setCheethAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]';
}; */

const anonymiceAddress = "0x0C721A99C1181eEa7BE92bb45b764cC7b9172E3e";
const anonymiceAbi = () => {
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct Anonymice.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCheethCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cheethAddress","type":"address"}],"name":"setCheethAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]';
};

const marketplaceAddress = "0xF356D734695a1B7041Ab98d843905DC6d1bB216b";
const marketplaceAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": false, "internalType": "address", "name": "privateSaleAddress", "type": "address" } ], "name": "ListingUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": true, "internalType": "address", "name": "buyer", "type": "address" } ], "name": "MiceBought", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": false, "internalType": "address", "name": "privateSaleAddress", "type": "address" } ], "name": "MicePutUpForSale", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" } ], "name": "MiceRemovedFromSale", "type": "event" }, { "inputs": [], "name": "anonymiceAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "buyMice", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getAllMiceOnSale", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAmountOfMiceOnSale", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getAmountOfMiceOnSaleByAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getMiceOnSaleByAddress", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "start_", "type": "uint256" }, { "internalType": "uint256", "name": "end_", "type": "uint256" } ], "name": "getMiceOnSaleByAddressSegment", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "start_", "type": "uint256" }, { "internalType": "uint256", "name": "end_", "type": "uint256" } ], "name": "getMiceOnSaleSegment", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceCurrentlyOnSale", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceCurrentlyOnSaleIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceForSaleToTokenId", "outputs": [ { "internalType": "address", "name": "sellerAddress", "type": "address" }, { "internalType": "uint256", "name": "miceId", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "address", "name": "privateSaleAddress", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceOnSaleByAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceOnSaleByAddressIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" }, { "internalType": "address", "name": "privateSaleAddress_", "type": "address" } ], "name": "putMiceUpForPrivateSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "putMiceUpForSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "removeMiceOnSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmountOfEthTraded", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalAmountOfMiceSold", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "updateMiceOnSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" }, { "internalType": "address", "name": "privateSaleAddress_", "type": "address" } ], "name": "updateMiceOnSaleToPrivate", "outputs": [], "stateMutability": "nonpayable", "type": "function"}]';
            // return '[ { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": true, "internalType": "address", "name": "buyer", "type": "address" } ], "name": "MiceBought", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": false, "internalType": "address", "name": "privateSaleAddress", "type": "address" } ], "name": "MicePutUpForSale", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" } ], "name": "MiceRemovedFromSale", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "buyMice", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" }, { "internalType": "address", "name": "privateSaleAddress_", "type": "address" } ], "name": "putMiceUpForPrivateSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint256", "name": "price_", "type": "uint256" } ], "name": "putMiceUpForSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "removeMiceOnSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "anonymiceAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAllMiceOnSale", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getAmountOfMiceOnSale", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getAmountOfMiceOnSaleByAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getMiceOnSaleByAddress", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "start_", "type": "uint256" }, { "internalType": "uint256", "name": "end_", "type": "uint256" } ], "name": "getMiceOnSaleSegment", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceCurrentlyOnSale", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceCurrentlyOnSaleIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceForSaleToTokenId", "outputs": [ { "internalType": "address", "name": "sellerAddress", "type": "address" }, { "internalType": "uint256", "name": "miceId", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "address", "name": "privateSaleAddress", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceOnSaleByAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "miceOnSaleByAddressIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]';
};

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

const anonymice = new ethers.Contract(anonymiceAddress, anonymiceAbi(), signer);
const marketplace = new ethers.Contract(marketplaceAddress, marketplaceAbi(), signer);

const connect = async() => { await provider.send("eth_requestAccounts", []) };

const getAddress = async() => { return await signer.getAddress() };

const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus

const getChainId = async() => { return await signer.getChainId() };

var listedMice = new Map();

// mice updater functions
const updateAvailableMice = async() => {
    const _miceInWallet = await anonymice.walletOfOwner( (await getAddress()) );
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";

    $("#your-mice").empty();

    let _darkClass;
    if (darkModeOn) {
        _darkClass = " dark";
    }
    else {
        _darkClass = "";
    }

    for (let i = 0; i < _miceInWallet.length; i++) {
        const _miceId = _miceInWallet[i];
        new Mice(_miceId);
        const _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="available-mice-${_miceId}" onclick=showInfo(${_miceId})><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="64" alt="" class="mice-image${_darkClass}"><div>Anonymice #${_miceId}</div></div>`;
        $("#your-mice").append(_fakeJSX);
    };
};

// mice updater functions
const updateYourMarketMice = async() => {
    const _miceInMarket = await marketplace.getMiceOnSaleByAddress( (await getAddress()) );
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";

    $("#your-market-mice").empty();
    $("#your-update-mice").empty();

    let _darkClass;
    if (darkModeOn) {
        _darkClass = " dark";
    }
    else {
        _darkClass = "";
    }

    if (_miceInMarket.length == 0) {
        $("#your-market-mice").text('No mice listed.');
        $("#your-update-mice").text('No mice listed.');
    }
    else {
        for (let i = 0; i < _miceInMarket.length; i++) {
            const _miceId = _miceInMarket[i];
            const _listedMice = listedMice.get(Number(_miceId));
            const _miceListing = await marketplace.miceForSaleToTokenId(_miceId);
            const _priceText = _listedMice.priceText;
            const _listingPrivacy = _miceListing.privateSaleAddress === "0x0000000000000000000000000000000000000000" ? "Public" : "Private";
            const _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="my-listed-mice-${_miceId}" onclick=showInfo(${_miceId})><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="64" alt="" class="mice-image${_darkClass}"><div>Anonymice #${_miceId}</div><div>${_priceText}<span class="listing-eth-logo">Ξ</span></div><div>${_listingPrivacy}</div></div>`;
            $("#your-market-mice").append(_fakeJSX);
            $("#your-update-mice").append(_fakeJSX);
        };
    }
};

// marketplace updater functions
const updateMarketListings = async() => {
    console.log(`updating market listings`);
    const _currentMiceOnSale = await marketplace.getAllMiceOnSale();

    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";

    $("#mice-on-sale-block").empty();

    let _darkClass;
    if (darkModeOn) {
        _darkClass = " dark";
    }
    else {
        _darkClass = "";
    }

    $("#filter-results-count").text(`${_currentMiceOnSale.length} Mice Found`);

    let floor = 9999999999999;
    listedMice = new Map();
    for (let i = 0; i < _currentMiceOnSale.length; i++) {
        const _miceId = _currentMiceOnSale[i];
        const _miceOnSale = new Mice(_miceId);
        const _miceListing = await marketplace.miceForSaleToTokenId(_miceId);
        const _micePrice = _miceListing.price;
        const _micePriceInETH = formatEther(_micePrice);

        let _priceText = _micePriceInETH;
        if (_micePriceInETH == 0) {
            _priceText = "0";
        }
        else if (_micePriceInETH < 0.0001) {
            _priceText = "< 0.0001";
        }
        else if (_micePriceInETH > 1000) {
            _priceText = "> 1000";
        }
        if (_micePriceInETH < floor) {
            floor = _micePriceInETH;
        }

        const _listingPrivacy = _miceListing.privateSaleAddress === "0x0000000000000000000000000000000000000000" ? "Public" : "Private";
        const _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="mice-for-sale-${_miceId}" onclick=showInfo(${_miceId}) ><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="64" alt="" class="mice-image${_darkClass}"><div>Anonymice #${_miceId}</div><div>${_priceText}<span class="listing-eth-logo">Ξ</span></div><div>${_listingPrivacy}</div><button class="button w-button${_darkClass}" onclick="stopProp(event);buyMice(${_miceId});">Buy Mice</button></div>`;
        _miceOnSale.price = Number(_micePriceInETH);
        _miceOnSale.priceText = _priceText;
        _miceOnSale.privacy = _listingPrivacy;
        _miceOnSale.fakeJSX = _fakeJSX;
        listedMice.set(Number(_miceId), _miceOnSale);
        $("#mice-on-sale-block").append(_fakeJSX); 
    };

    if (floor == 0) {
        floor = "0";
    }
    else if (floor < 0.0001) {
        floor = "< 0.0001";
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

// contract approval functions (unused, lol)
const approveMiceToMarketplace = async() => {
    await anonymice.setApprovalForAll(marketplaceAddress, true);
};

const checkApprovalOfMice = async() => {
    if ( ! (await anonymice.isApprovedForAll( (await getAddress()), marketplaceAddress)) ) {
        console.log(`mice not approved, requesting approval`);
        await anonymice.setApprovalForAll(marketplaceAddress, true);
    } else {
        console.log(`mice already approved`);
    }
};

// marketplace functions
const buyMice = async(tokenId_) => {
    const _listing = await marketplace.miceForSaleToTokenId(tokenId_);
    const _price = _listing.price;
    await marketplace.buyMice(tokenId_, {value: _price}).then( async(tx_) => {
        $(`#mice-for-sale-${tokenId_}`).remove();
        $(`#update-listing #my-listed-mice-${_tokenId}`).remove();
        $(`#remove-listing #my-listed-mice-${_tokenId}`).remove();
        await waitForTransaction(tx_)
    });
};

const putMiceUpForSaleInternal = async() => {
    const _tokenId = $("#publicSale-miceId").val();
    const _priceInETH = $("#publicSale-price").val();
    const _priceInWei = parseEther((_priceInETH).toString());
    await marketplace.putMiceUpForSale(_tokenId, _priceInWei).then( async(tx_) => {
        $(`#available-mice-${_tokenId}`).remove();
        await waitForTransaction(tx_)
    });
};

const putMiceUpForSale = async() => {
    if ( ! (await anonymice.isApprovedForAll( (await getAddress()), marketplaceAddress)) ) {
        console.log(`mice not approved, requesting approval`);
        await anonymice.setApprovalForAll(marketplaceAddress, true).then( async(tx_) => {
            provider.once(tx_.hash, async (transaction_) => {
                await putMiceUpForSaleInternal();
            });
        });
    } else {
        console.log(`mice already approved`);
        await putMiceUpForSaleInternal();
    };
};

const putMiceUpForPrivateSaleInternal = async() => {
    const _tokenId = $("#privateSale-miceId").val();
    const _priceInETH = $("#privateSale-price").val();
    const _priceInWei = parseEther((_priceInETH).toString());
    const _toAddress = $("#privateSale-address").val();
    await marketplace.putMiceUpForPrivateSale(_tokenId, _priceInWei, _toAddress).then( async(tx_) => {
        $(`#available-mice-${_tokenId}`).remove();
        await waitForTransaction(tx_);
    });
};

const putMiceUpForPrivateSale = async() => {
    if ( ! (await anonymice.isApprovedForAll( (await getAddress()), marketplaceAddress)) ) {
        console.log(`mice not approved, requesting approval`);
        await anonymice.setApprovalForAll(marketplaceAddress, true).then( async(tx_) => {
            provider.once(tx_.hash, async (transaction_) => {
                await putMiceUpForPrivateSaleInternal();
            });
        });
    } else {
        console.log(`mice already approved`);
        await putMiceUpForPrivateSaleInternal();
    };
};

const removeMiceOnSale = async() => {
    const _tokenId = $("#removeMice-miceId").val();
    await marketplace.removeMiceOnSale(_tokenId).then( async(tx_) => {
        $(`#mice-for-sale-${_tokenId}`).remove();
        $(`#update-listing #my-listed-mice-${_tokenId}`).remove();
        $(`#remove-listing #my-listed-mice-${_tokenId}`).remove();
        await waitForTransaction(tx_)
    });
};

const updateMiceOnSalePrice = async() => {
    const _tokenId = $("#updatePrice-miceId").val();
    const _priceInETH = $("#updatePrice-price").val();
    const _priceInWei = parseEther((_priceInETH).toString());
    await marketplace.updateMiceOnSale(_tokenId, _priceInWei).then( async(tx_) => {
        $(`#mice-for-sale-${_tokenId}`).remove();
        $(`#update-listing #my-listed-mice-${_tokenId}`).remove();
        $(`#remove-listing #my-listed-mice-${_tokenId}`).remove();
        await waitForTransaction(tx_)
    });
};

const updateMiceOnSalePrivacy = async() => {
    const _tokenId = $("#updatePrivacy-miceId").val();
    const _priceInETH = listedMice.get(Number(_tokenId)).price;
    const _priceInWei = parseEther((_priceInETH).toString());
    const _toAddress = $("#updatePrivacy-address").val();
    await marketplace.updateMiceOnSaleToPrivate(_tokenId, _priceInWei, _toAddress).then( async(tx_) => {
        $(`#mice-for-sale-${_tokenId}`).remove();
        $(`#update-listing #my-listed-mice-${_tokenId}`).remove();
        $(`#remove-listing #my-listed-mice-${_tokenId}`).remove();
        await waitForTransaction(tx_)
    });
};

// update info
const updateInfo = async() => {
    $("#wallet").text((await getAddress()));

    // if ((await getChainId()) === 1) {

    // } else {
    //     $("#wallet").text(`Wrong Chain!`);
    // };
};

const updateStats = async() => {
    $.getJSON('https://raw.githubusercontent.com/saintmaxi/anonymice/main/holders_today.json', function(holderData) {
        $("#holder-count").text(`${holderData["Holders"]}`);
    });
    await marketplace.totalAmountOfEthTraded().then(async(vol) => {
        $("#volume").text(formatEther(vol.toString()));
    });
    await marketplace.totalAmountOfMiceSold().then(async(miceSold) => {
        $("#mice-sold").text(miceSold);
    });
}

const updateMarketplaceDetails = async() => {
    const loadingDiv = `<div class="loading-div" id="refresh-notification">REFRESHING MARKETPLACE...</div><br>`;
    $("#pending-transactions").append(loadingDiv);
    $("#pending-transactions").removeClass("hide-loading");
    await updateAvailableMice();
    await updateStats();
    await updateInfo();
    await updateMarketListings();
    await updateYourMarketMice();
    $("#privateSaleLookup-address").empty();
    $("#refresh-notification").remove();
    $("#pending-transactions").addClass("hide-loading");
};

const waitForTransaction = async(tx_) => {
    startLoading(tx_.hash);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_.hash);
        // await updateMarketplaceDetails();
    });
};

var pendingTransactions = new Set();

function startLoading(txHash) {
    const etherscanLink = `https://rinkeby.etherscan.io/tx/${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING...<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    $("#pending-transactions").removeClass("hide-loading");
    pendingTransactions.add(txHash);
}

async function endLoading(txHash) {
    $(`#loading-div-${txHash}`).html("");
    $(`#loading-div-${txHash}`).append("TRANSACTION SENT.<br>FOLLOW ON ETHERSCAN.");
    await sleep(1000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(txHash);
    if (pendingTransactions.size == 0) {
        $("#pending-transactions").addClass("hide-loading");
        await updateMarketplaceDetails();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

setInterval( async() => {
    await updateInfo();
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    await updateMarketplaceDetails();

});

window.onload = async() => {
    await updateMarketplaceDetails();
};
