const apps = artifacts.require("apps");

module.exports = function(deployer) {
	deployer.deploy(apps);
};