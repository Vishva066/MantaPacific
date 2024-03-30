async function main() {

        const contractAddress = '0x855692AD939EBBb2377683B2aBc27Db4320219f5'; //Replace with your contract address

        const Age = await ethers.getContractFactory('Age');

        const age = await Age.attach(contractAddress);

        const tx = await age.setage(61);

        await tx.wait();

        console.log(tx );

        const result = await age.getage();

        const viewAge = ethers.utils.formatUnits(result, 0); 

        console.log("Age:",viewAge);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
        process.exit(1);
    });
