// scripts/deploy.js
async function main() {
    // 1. Get the contract to deploy
    const age = await ethers.getContractFactory('Age');
    console.log('Deploying Your_Contract...');
 
    // 2. Instantiating a new smart contract
    const _age = await age.deploy();
 
    // 3. Waiting for the deployment to resolve
    await _age.deployed();
 
    // 4. Use the contract instance to get the contract address
    console.log('Age Contract is deployed to:', _age.address);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });