const anonymiceAddress = "0xbad6186E92002E312078b5a1dAfd5ddf63d3f731";
// const anonymiceAddress = "0xDD0a0B123f3bA18D6e34D05610A764e420e7af67";
 const anonymiceAbi = ()=>{
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"_tokenIdToHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_traitTypeIndex","type":"uint256"},{"components":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"internalType":"struct Anonymice.Trait[]","name":"traits","type":"tuple[]"}],"name":"addTraitType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnForMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearTraits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentCheethCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_hash","type":"string"}],"name":"hashToSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintMouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_cheethAddress","type":"address"}],"name":"setCheethAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"traitTypes","outputs":[{"internalType":"string","name":"traitName","type":"string"},{"internalType":"string","name":"traitType","type":"string"},{"internalType":"string","name":"pixels","type":"string"},{"internalType":"uint256","name":"pixelCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]';
 };


const cheethAddress = "0x5f7BA84c7984Aa5ef329B66E313498F0aEd6d23A";
// const cheethAddress = "0x55eD7441040B4b4DB61E95BB8B4ba49b952AE863";
const cheethAbi = ()=>{
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLAIM_END_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSIONS_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WALLET_STAKED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"anonymiceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimByTokenId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getAllRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRewardsByTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getStaker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getTokensStaked","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_anonymiceAddress","type":"address"}],"name":"setAnonymiceAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};

const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
const signer = provider.getSigner();
const anonymice = new ethers.Contract(anonymiceAddress,anonymiceAbi(),signer);
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

const getAnonymicesEnum = async()=>{
    let _ownedMices = ((await anonymice.walletOfOwner((await getAddress()))));
    return  _ownedMices.length;
};

const getAnonymicesStakedEnum = async()=>{
    let _stakedAnonymices = await cheeth.getTokensStaked((await getAddress()));
    return _stakedAnonymices.length;
};

const updateApprovedStatus = async()=>{
    if ((await anonymice.isApprovedForAll((await getAddress()), cheethAddress))) {
        // $("#approveButton").text(`Anonymice Approved!`);
        $("#approval-section").remove();
    };
};

const approveMicesToCheeth = async()=>{
    if ((await anonymice.isApprovedForAll((await getAddress()), cheethAddress))) {
        displayErrorMessage(`Error: Mice already approved!`);
        return;
    };
    await anonymice.setApprovalForAll(cheethAddress, true).then( async(tx_) => {
        await waitForTransaction(tx_);
    });
};

const stakeMicesToCheeth = async()=>{
    if (selectedForStaking.size == 0) {
        displayErrorMessage("Error: Select at least 1 mice to stake!")
    }
    else if ((await getAnonymicesEnum()) == 0) {
        displayErrorMessage("Error: No available mice to stake!")
    }
    else {
        const _micesArray = Array.from(selectedForStaking);
        const _stakedAnonymices = await cheeth.getTokensStaked((await getAddress()));
    
        if (!(await anonymice.isApprovedForAll((await getAddress()), cheethAddress))) {
            displayErrorMessage(`Error: Approve your Mice first!`);
            return;
        };
        if (_stakedAnonymices.length >= 10) {
            displayErrorMessage(`Error: Limit 10 staked Mice per address!`);
            return;
        };
        await cheeth.stakeByIds(_micesArray).then( async(tx_) => {
            for (let i = 0; i < _micesArray.length; i++) {
                $(`#available-mice-${_micesArray[i]}`).remove();
            }
            selectedForStaking = new Set();
            $("#selected-for-staking").text("Selected: None");
            await waitForTransaction(tx_);
        });
    }
};

const getCheethBalance = async()=>{
    return (formatEther(await cheeth.balanceOf((await getAddress()))));
};

const getPendingCheethBalance = async()=>{
    const pendingCheeth = (formatEther(await cheeth.getAllRewards((await getAddress()))));
    $("#your-pending-cheeth").text(`${pendingCheeth}`);
    $("#your-pending-cheeth").append( "<img src='./images/chees.png' width=32>");
};

const claimCheeth = async()=>{
    await cheeth.claimAll().then( async(tx_) => {
        await waitForTransaction(tx_);
    });
};

const unstakeByIds = async()=>{
    const numStaked = await getAnonymicesStakedEnum();
    if (numStaked == 0) {
        displayErrorMessage("Error: No Mice staked!")
    }
    else if (selectedForUnstaking.size == 0) {
        displayErrorMessage("Error: Select Mice to unstake!")
    }
    else {
        const _micesArray = Array.from(selectedForUnstaking);
        await cheeth.unstakeByIds(_micesArray).then( async(tx_) => {
            for (let i = 0; i < _micesArray.length; i++) {
                $(`#staked-mice-${_micesArray[i]}`).remove();
            }
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("Selected: None");
            await waitForTransaction(tx_);
        }); 
    }
}

const unstakeAll = async()=>{
    if ((await getAnonymicesStakedEnum()) == 0) {
        displayErrorMessage("Error: No Mice staked!")
    }
    else {
        await cheeth.unstakeAll().then( async(tx_) => {
            $("#staked-mice-images").empty();
            $("#staked-mice-images").append("<br>");
            selectedForUnstaking = new Set();
            $("#selected-for-unstaking").text("Selected: None");
            await waitForTransaction(tx_);
        });
    }
}

const getMiceTrackerInfo = async()=>{
    const _totalStaked = await anonymice.balanceOf("0x5f7ba84c7984aa5ef329b66e313498f0aed6d23a");
    const _pctStaked = (100*_totalStaked/3550).toFixed(2);
    $("#count-mice-staked").text(_totalStaked);
    $("#pct-mice-staked").text(`${_pctStaked} %`);
};

const getMiceImages = async()=>{
    const _baseImageURI = "https://raw.githubusercontent.com/jozanza/anonymice-images/main/";
    $("#available-mice-images").empty();
    $("#staked-mice-images").empty();

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
            let _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="available-mice-${_miceId}" onclick=selectForStaking(${_miceId})><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="100%" alt="" class="mice-image${_darkClass}" style="border:none;background-color:transparent;"><div>#${_miceId}</div></div>`;
            $("#available-mice-images").append(_fakeJSX);
        };
    }

    const _stakedMice = (await cheeth.getTokensStaked((await getAddress())));
    stakedMiceCount = _stakedMice.length;
    if (_stakedMice.length == 0) {
        $("#staked-mice-images").append("<br>No mice staking...");
    }
    else {
        for (let b = 0; b < _stakedMice.length; b++) {
            let _miceId = _stakedMice[b];
            if (!miceObjectMap.get(_miceId)) {
                new Mice(_miceId);
            }
            let _fakeJSX = `<div class="mice-on-sale${_darkClass}" id="staked-mice-${_miceId}" onclick=selectForUnstaking(${_miceId})><img src="${_baseImageURI}${_miceId}.png" loading="lazy" width="100%" alt="" class="mice-image${_darkClass}" style="border:none;background-color:transparent;"><div>#${_miceId}</div></div>`;
            $("#staked-mice-images").append(_fakeJSX);
        };
    }
};

const updateStakingInfo = async()=>{
    if ((await getChainId()) === 1) {
        let darkClass = getDarkMode();
        await updateInfo();
        const loadingDiv = `<div class="loading-div${darkClass}" id="refresh-notification">REFRESHING STAKE-O-MATRON<span class="one">.</span><span class="two">.</span><span class="three">.</span>​</div><br>`;
        $("#pending-transactions").append(loadingDiv);

        await updateApprovedStatus();
        await getMiceTrackerInfo();
        await getMiceImages();
        $("#your-staked-anonymices").text(`YOUR STAKED MICE (${await getAnonymicesStakedEnum()})`);
        $("#your-anonymices").text(`YOUR AVAILABLE MICE (${await getAnonymicesEnum()})`);
        $("#your-cheeth").text(`${await getCheethBalance()} $CHEETH`);
        await getPendingCheethBalance();
        $("#error-popup").remove();
    $("#refresh-notification").remove();

    } else {
        $("#wallet").text(`Wrong Chain!`);
        $("#available-mice-images").empty();
        $("#staked-mice-images").empty();
        $("#available-mice-images").text("Error: Switch to mainnet");
        $("#staked-mice-images").text("Error: Switch to mainnet");
        $("#your-staked-anonymices").text(`YOUR STAKED MICE (0)`);
        $("#your-anonymices").text(`YOUR AVAILABLE MICE (0)`);
        $("#your-cheeth").text(`0.0 $CHEETH`);
        $("#your-pending-cheeth").text(`0.0`);
        $("#your-pending-cheeth").append(`<img src='./images/chees.png' width=32>`);
        displayErrorMessage("Error: Switch to Mainnet", false);
    }
};

const updateCurrentChain = async() => {
    if ((await getChainId()) !== 1) {
        displayErrorMessage("Error: Switch to Mainnet!", false);
    }
    else {
        $("#error-popup").remove();
    }
}

provider.on("network", async(newNetwork, oldNetwork) => {
        if (oldNetwork) {
            $("#refresh-notification").remove();
            await updateCurrentChain();
            await updateStakingInfo();
        }
    });

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

setInterval(async()=>{
    await updateApprovedStatus();
    await getMiceTrackerInfo();
    await getPendingCheethBalance();
    await updateInfo();

}, 5000)

ethereum.on("accountsChanged", async(accounts_)=>{
    await updateStakingInfo()
    await getMiceImages();
});

window.onload = async()=>{
    await updateInfo();

    if (pendingTransactions.size <1) {
        await updateStakingInfo();
        // await getMiceImages();
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
    const etherscanLink = `https://rinkeby.etherscan.io/tx/${txHash}`;
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
        await updateStakingInfo();
    }
}


window.onunload = async()=>{
    cachePendingTransactions();
}

var stakedMiceCount;
var selectedForStaking = new Set();
var selectedForUnstaking = new Set();

async function selectForStaking(miceID) {
    if (!selectedForStaking.has(miceID)) {
        if (selectedForStaking.size + stakedMiceCount >= 10) {
            displayErrorMessage(`Error: Limit 10 staked Mice per address!`);
        }
        else {
            selectedForStaking.add(miceID);
            $(`#available-mice-${miceID}`).addClass("active");
        }
    }
    else {
        selectedForStaking.delete(miceID);
        $(`#available-mice-${miceID}`).removeClass("active");
    }
    if (selectedForStaking.size == 0) {
        $("#selected-for-staking").text("Selected: None");
    }
    else {
        let selectedString = `Selected: ${Array.from(selectedForStaking).sort().join(',')}`
        $("#selected-for-staking").text(selectedString);
    }
}

async function selectForUnstaking(miceID) {
    if (!selectedForUnstaking.has(miceID)) {
        selectedForUnstaking.add(miceID);
        $(`#staked-mice-${miceID}`).addClass("active");
    }
    else {
        selectedForUnstaking.delete(miceID);
        $(`#staked-mice-${miceID}`).removeClass("active");
    }
    if (selectedForUnstaking.size == 0) {
        $("#selected-for-unstaking").text("Selected: None");
    }
    else {
        let selectedString = `Selected: ${Array.from(selectedForUnstaking).sort().join(',')}`
        $("#selected-for-unstaking").text(selectedString);
    }
}
