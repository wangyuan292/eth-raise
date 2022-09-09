(async () => {

    try {
        console.log('start')

        const account1 = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'
        const accounts = await web3.eth.getAccounts()
        console.log('accounts', accounts)
        const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'

        const metadata = JSON.parse(await remix.call('fileManager', 'getFile', 'browser/sol/artifacts/InvokeTest.json'))
        console.log('get metadata finish...')
        let abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contractAdd","type":"address"},{"indexed":false,"internalType":"uint8","name":"age","type":"uint8"},{"indexed":true,"internalType":"string","name":"name","type":"string"}],"name":"testEvent","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"getAge","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint8","name":"_age","type":"uint8"}],"name":"setStudent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
        let contract = new web3.eth.Contract(abi, contractAddress)

        console.log('get contract finish...', contract)

        contract.methods.setStudent("laowang", 35).send({ from: accounts[0] }).on('receipt', async (receipt) => {
            console.log(receipt)
            const result = await contract.methods.balanceOf(account1).call({from: account1})
            console.log('balance_', result)
        })
    } catch (e) {
        console.log('exception...')
        console.log(e.message)
    }

})()