## 1. Solidity versions

Using very old versions of Solidity prevents benefits of bug fixes and newer security checks. Using the latest versions might make contracts susceptible to undiscovered compiler bugs. Consider using one of these versions: 0.7.5, 0.7.6 or 0.8.4 .

## 2. Unlocked pragma

Contracts should be deployed using the same compiler version/flags with which they have been tested. Locking the pragma (for e.g. by not using ^ in pragma solidity 0.5.10) ensures that contracts do not accidentally get deployed using an older compiler version with unfixed bugs.

## 3. Multiple Solidity pragma

It is better to use one Solidity compiler version across all contracts instead of different versions with different bugs and security checks.
