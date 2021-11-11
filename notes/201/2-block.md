## 122. ERC1400 permissioned addresses

Can block transfers from/to specific addresses.

## 123. ERC1400 forced transfers

Trusted actors have the ability to transfer funds however they choose.

## 124. ERC1644 forced transfers

Controller has the ability to steal funds.

## 125. ERC621 control of totalSupply

totalSupply can be changed by trusted actors.

## 126. ERC884 cancel and reissue

Token implementers have the ability to cancel an address and move its tokens to a new address.

## 127. ERC884 whitelisting

Tokens can only be sent to whitelisted addresses

## 128. Guarded launch via asset limits

Limiting the total asset value managed by a system initially upon launch and gradually increasing it over time may reduce impact due to initial vulnerabilities or exploits.

## 129. Guarded launch via asset types

Limiting types of assets that can be used in the protocol initially upon launch and gradually expanding to other assets over time may reduce impact due to initial vulnerabilities or exploits.

## 130. Guarded launch via user limits

Limiting the total number of users that can interact with a system initially upon launch and gradually increasing it over time may reduce impact due to initial vulnerabilities or exploits. Initial users may also be whitelisted to limit to trusted actors before opening the system to everyone.

## 131. Guarded launch via usage limits

Enforcing transaction size limits, daily volume limits, per-account limits, or rate-limiting transactions may reduce impact due to initial vulnerabilities or exploits.

## 132. Guarded launch via composability limits

Restricting the composability of the system to interface only with whitelisted trusted contracts before expanding to arbitrary external contracts may reduce impact due to initial vulnerabilities or exploits.

## 133. Guarded launch via escrows

Escrowing high value transactions/operations with time locks and a governance capability to nullify or revert transactions may reduce impact due to initial vulnerabilities or exploits.

## 134. Guarded launch via circuit breakers

Implementing capabilities to pause/unpause a system in extreme scenarios may reduce impact due to initial vulnerabilities or exploits.

## 135. Guarded launch via emergency shutdown

Implement capabilities that allow governance to shutdown new activity in the system and allow users to reclaim assets may reduce impact due to initial vulnerabilities or exploits.

## 136. System specification

Ensure that the specification of the entire system is considered, written and evaluated to the greatest detail possible. Specification describes how (and why) the different components of the system behave to achieve the design requirements. Without specification, a system implementation cannot be evaluated against the requirements for correctness.

## 137. System documentation

Ensure that roles, functionalities and interactions of the entire system are well documented to the greatest detail possible. Documentation describes what (and how) the implementation of different components of the system does to achieve the specification goals. Without documentation, a system implementation cannot be evaluated against the specification for correctness and one will have to rely on analyzing the implementation itself.

## 138. Function parameters

Ensure input validation for all function parameters especially if the visibility is external/public where (untrusted) users can control values. This is especially required for address parameters where maliciously/accidentally used incorrect/zero addresses can cause vulnerabilities or unexpected behavior.

## 139. Function arguments

Ensure that the arguments to function calls at the caller sites are the correct ones and in the right order as expected by the function definition.

## 140. Function visibility

Ensure that the strictest visibility is used for the required functionality. An accidental external/public visibility will allow (untrusted) users to invoke functionality that is supposed to be restricted internally.

## 141. Function modifiers

Ensure that the right set of function modifiers are used (in the correct order) for the specific functions so that the expected access control or validation is correctly enforced.
