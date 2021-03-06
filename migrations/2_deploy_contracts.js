var CAOToken = artifacts.require("./CAOToken.sol");

const tokens = [
	{
		name: "Banana",
		symbol: "๐",
		supply: 1,
	},
	{
		name: "Watter Supply",
		symbol: "๐ง",
		supply: 1,
	},
	{
		name: "Canned Food",
		symbol: "๐ฅซ",
		supply: 1,
	},
	{
		name: "Socks",
		symbol: "๐งฆ",
		supply: 1,
	},
	{
		name: "Jacket",
		symbol: "๐งฅ",
		supply: 1,
	},
	{
		name: "Sleeping Bag",
		symbol: "๐",
		supply: 1,
	},
	{
		name: "Knife",
		symbol: "๐ก๏ธ",
		supply: 1,
	},
	{
		name: "Fire",
		symbol: "๐ฅ",
		supply: 1,
	},
	{
		name: "Scissors",
		symbol: "โ๏ธ",
		supply: 1,
	},
	{
		name: "Lantern",
		symbol: "๐ฎ",
		supply: 1,
	},
	{
		name: "Bread",
		symbol: "๐ฅ",
		supply: 1,
	},
	{
		name: "Tent",
		symbol: "โบ๏ธ",
		supply: 1,
	},
	{
		name: "Gloves",
		symbol: "๐งค",
		supply: 1,
	},
	{
		name: "Cap",
		symbol: "๐งข",
		supply: 1,
	},
	{
		name: "Rope",
		symbol: "๐ฅจ",
		supply: 1
	},
	{
		name: "Meat",
		symbol: "๐",
		supply: 1
	},
	{
		name: "Pill",
		symbol: "๐",
		supply: 1
	},
	{
		name: "Shoes",
		symbol: "๐",
		supply: 1
	},
	{
		name: "Scarf",
		symbol: "๐งฃ",
		supply: 1
	},
	{
		name: "T-Shirt",
		symbol: "๐",
		supply: 1
	},
	{
		name: "Compass",
		symbol: "๐งญ",
		supply: 1
	},
	{
		name: "Backpack",
		symbol: "๐",
		supply: 1
	}
];

module.exports = function(deployer) {
	// deployer.deploy(CAOToken, tokens[0].name, tokens[0].symbol, tokens[0].supply);
	tokens.forEach(token => {
		deployer.deploy(CAOToken, token.name, token.symbol, token.supply);
	});
};
