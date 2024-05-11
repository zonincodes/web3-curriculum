import {writeFileSync, readFileSync} from "fs"

export function writeBlockchain(blockchain) {
    const blockchainString = JSON.stringify(blockchain, null, 2);
    writeFileSync("./blockchain.json", blockchainString);
}

export function getBlockchain() {
    const blockchainFile = readFileSync('./blockchain.json');
    const blockchain = JSON.parse(blockchainFile);
    return blockchain
}

export function isValidChain() {
    const blockchain = getBlockchain();
    for(let i = 1; i < blockchain.length; i++){
        const previousBlock = blockchain[i - 1];
        const {previousHash} = blockchain[i]
        if (previousHash !== previousBlock.hash) {
            return false;
        }
    }
    return true
}