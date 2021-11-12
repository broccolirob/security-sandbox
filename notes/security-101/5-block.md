## 81. Packed storage with ABIEncoderV2

Storage structs and arrays with types shorter than 32 bytes can cause data corruption if encoded directly from storage using ABIEncoderV2. This is due to a compiler bug introduced in v0.5.0 and fixed in v0.5.7.

## 82. Incorrect loads with Yul optimizer and ABIEncoderV2

The Yul optimizer incorrectly replaces `MLOAD` and `SLOAD` calls with values that have been previously written to the load location. This can only happen if ABIEncoderV2 is activated and the experimental Yul optimizer has been activated manually in addition to the regular optimizer in the compiler settings. This is due to a compiler bug introduced in v0.5.14 and fixed in v0.5.15.

## 83. Array slice dynamically encoded base type with ABIEncoderV2

Accessing array slices of arrays with dynamically encoded base types (e.g. multi-dimensional arrays) can result in invalid data being read. This is due to a compiler bug introduced in v0.6.0 and fixed in v0.6.8.

## 84. Missing escaping in formatting with ABIEncoderV2

String literals containing double backslash characters passed directly to external or encoding function calls can lead to a different string being used when ABIEncoderV2 is enabled. This is due to a compiler bug introduced in v0.5.14 and fixed in v0.6.8.

## 85. Double shift size overflow

Double bitwise shifts by large constants whose sum overflows 256 bits can result in unexpected values. Nested logical shift operations whose total shift size is 2\*\*256 or more are incorrectly optimized. This only applies to shifts by numbers of bits that are compile-time constant expressions. This happens when the optimizer is used and evmVersion >= Constantinople. This is due to a compiler bug introduced in v0.5.5 and fixed in v0.5.6.

## 86. Incorrect byte instruction optimization

The optimizer incorrectly handles byte opcodes whose second argument is 31 or a constant expression that evaluates to 31. This can result in unexpected values. This can happen when performing index access on `bytesNN` types with a compile time constant value (not index) of 31 or when using the byte opcode in inline assembly. This is due to a compiler bug introduced in v0.5.5 and fixed in v0.5.7.

## 87. Essential assignments removed with Yul Optimizer

The Yul optimizer can remove essential assignments to variables declared inside `for` loops when Yul's `continue` or `break` statement is used mostly while using inline assembly with `for` loops and `continue` and `break` statements. This is due to a compiler bug introduced in v0.5.8/v0.6.0 and fixed in v0.5.16/v0.6.1.

## 88. Private methods overridden

While private methods of base contracts are not visible and cannot be called directly from the derived contract, it is still possible to declare a function of the same name and type and thus change the behavior of the base contract's function. This is due to a compiler bug introduced in v0.3.0 and fixed in v0.5.17.

## 89. Tuple assignment multi stack slot components

Tuple assignments with components that occupy several stack slots, i.e. nested tuples, pointers to external functions or references to dynamically sized calldata arrays, can result in invalid values. This is due to a compiler bug introduced in v0.1.6 and fixed in v0.6.6.

## 90. Dynamic array cleanup

When assigning a dynamically sized array with types of size at most 16 bytes in storage causing the assigned array to shrink, some parts of deleted slots were not zeroed out. This is due to a compiler bug fixed in v0.7.3.

## 91. Empty byte array copy

Copying an empty byte array (or string) from memory or calldata to storage can result in data corruption if the target array's length is increased subsequently without storing new data. This is due to a compiler bug fixed in v0.7.4.

## 92. Memory array creation overflow

The creation of very large memory arrays can result in overlapping memory regions and thus memory corruption. This is due to a compiler bug introduced in v0.2.0 and fixed in v0.6.5.

## 93. Calldata `using x for y`

Function calls to internal library functions with calldata parameters called via “using for” can result in invalid data being read. This is due to a compiler bug introduced in v0.6.9 and fixed in v0.6.10.

## 94. Free function redefinition

The compiler does not flag an error when two or more free functions (functions outside of a contract) with the same name and parameter types are defined in a source unit or when an imported free function alias shadows another free function with a different name but identical parameter types. This is due to a compiler bug introduced in v0.7.1 and fixed in v0.7.2.

## 95. Unprotected initializers in proxy-based upgradeable contracts

Proxy-based upgradeable contracts need to use `public` initializer functions instead of constructors that need to be explicitly called only once. Preventing multiple invocations of such initializer functions (e.g. via `initializer` modifier from OpenZeppelin’s Initializable library) is a must.

## 96. Initializing state-variables in proxy-based upgradeable contracts

This should be done in initializer functions and not as part of the state variable declarations in which case they won’t be set.

## 97. Import upgradeable contracts in proxy-based upgradeable contracts

Contracts imported from proxy-based upgradeable contracts should also be upgradeable where such contracts have been modified to use initializers instead of constructors.

## 98. Avoid `selfdestruct` or `delegatecall` in proxy-based upgradeable contracts

This will cause the logic contract to be destroyed and all contract instances will end up delegating calls to an address without any code.

## 99. State variables in proxy-based upgradeable contracts

The declaration order/layout and type/mutability of state variables in such contracts should be preserved exactly while upgrading to prevent critical storage layout mismatch errors.

## 100. Function ID collision between proxy/implementation in proxy-based upgradeable contracts

Malicious proxy contracts may exploit function ID collision to invoke unintended proxy functions instead of delegating to implementation functions. Check for function ID collisions.

## 101. Function shadowing between proxy/contract in proxy-based upgradeable contracts

Shadow functions in proxy contract prevent functions in logic contract from being invoked.
