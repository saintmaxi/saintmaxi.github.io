/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const anonymiceAddress = "0xbad6186E92002E312078b5a1dAfd5ddf63d3f731";
const anonymiceAbi = () => {
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct Anonymice.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCheethCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cheethAddress","type":"address"}],"name":"setCheethAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]';
};

const breedingAddress = "0x15Cc16BfE6fAC624247490AA29B6D632Be549F00";
const breedingAbi = ()=>{
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BREEDING_LIVE","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_addressToBreedingEvents","outputs":[{"internalType":"uint256","name":"breedingEventId","type":"uint256"},{"internalType":"uint256","name":"parentId1","type":"uint256"},{"internalType":"uint256","name":"parentId2","type":"uint256"},{"internalType":"uint256","name":"childId","type":"uint256"},{"internalType":"uint256","name":"releaseBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_parentTokenIdToOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenIdToLegendary","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenIdToLegendaryNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenToIncubator","outputs":[{"internalType":"uint256","name":"parentId1","type":"uint256"},{"internalType":"uint256","name":"parentId2","type":"uint256"},{"internalType":"uint256","name":"childId","type":"uint256"},{"internalType":"uint256","name":"revealBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenToRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipBreedingSwitch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"breeder","type":"address"}],"name":"getBreedingEventsLengthByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_parentId1","type":"uint256"},{"internalType":"uint256","name":"_parentId2","type":"uint256"}],"name":"initiateBreeding","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"legendariesMinted","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_breedingEventId","type":"uint256"}],"name":"pullParentsByBreedingEventId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_breedingEventIndex","type":"uint256"}],"name":"pullParentsByBreedingEventIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"revealBaby","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_descriptorAddress","type":"address"},{"internalType":"address","name":"_anonymiceAddress","type":"address"},{"internalType":"address","name":"_cheethAddress","type":"address"},{"internalType":"address","name":"_puzzleAddress","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_cheethAmount","type":"uint256"}],"name":"speedUpChildReveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_breedingEventId","type":"uint256"},{"internalType":"uint256","name":"_cheethAmount","type":"uint256"}],"name":"speedUpParentRelease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};

const breedingDescriptorAddress = "0xc393D469c44262b720a1B1B5900355E95f098a38";
const descriptorAbi = ()=> {
    return '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_legendaryId","type":"uint256"},{"components":[{"internalType":"string","name":"svg","type":"string"},{"internalType":"string","name":"metadata","type":"string"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct AnonymiceBreedingDescriptor.Legendary","name":"legendary","type":"tuple"}],"name":"addLegendary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct AnonymiceBreedingDescriptor.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"legendaries","outputs":[{"internalType":"string","name":"svg","type":"string"},{"internalType":"string","name":"metadata","type":"string"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_anonymiceBreedingAddress","type":"address"},{"internalType":"address","name":"_anonymiceAddress","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenIdToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenIdToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_svgPiece","type":"string"}],"name":"uploadSVGPiece","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
}

const cheethAddress = "0x5f7BA84c7984Aa5ef329B66E313498F0aEd6d23A";
const cheethAbi = ()=>{
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLAIM_END_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSIONS_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WALLET_STAKED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"anonymiceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimByTokenId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getAllRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRewardsByTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getStaker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getTokensStaked","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_anonymiceAddress","type":"address"}],"name":"setAnonymiceAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};

const etherscanBase = `https://etherscan.io/tx/`;

const metamaskDeeplink = "";

const correctChain = 1;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const anonymiceAddress = "0xDD0a0B123f3bA18D6e34D05610A764e420e7af67";
// const anonymiceAbi = ()=>{
//     return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct Anonymice.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCheethCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cheethAddress","type":"address"}],"name":"setCheethAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]';
//  };

// const breedingAddress = "0xbEb40f5479E35a5126ffcBC032404750cF074cc2";
// const breedingAbi = ()=>{
//     return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BREEDING_LIVE","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_addressToBreedingEvents","outputs":[{"internalType":"uint256","name":"breedingEventId","type":"uint256"},{"internalType":"uint256","name":"parentId1","type":"uint256"},{"internalType":"uint256","name":"parentId2","type":"uint256"},{"internalType":"uint256","name":"childId","type":"uint256"},{"internalType":"uint256","name":"releaseBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_parentTokenIdToOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenIdToLegendary","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenIdToLegendaryNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenToIncubator","outputs":[{"internalType":"uint256","name":"parentId1","type":"uint256"},{"internalType":"uint256","name":"parentId2","type":"uint256"},{"internalType":"uint256","name":"childId","type":"uint256"},{"internalType":"uint256","name":"revealBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tokenToRevealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipBreedingSwitch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"breeder","type":"address"}],"name":"getBreedingEventsLengthByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_parentId1","type":"uint256"},{"internalType":"uint256","name":"_parentId2","type":"uint256"}],"name":"initiateBreeding","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"legendariesMinted","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_breedingEventId","type":"uint256"}],"name":"pullParentsByBreedingEventId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_breedingEventIndex","type":"uint256"}],"name":"pullParentsByBreedingEventIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"revealBaby","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_descriptorAddress","type":"address"},{"internalType":"address","name":"_anonymiceAddress","type":"address"},{"internalType":"address","name":"_cheethAddress","type":"address"},{"internalType":"address","name":"_puzzleAddress","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_cheethAmount","type":"uint256"}],"name":"speedUpChildReveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_breedingEventId","type":"uint256"},{"internalType":"uint256","name":"_cheethAmount","type":"uint256"}],"name":"speedUpParentRelease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
// };

// const breedingDescriptorAddress = "0x3Df4be3D34Fe176fCE318c5B2fc3aAD6B8B68507";
// const descriptorAbi = ()=> {
//     return '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_legendaryId","type":"uint256"},{"components":[{"internalType":"string","name":"svg","type":"string"},{"internalType":"string","name":"metadata","type":"string"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct AnonymiceBreedingDescriptor.Legendary","name":"legendary","type":"tuple"}],"name":"addLegendary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct AnonymiceBreedingDescriptor.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"legendaries","outputs":[{"internalType":"string","name":"svg","type":"string"},{"internalType":"string","name":"metadata","type":"string"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_anonymiceBreedingAddress","type":"address"},{"internalType":"address","name":"_anonymiceAddress","type":"address"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenIdToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenIdToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_svgPiece","type":"string"}],"name":"uploadSVGPiece","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
// }

// const cheethAddress = "0x55eD7441040B4b4DB61E95BB8B4ba49b952AE863";
// const cheethAbi = ()=>{
//     return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLAIM_END_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSIONS_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WALLET_STAKED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"anonymiceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimByTokenId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getAllRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRewardsByTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getStaker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getTokensStaked","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_anonymiceAddress","type":"address"}],"name":"setAnonymiceAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
// };

// const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

// const metamaskDeeplink = "https://metamask.app.link/dapp/saintmaxi.github.io/";

// const correctChain = 4;

/*********************************END CONFIG************************************/


if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser with MetaMask or the MetaMask mobile app to access this feature of Anonymice Marketplace.', false);
    $("#error-popup p").append(`<br><a href="/" class="contract-link ${getDarkMode()}" rel="noopener noreferrer">Home</a>|<a href="${metamaskDeeplink}" class="contract-link ${getDarkMode()}" target="_blank" rel="noopener noreferrer">MetaMask</a>`);
}

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const anonymice = new ethers.Contract(anonymiceAddress,anonymiceAbi(),signer);
const breedingDescriptor = new ethers.Contract(breedingDescriptorAddress,descriptorAbi(),signer);
const breeding = new ethers.Contract(breedingAddress, breedingAbi(), signer);
const cheeth = new ethers.Contract(cheethAddress,cheethAbi(),signer);

const connect = async()=>{
    await provider.send("eth_requestAccounts", [])
};

const getAddress = async()=>{
    return await signer.getAddress()
};

const formatEther = (balance_)=>{
    return ethers.utils.formatEther(balance_)
};

const parseEther = (eth_)=>{
    return ethers.utils.parseEther(eth_)
};

const getChainId = async()=>{
    return await signer.getChainId()
};

const getBabiesBred = async()=> {
    const babiesBred = await breeding.totalSupply();
    $("#babies-bred").text(`${babiesBred}/3550`);
}

const approveBreeding = async()=>{
    const userAddress = await getAddress();
    const isApproved = await anonymice.isApprovedForAll(userAddress, breedingAddress);
    if (isApproved) {
        displayErrorMessage(`Error: Breeding already approved!`);
        return;
    };
    await anonymice.setApprovalForAll(breedingAddress, true).then( async(tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveCheethAllowance = async()=>{
    const limit = '30000000000000000000000000';
    const userAddress = await getAddress();
    const currentAllowance = await cheeth.allowance(userAddress, breedingAddress);
    if (currentAllowance >= limit) {
        displayErrorMessage(`Error: Allowance already approved!`);
        return;
    };
    await cheeth.approve(breedingAddress, limit).then( async(tx_) => {
        await waitForTransaction(tx_);
    });
};

const updateApprovedStatus = async()=>{
    const userAddress = await getAddress();
    const isApproved = await anonymice.isApprovedForAll(userAddress, breedingAddress);
    const limit = '20000000000000000000000000';
    const currentAllowance = await cheeth.allowance(userAddress, breedingAddress);
    if (isApproved && (currentAllowance >=  limit)) {
        // $("#approveButton").text(`Anonymice Approved!`);
        $("#approval-section").addClass("hidden");
    }
    else {
        $("#approval-section").removeClass("hidden");
    }
};


const getOwnedBabies = async()=> {
    const userAddress = await getAddress();
    const babiesOwned = await breeding.balanceOf(userAddress);
    let babyArray = [];
    for (let i=0; i<babiesOwned;i++) {
        babyId = Number(await breeding.tokenOfOwnerByIndex(userAddress, i));
        babyArray.push(babyId);
    }

    return babyArray;
};


const getAnonymicesEnum = async()=>{
    let _ownedMices = ((await anonymice.walletOfOwner((await getAddress()))));
    return  _ownedMices.length;
};

const getCheethBalance = async()=>{
    $("#your-cheeth").text(Number(formatEther(await cheeth.balanceOf((await getAddress())))).toFixed(2));
    $("#your-cheeth").append(" <img src='./images/chees.png' width=32>");
};

const blocksLeftCalc = async(currentBlock, targetBlock) => {
    return currentBlock < parseInt(targetBlock) ? parseInt(targetBlock) - currentBlock : 0;
};


const breedMice = async()=> {
    if (selectedForBreeding.size != 2) {
         displayErrorMessage("Error: 2 Mice required to breed!")
    }
    else {
        const _micesArray = Array.from(selectedForBreeding);
        const _parentId1 = _micesArray[0];
        const _parentId2 = _micesArray[1];
        await breeding.initiateBreeding(_parentId1, _parentId2).then( async(tx_) => {
            $(`#available-mice-${_parentId1}`).remove();
            $(`#available-mice-${_parentId2}`).remove();
            selectedForBreeding = new Set();
            $("#selected-for-breeding").text("Selected: None");
            await waitForTransaction(tx_);
        })
    }
};

const speedUpChildReveal = async(childId) => {
    const cheethAmt = $(`#speed-up-amt-reveal-${childId}`).val();
    const cheethBalance = Number(formatEther(await cheeth.balanceOf((await getAddress()))));
    if (cheethAmt > cheethBalance) {
        displayErrorMessage("Error: Insufficient $CHEETH!")
    }
    else {
        await breeding.speedUpChildReveal(childId, parseEther(cheethAmt)).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
};

const speedUpParentRelease = async(breedingEventId) => {
    const cheethAmt = $(`#speed-up-amt-release-${breedingEventId}`).val();
    const cheethBalance = Number(formatEther(await cheeth.balanceOf((await getAddress()))));
    if (cheethAmt > cheethBalance) {
        displayErrorMessage("Error: Insufficient $CHEETH!")
    }
    else {
        await breeding.speedUpParentRelease(breedingEventId, parseEther(cheethAmt)).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
};

const revealBaby = async(childId) => {
    await breeding.revealBaby(childId).then( async(tx_) => {
        waitForTransaction(tx_);
    });
};

const pullParents = async(breedingEventId) => {
    await breeding.pullParentsByBreedingEventId(breedingEventId).then( async(tx_) => {
        // $(`#parent-block-${breedingEventId}`).remove();
        waitForTransaction(tx_);
    });
};

const getMiceImages = async()=>{
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";
    $("#available-mice-images").empty();
    $("#breeding-mice-images").empty();
    $("#baby-mice-images").empty();

    let _darkClass = getDarkMode();

    const _unstakedMice = (await anonymice.walletOfOwner((await getAddress())));
    if (_unstakedMice.length == 0) {
        $("#available-mice-images").append("<br>No mice available...");
    }
    else {
        for (let i = 0; i < _unstakedMice.length; i++) {
            let _miceId = _unstakedMice[i];
            if (!miceObjectMap.get(_miceId)) {
                new Mice(_miceId);
            }
            let _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="available-mice-${_miceId}" onclick=selectForBreeding(${_miceId})><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="100%" alt="" class="mice-image${_darkClass}" style="border:none;background-color:transparent"><div>#${_miceId}</div></div>`;
            $("#available-mice-images").append(_fakeJSX);
        };
    }

    const _numBreedingEvents = await breeding.getBreedingEventsLengthByAddress((await getAddress()));
    $("#your-breeding-anonymices").text(`Your Breeding Pairs (${_numBreedingEvents})`);

    for (let i = 0; i<_numBreedingEvents; i++) {
        let _breedingEvent = await breeding._addressToBreedingEvents((await getAddress()), i);

        let blocksLeftParents = await blocksLeftCalc((await provider.getBlockNumber()), _breedingEvent.releaseBlock);
        let cheethCalcParents = Math.ceil((blocksLeftParents * 0.0005) * 100) / 100;
        let timeCalcParents = `${Math.floor(blocksLeftParents * 12 / 60 / 60)} hours`;

        let releaseForm;
        if (cheethCalcParents == 0) {
            releaseForm = `<br><br><a href="#" class="updt-button button w-button ${_darkClass}" onclick=pullParents(${_breedingEvent.breedingEventId})>Unlock Parents</a>`
        }
        else {
            releaseForm = `<div>
                                <form><input type="number" id="speed-up-amt-release-${_breedingEvent.breedingEventId}" name="speed-up-amt-release-${_breedingEvent.breedingEventId}"
                                    placeholder="🧀 QUANTITY" value=""></form>
                            </div><br>
                            <a href="#" class="updt-button button w-button ${_darkClass}" onclick=speedUpParentRelease(${_breedingEvent.breedingEventId})>Speed Up Release</a>
    `
        }

        let _fakeJSXParents = `<div class="parent-container ${_darkClass}" id="parent-block-${_breedingEvent.breedingEventId}">
                                    <div class="parent-images ${_darkClass}">
                                        <div>
                                            <img src="${_baseImageURI}${_breedingEvent.parentId1}.png">
                                            <p>#${_breedingEvent.parentId1}</p>
                                        </div>
                                        <div>
                                            <img src="${_baseImageURI}${_breedingEvent.parentId2}.png">
                                            <p>#${_breedingEvent.parentId2}</p>
                                        </div>
                                    </div>
                                    <div id="locked-parents-${_breedingEvent.breedingEventId}">
                                        <h4>#${_breedingEvent.breedingEventId}</h4>
                                        Blocks Left: ${blocksLeftParents}<br>
                                        Time Left: ${timeCalcParents}<br>
                                        $CHEETH to Reveal: ${cheethCalcParents}
                                    </div>
                                    <div id="speed-up-release-block-${_breedingEvent.breedingEventId}">
                                        ${releaseForm}
                                    </div>
                                </div>`
        $(`#breeding-mice-images`).append(_fakeJSXParents);
    }


    const babies = await getOwnedBabies();
    $("#your-baby-mice").text(`Your Baby Mice (${babies.length})`);
    for (let i = 0; i < babies.length; i++) {
        let childId = babies[i];
        let isRevealed = await breeding._tokenToRevealed(childId);
        let _incubator = await breeding._tokenToIncubator(childId);
        let _babySVG = await breedingDescriptor.tokenIdToSVG(childId);
        if (!isRevealed) {
            let blocksLeftBaby = await blocksLeftCalc((await provider.getBlockNumber()), _incubator.revealBlock);
            let cheethCalcBaby = Math.ceil((blocksLeftBaby * 0.0005) * 100) / 100;
            let timeCalcBaby = `${Math.floor(blocksLeftBaby * 12 / 60 / 60)} hours`;

            let revealForm;
            if (cheethCalcBaby == 0) {
                revealForm = `<br><a href="#" class="updt-button button w-button ${_darkClass}" onclick=revealBaby(${childId})>Reveal Baby</a>`;
            }
            else {
                revealForm = `<div>
                                <form><input type="number" id="speed-up-amt-reveal-${childId}" name="speed-up-amt-reveal-${childId}"
                                    placeholder="🧀 QUANTITY" value=""></form>
                             </div><br>
                            <a href="#" class="updt-button button w-button ${_darkClass}" onclick=speedUpChildReveal(${childId})>Speed Up Reveal</a>`
            }

            let _fakeJSXBaby = `<div class="baby-container ${_darkClass}" id="baby-${childId}">
                                    <div id="child-info-${childId}">
                                        <div class="baby-img ${_darkClass}">${_babySVG}</div>
                                        <div>
                                            <h4>#${childId}</h4>
                                            Blocks Left: ${blocksLeftBaby}<br>
                                            Time Left: ${timeCalcBaby}<br>
                                            $CHEETH to Reveal: ${cheethCalcBaby}
                                        </div>
                                    </div>
                                    <div id="speed-up-reveal-block-${childId}">
                                        ${revealForm}
                                    </div>
                                </div><br>`;
            $("#baby-mice-images").append(_fakeJSXBaby);
        }
        else {
            let _parentId1 = _incubator.parentId1;
            let _parentId2 = _incubator.parentId2;
            
            let _fakeJSXBaby = `<div class="baby-container ${_darkClass}" id="baby-${childId}">
                                        <div class="baby-img ${_darkClass}">${_babySVG}</div>
                                        <h4 class="heading-4">#${childId}</h4>
                                        <div class="parent-images ${_darkClass}">
                                            <div>
                                                <img src="${_baseImageURI}${_parentId1}.png">
                                                <p>#${_parentId1}</p>
                                            </div>
                                            <div>
                                                <img src="${_baseImageURI}${_parentId2}.png">
                                                <p>#${_parentId2}</p>
                                            </div>
                                        </div>
                                   </div>`;

            $("#baby-mice-images").append(_fakeJSXBaby);

        }
    }
};

const updateIncubatorInfo = async()=> {
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";

    let _darkClass = getDarkMode();

    const babies = await getOwnedBabies();
    for (let i = 0; i < babies.length; i++) {
        let childId = babies[i];
        let isRevealed = await breeding._tokenToRevealed(childId);
        let _incubator = await breeding._tokenToIncubator(childId);
        let _babySVG = await breedingDescriptor.tokenIdToSVG(childId);
        if (!isRevealed) {
            let blocksLeft = await blocksLeftCalc((await provider.getBlockNumber()), _incubator.revealBlock);
            let cheethCalc = Math.ceil((blocksLeft * 0.0005) * 100) / 100;
            let timeCalc = `${Math.floor(blocksLeft * 12 / 60 / 60)} hours`;
            let _fakeJSX = `<div class="baby-img ${_darkClass}">${_babySVG}</div>
                            <div>
                                <h4>#${childId}</h4>
                                Blocks Left: ${blocksLeft}<br>
                                Time Left: ${timeCalc}<br>
                                $CHEETH to Reveal: ${cheethCalc}
                            </div>`;
            if (blocksLeft == 0) {
                $(`#speed-up-reveal-block-${childId}`).empty();
                $(`#speed-up-reveal-block-${childId}`).append(`<br><a href="#" class="updt-button button w-button ${_darkClass}" onclick=revealBaby(${childId})>Reveal Baby</a>`);
    
            }
            $(`#child-info-${childId}`).empty();
            $(`#child-info-${childId}`).append(_fakeJSX);
        }
        else {
            let _parentId1 = _incubator.parentId1;
            let _parentId2 = _incubator.parentId2;
            
            let _fakeJSXParents = `<div class="baby-img ${_darkClass}">${_babySVG}</div>
                                    <h4 class="heading-4">#${childId}</h4>
                                    <div class="parent-images ${_darkClass}">
                                        <div>
                                            <img src="${_baseImageURI}${_parentId1}.png">
                                            <p>#${_parentId1}</p>
                                        </div>
                                        <div>
                                            <img src="${_baseImageURI}${_parentId2}.png">
                                            <p>#${_parentId2}</p>
                                        </div>
                                    </div>`;

            $(`#baby-${childId}`).empty();
            $(`#baby-${childId}`).append(_fakeJSXParents);
        }
    }
};

const updateLockedParentsInfo = async()=> {
    let _darkClass = getDarkMode();

    const _numBreedingEvents = await breeding.getBreedingEventsLengthByAddress((await getAddress()));
    for (let i = 0; i<_numBreedingEvents; i++) {
        let _breedingEvent = await breeding._addressToBreedingEvents((await getAddress()), i);
        let blocksLeft = await blocksLeftCalc((await provider.getBlockNumber()), _breedingEvent.releaseBlock);
        let cheethCalc = Math.ceil((blocksLeft * 0.0005) * 100) / 100;
        let timeCalc = `${Math.floor(blocksLeft * 12 / 60 / 60)} hours`;
        let _fakeJSX = `<h4>#${_breedingEvent.breedingEventId}</h4>
                        Blocks Left: ${blocksLeft}<br>
                        Time Left: ${timeCalc}<br>
                        $CHEETH to Reveal: ${cheethCalc}`;
        if (blocksLeft == 0) {
            $(`#speed-up-release-block-${_breedingEvent.breedingEventId}`).empty();
            $(`#speed-up-release-block-${_breedingEvent.breedingEventId}`).append(`<br><br><a href="#" class="updt-button button w-button ${_darkClass}" onclick=pullParents(${_breedingEvent.breedingEventId})>Unlock Parents</a>`);

        }
        $(`#locked-parents-${_breedingEvent.breedingEventId}`).empty();
        $(`#locked-parents-${_breedingEvent.breedingEventId}`).append(_fakeJSX);
    }
};

const updateBreedingInfo = async()=>{
    if ((await getChainId()) === correctChain) {
        let darkClass = getDarkMode();
        await updateInfo();
        await getBabiesBred();

        const loadingDiv = `<div class="loading-div${darkClass}" id="refresh-notification">REFRESHING BREEDING INTERFACE<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);

        await updateApprovedStatus();
        await getMiceImages();
        await fixHeight();
        $("#your-anonymices").text(`YOUR AVAILABLE MICE (${await getAnonymicesEnum()})`);

        await getCheethBalance();
        $("#error-popup").remove();
        $("#refresh-notification").remove();
    }
    else {
        $("#wallet").text(`Wrong Network!`);
        $("#available-mice-images").empty();
        $("#breeding-mice-images").empty();
        $("#baby-mice-images").empty();
        $("#available-mice-images").text("Error: Wrong Network");
        $("#breeding-mice-images").text("Error: Wrong Network");
        $("#baby-mice-images").text("Error: Wrong Network");

        $("#your-breeding-anonymices").text(`YOUR BREEDING PAIRS (0)`);
        $("#your-anonymices").text(`YOUR AVAILABLE MICE (0)`);
        $("#your-baby-mice").text(`YOUR AVAILABLE MICE (0)`);
        $("#your-cheeth").text(`0.0`);
        $("#your-cheeth").append("<img src='./images/chees.png' width=32>");
        displayErrorMessage("Error: Wrong Network", false);
    }
};

const fixHeight = async() => {
    let breedingContainers = [];
    $("#breeding-mice-images > div").each((index, elem) => {
        breedingContainers.push(elem.id);
    });

    let tallestBreeding = $(`#${breedingContainers[0]}`).height();
    for (let i=1; i< breedingContainers.length; i++) {
        if ($(`#${breedingContainers[i]}`).height() > tallestBreeding) {
            tallestBreeding = $(`#${breedingContainers[i]}`).height();
        } 
    }

    for (let i=0; i< breedingContainers.length; i++) {
        $(`#${breedingContainers[i]}`).height(tallestBreeding);
    }


    let babyContainers = [];
    $("#baby-mice-images > div").each((index, elem) => {
        babyContainers.push(elem.id);
    });

    let tallestBaby = $(`#${babyContainers[0]}`).height();
    for (let i=1; i< babyContainers.length; i++) {
        if ($(`#${babyContainers[i]}`).height() > tallestBaby) {
            tallestBaby = $(`#${babyContainers[i]}`).height();
        } 
    }

    for (let i=0; i< babyContainers.length; i++) {
        $(`#${babyContainers[i]}`).height(tallestBaby);
    }
};

const updateCurrentChain = async() => {
    if ((await getChainId()) !== correctChain) {
        displayErrorMessage("Error: Wrong Network", false);
    }
    else {
        $("#error-popup").remove();
    }
}

const updateInfo = async() => {
    let userAddress = await getAddress();
    let ensAddress = await provider.lookupAddress(userAddress)
    if (ensAddress) {
        $("#wallet").text(ensAddress);
    }
    else {
        $("#wallet").text(userAddress);
    }
};

provider.on("network", async(newNetwork, oldNetwork) => {
    if (oldNetwork) {
        $("#refresh-notification").remove();
        await updateCurrentChain();
        await updateBreedingInfo();
    }
});

setInterval(async()=>{
    if (pendingTransactions.size == 0) {
        await updateApprovedStatus();
        await getCheethBalance();
        await getBabiesBred();
        await updateIncubatorInfo();
        await updateLockedParentsInfo();
        await fixHeight();
        await updateInfo();
    }
}, 5000)

ethereum.on("accountsChanged", async(accounts_)=>{
    location.reload();
    await updateBreedingInfo()
});

window.onload = async()=>{
    await loadRarityData();
    await updateInfo();

    if (pendingTransactions.size <1) {
        await updateBreedingInfo();
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
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div${darkClass}" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span>​<br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);

    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(2000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
         await updateBreedingInfo();
    }
}

window.onunload = async()=>{
    cachePendingTransactions();
}

var breedingMiceCount;
var selectedForBreeding = new Set();
var selectedForBreeding = new Set();

async function selectForBreeding(miceID) {
    if (!selectedForBreeding.has(miceID)) {
        if (selectedForBreeding.size >= 2) {
            displayErrorMessage(`Error: Pick 2 Mice to breed!`);
        }
        else {
            selectedForBreeding.add(miceID);
            $(`#available-mice-${miceID}`).addClass("active");
        }
    }
    else {
        selectedForBreeding.delete(miceID);
        $(`#available-mice-${miceID}`).removeClass("active");
    }
    if (selectedForBreeding.size == 0) {
        $("#selected-for-breeding").text("Selected: None");
    }
    else {
        let selectedString = `Selected: ${Array.from(selectedForBreeding).sort().join(' ')}`;
        $("#selected-for-breeding").text(selectedString);
    }
}
