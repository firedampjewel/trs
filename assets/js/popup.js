// NFT pupup

const nftButton = document.querySelector('#nft-button');
const nftsPupup = document.querySelector('#nfts-pupup');
const nftCloseBtn = document.querySelector('#nftCloseBtn');



nftButton.addEventListener('click', function(){
    nftsPupup.style.transform = "scale(1)";
});

nftCloseBtn.addEventListener('click', function(){
    nftsPupup.style.transform = "scale(0)";

})


// transactions pupup

const historyButton = document.querySelector('#historyButton');
const transactionsPupup = document.querySelector('#transactions-pupup');
const transactionsCloseBtn = document.querySelector('#transactionsCloseBtn');



historyButton.addEventListener('click', function(){
    transactionsPupup.style.transform = "scale(1)";
});

transactionsCloseBtn.addEventListener('click', function(){
    transactionsPupup.style.transform = "scale(0)";

})


// Export pupup

const treasButton = document.querySelector('#treasButton');
const exportPupup = document.querySelector('#exportPupup');
const exportCloseBtn = document.querySelector('#exportCloseBtn');



treasButton.addEventListener('click', function(){
    exportPupup.style.transform = "scale(1)";
});

exportCloseBtn.addEventListener('click', function(){
    exportPupup.style.transform = "scale(0)";

})

// Export pupup

const loadButton = document.querySelector('#loadButton');
const loadPupup = document.querySelector('#loadPupup');
const loadCloseBtn = document.querySelector('#loadCloseBtn');



loadButton.addEventListener('click', function(){
    loadPupup.style.transform = "scale(1)";
});

loadCloseBtn.addEventListener('click', function(){
    loadPupup.style.transform = "scale(0)";

})

// Export pupup
const filterPopupButton = document.querySelector('#filterPopupButton');
const dataFilterPupup = document.querySelector('#dataFilterPupup');
const dataFilterCloseBtn = document.querySelector('#dataFilterCloseBtn');



filterPopupButton.addEventListener('click', function(){
    dataFilterPupup.style.transform = "scale(1)";
});

dataFilterCloseBtn.addEventListener('click', function(){
    dataFilterPupup.style.transform = "scale(0)";

})

// ==================== Holding Details Data =======================


const bitcoinRowButton = document.querySelector('#bitcoinRowButton');
const bitcoinRowDetails = document.querySelector('#bitcoinRowDetails');


bitcoinRowButton.addEventListener('click',function(){
    if(bitcoinRowDetails.style.display == 'block'){
        bitcoinRowDetails.style.display = 'none';
    }else{
        bitcoinRowDetails.style.display = 'block';
    }
})

// ======================== country setting ==================

const countrySettingButton = document.querySelector('#countrySettingButton');
const countryWrapper = document.querySelector('#countryWrapper');

countrySettingButton.addEventListener('click',function(){
    if(countryWrapper.style.display == 'block'){
        countryWrapper.style.display = 'none';
    }else{
        countryWrapper.style.display = 'block';
    }
})


// ======================= currency coin ====================

const currencyTitle = document.querySelector('#currencyTitle');
const currencyWrapper = document.querySelector('#currencyWrapper');

currencyTitle.addEventListener('click', function(){
    if(currencyWrapper.style.display == 'block'){
        currencyWrapper.style.display = "none";
    }else{
        currencyWrapper.style.display = "block";
    }
})