# Things to Double-check

## Constant state variables

Constant state variables should be declared constant to save gas.

## Similar variable names

Variables with similar names could be confused for each other and therefore should be avoided.

## Uninitialized state/local variables

Uninitialized state/local variables are assigned zero values by the compiler and may cause unintended results e.g. transferring tokens to zero address. Explicitly initialize all state/local variables.

## Uninitialized storage pointers

Uninitialized local storage variables can point to unexpected storage locations in the contract, which can lead to vulnerabilities. Solc 0.5.0 and above disallow such pointers.

## Uninitialized function pointers in constructors

Calling uninitialized function pointers in constructors of contracts compiled with solc versions 0.4.5-0.4.25 and 0.5.0-0.5.7 lead to unexpected behavior because of a compiler bug.

## Long number literals

Number literals with many digits should be carefully checked as they are prone to error.

## Out-of-range enum

Solc < 0.4.5 produced unexpected behavior with out-of-range enums. Check enum conversion or use a newer compiler.
