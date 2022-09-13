const Greeter = artifacts.require("Greeter");

// 传统的 Truffle 测试
contract("Greeter", accounts => {
    it("Should return the new greeting once it's changed", async function() {
        const greeter = await Greeter.new("Hello, world!");
        assert.equal(await greeter.greet(), "Hello, world!");

        await greeter.setGreeting("Hola, mundo!");

        assert.equal(await greeter.greet(), "Hola, mundo!");
    });
});

// Vanilla Mocha 测试，集成Mocha工具增强了兼容性
    describe("Greeter contract", function() {
        let accounts;

        before(async function() {
            accounts = await web3.eth.getAccounts();
        });

    describe("Deployment", function() {
        it("Should deploy with the right greeting", async function() {
            const greeter = await Greeter.new("Hello, world!");
            assert.equal(await greeter.greet(), "Hello, world!");

            const greeter2 = await Greeter.new("Hola, mundo!");
            assert.equal(await greeter2.greet(), "Hola, mundo!");
        });
    });
});