// pragma solidity 0.8.10;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/AccessControl.sol";

// contract Mock24DecERC20 is ERC20, AccessControl{
    
//     constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_){
//         _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
//     }
    
//     function decimals() public view virtual override returns (uint8) {
//         return 24;
//     }

//     function mint(address _to, uint256 _amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
//         _mint(_to, _amount);
//     }

// }