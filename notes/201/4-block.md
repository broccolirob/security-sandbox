## 162. Two-step change of privileged roles

When privileged roles are being changed, it is recommended to follow a two-step approach: 1) The current privileged role proposes a new address for the change 2) The newly proposed address then claims the privileged role in a separate transaction. This two-step change allows accidental proposals to be corrected instead of leaving the system operationally with no/malicious privileged role. For e.g., in a single-step change, if the current admin accidentally changes the new admin to a zero-address or an incorrect address (where the private keys are not available), the system is left without an operational admin and will have to be redeployed.

## 163. Time-delayed change of critical parameters

When critical parameters of systems need to be changed, it is required to broadcast the change via event emission and recommended to enforce the changes after a time-delay. This is to allow system users to be aware of such critical changes and give them an opportunity to exit or adjust their engagement with the system accordingly. For e.g. reducing the rewards or increasing the fees in a system might not be acceptable to some users who may wish to withdraw their funds and exit.

## 164. Explicit over implicit

While Solidity has progressively adopted explicit declarations of intent for e.g. with function visibility and variable storage, it is recommended to do the same at the application level where all requirements should be explicitly validated (e.g. input parameters) and assumptions should be documented and checked. Implicit requirements and assumptions should be flagged as dangerous.

## 165. Configuration issues

Misconfiguration of system components such contracts, parameters, addresses and permissions may lead to security issues.

## 166. Initialization issues

Lack of initialization, initializing with incorrect values or allowing untrusted actors to initialize system parameters may lead to security issues.

## 167. Cleanup issues

Missing to clean up old state or cleaning up incorrectly/insufficiently will lead to reuse of stale state which may lead to security issues.

## 168. Data processing issues

Processing data incorrectly will cause unexpected behavior which may lead to security issues.

## 169. Data validation issues

Missing validation of data or incorrectly/insufficiently validating data, especially tainted data from untrusted users, will cause untrustworthy system behavior which may lead to security issues.

## 170. Numerical issues

Incorrect numerical computation will cause unexpected behavior which may lead to security issues.

## 171. Accounting issues

Incorrect or insufficient tracking or accounting of business logic related aspects such as states, phases, permissions, roles, funds (deposits/withdrawals) and tokens (mints/burns/transfers) may lead to security issues.

## 172. Access control issues

Incorrect or insufficient access control or authorization related to system actors, roles, assets and permissions may lead to security issues.

## 173. Auditing/logging issues

Incorrect or insufficient emission of events will impact off-chain monitoring and incident response capabilities which may lead to security issues.

## 174. Cryptography issues

Incorrect or insufficient cryptography especially related to on-chain signature verification or off-chain key management will impact access control and may lead to security issues.

## 175. Error-reporting issues

Incorrect or insufficient detecting, reporting and handling of error conditions will cause exceptional behavior to go unnoticed which may lead to security issues.

## 176. Denial-of-Service (DoS) issues

Preventing other users from successfully accessing system services by modifying system parameters or state causes denial-of-service issues which affects the availability of the system. This may also manifest as security issues if users are not able to access their funds locked in the system.

## 177. Timing issues

Incorrect assumptions on timing of user actions, system state transitions or blockchain state/blocks/transactions may lead to security issues.

## 178. Ordering issues

Incorrect assumptions on ordering of user actions or system state transitions may lead to security issues. For e.g., a user may accidentally/maliciously call a finalization function even before the initialization function if the system allows.

## 179. Undefined behavior issues

Any behavior that is undefined in the specification but is allowed in the implementation will result in unexpected outcomes which may lead to security issues.

## 180. External interaction issues

Interacting with external components (e.g. tokens, contracts, oracles) forces system to trust or make assumptions on their correctness/availability requiring validation of their existence and outputs without which may lead to security issues.

## 181. Trust issues

Incorrect or Insufficient trust assumption about/among system actors and external entities will lead to privilege escalation/abuse which may lead to security issues.
