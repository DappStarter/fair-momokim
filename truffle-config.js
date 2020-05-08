require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food street repeat sad honey honey light army gas'; 
let testAccounts = [
"0xff74aa5bca83617746ea9125c3bef56e0aaf909d002feeb20b6c34adbe06a9ac",
"0x95941cb698e28457a426d5050d63c8251a9fdbfeea9966b6fcf496cf8cd4b335",
"0x140deb5b9e2d3d2255a7fcf9a0b892d52e682996f390a25a36e89972982f156e",
"0x61fb0e041b6227ffc6e57ddb8714caab0c6f869538c8c9db6a9690cca37dea80",
"0xb4d49eb6ffb677bb53689becc4b6b2ae9ce6d35116b06d7a6e8c69c383f82a83",
"0x4f04ec5073cf454ebabf21287b8cf91d856923d9e7b3f2f97273e06d3fb92703",
"0xb7ceded7ed1d051ca0a1aeb748d8db379b7c9d5225b1109c0f003b91bd814289",
"0xe8451979d7dc081a6b3813f70ce8971c02664da63974139387fbb7b27ff31057",
"0x0ab69b8c7b73832c3a27a4ddf40ea835318782e8ecc48e9772eaa3eebe31ff9e",
"0xa4fe95d675a4d82ae4a840856317124517d6af6b5a8ccb832a94d842e5074c8c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
