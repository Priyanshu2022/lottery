const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode}=require('./compile');

const provider=new HDWalletProvider(
    'zone sting memory excess spare detect pill crucial kitten host bone access',
    'https://rinkeby.infura.io/v3/b2a349aa021449dca1bb5a4ecd1a56cc'
);
// making instance
const web3=new Web3(provider);
const deploy=async()=>{
    const accounts=await web3.eth.getAccounts();
    console.log(`attempting do deploy from account ${accounts[0]}`);

    const result=await new web3.eth.Contract(interface)
        .deploy({data:bytecode})
        .send({gas:'1000000',from:accounts[0]});
    console.log(interface);
    console.log(`Contract deployed to,${result.options.address}`);
};
deploy();