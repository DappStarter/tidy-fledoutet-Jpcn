require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food grocery crawl museum upgrade inner close army ghost'; 
let testAccounts = [
"0x3532698c049707e6ba98db434fb0aba11e17562953d6ac8efe6983f1e94ab3cb",
"0x764cb9fb2d7beb54406927996eacb936cfff5382799f86b50ba643578bdf0984",
"0x7a792ee4a6135e4c83d84f0a788282856481f0aa5480f3321801de7bfc0a6acd",
"0x4ada237004f1e6ec7b1b60c56a2e00eeae1e77f14782dc6759b0c7523b58d194",
"0x2a12bb3d94668b1f19c7e8540331b4a1494fa2abc5622d5302c173b58fb1193d",
"0xdb4aca03ee3082938e1bd2635306cb7895da768fb80755e75e9363faa115922f",
"0x756c21b18cb53192c2c8023b7a9c663ed4a9e370c4d853eb57f7d9be03ba1fbd",
"0x79ed1ce8b301cd657decd088531c180410a6e28268eb2748f029aee3dfaac5f8",
"0xc708f80628a80247b7e161915c4ebf93a8363de8bb3d7da432c26ab6266d4f1d",
"0x3a242888c64886fb91392ec05363e509c9b4b6743d933247e0cfe10fc50b3336"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


