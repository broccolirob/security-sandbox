# Naming

## Dangerous shadowing

Local variables, state variables, functions, modifiers, or events with names that shadow (i.e. override) builtin Solidity symbols e.g. `now` or other declarations from the current scope are misleading and may lead to unexpected usages and behavior.

## Dangerous state variable shadowing

Shadowing state variables in derived contracts may be dangerous for critical variables such as contract owner (for e.g. where modifiers in base contracts check on base variables but shadowed variables are set mistakenly) and contracts incorrectly use base/shadowed variables. Do not shadow state variables.

## Pre-declaration usage of local variables

Usage of a variable before its declaration (either declared later or in another scope) leads to unexpected behavior in `solc < 0.5.0` but `solc >= 0.5.0` implements C99-style scoping rules where variables can only be used after they have been declared and only in the same or nested scopes.
