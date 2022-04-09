async function main() {
  const Shop = await ethers.getContractFactory("Shop");

  // Start deployment, returning a promise that resolves to a contract object
  const shop = await Shop.deploy();
  console.log("Contract deployed to address:", shop.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
