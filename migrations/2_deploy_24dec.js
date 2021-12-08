const BN = require('bn.js');

require('dotenv').config();
const {
    DDS_BACKEND
} = process.env;

const Mock24DecERC20 = artifacts.require("Mock24DecERC20");
const MockDeflationERC20 = artifacts.require("MockDeflationERC20");
const MockUSDT = artifacts.require("MockUSDT");
const MockUSDC = artifacts.require("MockUSDC");
const MockRebasing = artifacts.require("MockRebasing");

const debug = "true";

const ZERO = new BN(0);
const ONE = new BN(1);
const TWO = new BN(2);
const THREE = new BN(3);

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

module.exports = async function (deployer, network) {
    if (network == "test" || network == "development")
        return;

    await deployer.deploy(
        Mock24DecERC20,
        "Mock 24 Decimals",
        "24Dec"
    );
    let Mock24DecERC20Inst = await Mock24DecERC20.deployed();
    console.log("Mock24DecERC20 =", Mock24DecERC20Inst.address);

    
    await deployer.deploy(
        MockDeflationERC20,
        "Mock Deflation",
        "DEFLAT"
    );
    let mockDeflationERC20Inst = await MockDeflationERC20.deployed();
    console.log("MockDeflationERC20 =", mockDeflationERC20Inst.address);


    await deployer.deploy(
        MockUSDT,
        100000000000,
        "Tether USD",
        "USDT",
        6
    );
    let mockUSDTInst = await MockUSDT.deployed();
    console.log("MockUSDT =", mockUSDTInst.address);

    await deployer.deploy(
        MockUSDC,
    );

    let mockUSDCInst = await MockUSDC.deployed();

    await mockUSDCInst.initialize(
        "Mock USDC",
        "USDC",
        "USD",
        6,
        "0x528e7c77B8F3001B512e8BF305b03CeA420951cd",
        "0x528e7c77B8F3001B512e8BF305b03CeA420951cd",
        "0x528e7c77B8F3001B512e8BF305b03CeA420951cd",
        "0x528e7c77B8F3001B512e8BF305b03CeA420951cd"
    )

    await mockUSDCInst.initializeV2("Mock USDC");
    await mockUSDCInst.initializeV2_1(ZERO_ADDRESS);


    console.log("MockUSDC =", mockUSDCInst.address);


    await deployer.deploy(
        MockRebasing
    );
    let mockRebasingInst = await MockRebasing.deployed();

    await mockRebasingInst.initialize('0xbDC0389AA5f6a7E858434C29d5Eda973dFdEa166');

    console.log("MockRebasing =", mockRebasingInst.address);

};