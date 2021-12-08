// pragma solidity 0.8.10;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/AccessControl.sol";

// contract MockDeflationERC20 is ERC20, AccessControl{
    
//     uint256 feePercent = 5;
//     constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_){
//         _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
//     }
    
//     function mint(address _to, uint256 _amount) external {
//         _mint(_to, _amount);
//     }

//     function _afterTokenTransfer(address sender, address recipient, uint256 amount) override internal {
//         if (sender != address(0) && recipient != address(0)) super._burn(recipient, amount * feePercent / 100);
//     }

// }