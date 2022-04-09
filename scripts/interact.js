// interact.js
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/shop.sol/shop.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "ropsten"),
  API_KEY
);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const shopContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

console.log(JSON.stringify(contract.abi));

async function main() {
  const message = await shopContract.pictures(1);
  console.log("The message is: " + message);

  console.log("Updating the message...");
  const tx = await shopContract.createSellPic(100, "test1", "Moo");
  await tx.wait();

  const Newmessage = await shopContract.getPic();
  console.log("data is: " + Newmessage);
}
main();
