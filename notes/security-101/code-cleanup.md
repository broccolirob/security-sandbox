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
