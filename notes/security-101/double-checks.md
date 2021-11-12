## 65. Constant state variables

Constant state variables should be declared constant to save gas.

## 66. Similar variable names

Variables with similar names could be confused for each other and therefore should be avoided.

## 67. Uninitialized state/local variables

Uninitialized state/local variables are assigned zero values by the compiler and may cause unintended results e.g. transferring tokens to zero address. Explicitly initialize all state/local variables.

## 68. Uninitialized storage pointers

Uninitialized local storage variables can point to unexpected storage locations in the contract, which can lead to vulnerabilities. Solc 0.5.0 and above disallow such pointers.

## 69. Uninitialized function pointers in constructors

Calling uninitialized function pointers in constructors of contracts compiled with solc versions 0.4.5-0.4.25 and 0.5.0-0.5.7 lead to unexpected behavior because of a compiler bug.

## 70. Long number literals

Number literals with many digits should be carefully checked as they are prone to error.

## 71. Out-of-range enum

Solc < 0.4.5 produced unexpected behavior with out-of-range enums. Check enum conversion or use a newer compiler.
