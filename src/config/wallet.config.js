const ETH_ICON = require('../assets/images/ETH-icon.png');
const USDC_ICON = require('../assets/images/USDC-icon.png');
const COSMOS_ICON = require('../assets/images/Cosmos-icon.png');
const ETH_SUB_ICONS = require('../assets/images/USD-ICONS.png');
const USD_SUB_ICONS = require('../assets/images/USD-ICONS2.png');
const MATIC_SUB_ICON = require('../assets/images/MATIC-icon.png');
const MATIC_ICON = require('../assets/images/MATIC-MAIN-ICON.png');
const POLY_ICON = require('../assets/images/Polygon.png');
const COPY_ICON = require('../assets/images/copy.png');
const DROP_DOWN_ICON = require('../assets/images/arrow-down.png');
const PROFILE_PIC = require('../assets/images/user-image.png');
const REFRESH_ICON = require('../assets/images/refresh-icon.png');
const BUY_ICON = require('../assets/images/buy-button-bg.png');
const SEND_ICON = require('../assets/images/send-button-bg.png');

module.exports = {
    ASSETS_UP: '+2.5%',
    WALLET_BAL: '$ 1838.83',
    USR_NAME: 'thekaypo@tria',
    NETWORK: 'polygon',
    DROP_DOWN_ICON,
    REFRESH_ICON,
    PROFILE_PIC,
    COPY_ICON,
    POLY_ICON,
    SEND_ICON,
    BUY_ICON,
    ASSETS: [
        {
            NAME: 'USDC',
            ICON: ETH_ICON,
            CHAINS: ETH_SUB_ICONS,
            USD_BAL: '$10.094',
            TOKEN_BAL: '1 POL',
        },
        {
            NAME: 'USDC',
            ICON: USDC_ICON,
            CHAINS: USD_SUB_ICONS,
            USD_BAL: '$10.094',
            TOKEN_BAL: '1 POL',
        },
        {
            NAME: 'MATIC',
            ICON: COSMOS_ICON,
            CHAINS: MATIC_SUB_ICON,
            USD_BAL: '$10.094',
            TOKEN_BAL: '1 POL',
        },
        {
            NAME: 'ATOM',
            ICON: MATIC_ICON,
            CHAINS: MATIC_SUB_ICON,
            USD_BAL: '$10.094',
            TOKEN_BAL: '1 POL',
        },
    ],
};
