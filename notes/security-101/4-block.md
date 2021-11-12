## 61. Malleability risk from dirty high order bits

Types that do not occupy the full 32 bytes might contain “dirty higher order bits” which does not affect operation on types but gives different results with `msg.data`.

## 62. Incorrect shift in assembly

Shift operators (`shl(x, y)`, `shr(x, y)`, `sar(x, y)`) in Solidity assembly apply the shift operation of x bits on y and not the other way around, which may be confusing. Check if the values in a shift operation are reversed.

## 63. Assembly usage

Use of EVM assembly is error-prone and should be avoided or double-checked for correctness.

## 64. Right-to-left-override control character (U+202E)

Malicious actors can use the Right-To-Left-Override unicode character to force RTL text rendering and confuse users as to the real intent of a contract. U+202E character should not appear in the source code of a smart contract.

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

## 72. Uncalled public functions

Public functions that are never called from within the contracts should be declared external to save gas.

## 73. Dead/Unreachable code

Dead code may be indicative of programmer error, missing logic or potential optimization opportunity, which needs to be flagged for removal or addressed appropriately.

## 74. Unused return values

Unused return values of function calls are indicative of programmer errors which may have unexpected behavior.

## 75. Unused variables

Unused state/local variables may be indicative of programmer error, missing logic or potential optimization opportunity, which needs to be flagged for removal or addressed appropriately.

## 76. Redundant statements

Statements with no effects that do not produce code may be indicative of programmer error or missing logic, which needs to be flagged for removal or addressed appropriately.

## 77. Storage array with signed Integers with ABIEncoderV2

Assigning an array of signed integers to a storage array of different type can lead to data corruption in that array. This is due to a compiler bug introduced in v0.4.7 and fixed in v0.5.10.

## 78. Dynamic constructor arguments clipped with ABIEncoderV2

A contract's constructor which takes structs or arrays that contain dynamically sized arrays reverts or decodes to invalid data when ABIEncoderV2 is used. This is due to a compiler bug introduced in v0.4.16 and fixed in v0.5.9.

## 79. Storage array with multiSlot element with ABIEncoderV2

Storage arrays containing structs or other statically sized arrays are not read properly when directly encoded in external function calls or in `abi.encode()`. This is due to a compiler bug introduced in v0.4.16 and fixed in v0.5.10.

## 80. Calldata structs with statically sized and dynamically encoded members with ABIEncoderV2

Reading from calldata structs that contain dynamically encoded, but statically sized members can result in incorrect values. This is due to a compiler bug introduced in v0.5.6 and fixed in v0.5.11.
