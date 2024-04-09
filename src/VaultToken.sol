// create a new contract named VaultToken
// it should inherit from the ERC20 contract
// it should have a function deposit that takes an address and an amount as arguments, and mints the amount of tokenB to the address. while takes the same amount of tokenA from the sender (the contract owner)
// it should have a function withdraw that takes an amount as an argument, and burns the amount of tokenB from the sender. while sends the same amount of tokenA to the sender (the contract owner)
// add merkle proof whitelisting to the contract