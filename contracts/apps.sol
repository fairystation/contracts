// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract apps is ERC721 {

    string[] private appList;
    address public owner = msg.sender;

    constructor() ERC721("apps", "APO") {

    }

    function mint(string memory _app) public {
        require(
        msg.sender == owner,
        "This function is restricted to the contract's owner!"
        );
        uint _id = appList.length;
        appList.push(_app);
        _mint(msg.sender, _id);
    }

    function getAppList() public view returns (string[] memory) {
        return appList;
    }
}