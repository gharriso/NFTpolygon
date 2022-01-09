const hre = require("hardhat");

const WALLET_ADDRESS = "0xEf36844393c0B98Eb71806e796dDaEDB9Bf29e32";
const CONTRACT_ADDRESS = "0x500dBCf4b79099EEa72F58A732DEB42bF735C559";

async function main(_URI) {
  const NFT = await hre.ethers.getContractFactory("MyToken");

  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.safeMint(WALLET_ADDRESS).then((txn) => {
    // Log Txn
    console.log(txn.hash);
    return txn;
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
