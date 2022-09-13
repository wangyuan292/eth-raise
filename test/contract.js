const path = require('path');
const fs = require('fs');
const solc = require('solc');

const filePath = path.resolve("/Users/dongzhihua/web3.0/eth-raise/sol/test/Faucet.sol");
const source = fs.readFileSync(filePath);
console.log('source', source);
const input = JSON.stringify({
    language: 'Solidity',
    sources: {
        'Raise.sol': {
            content: source.toString()
        }
    },
    settings: {
        outputSelection: {

            // Enable the metadata and bytecode outputs of every single contract.
            "*": {
                "*": ["metadata", "evm.bytecode"]
            },
            // Enable the abi and opcodes output of MyContract defined in file def.
            "def": {
                "Lottery": ["abi"]
            },
        }
    }
})
console.log('input', input);
const json = JSON.parse(solc.compile(input));
console.log('json', json);

const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
const contract = new web3.eth.Contract(json);
console.log('contract', contract);
