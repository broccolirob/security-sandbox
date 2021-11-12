## 45. Missing events

Events for critical state changes (e.g. owner and other critical parameters) should be emitted for tracking this off-chain.

## 46. Unindexed event parameters

Parameters of certain events are expected to be indexed (e.g. ERC20 Transfer/Approval events) so that they’re included in the block’s bloom filter for faster access. Failure to do so might confuse off-chain tooling looking for such indexed events.

## 47. Incorrect event signature in libraries

Contract types used in events in libraries cause an incorrect event signature hash. Instead of using the type `address` in the hashed signature, the actual contract name was used, leading to a wrong hash in the logs. This is due to a compiler bug introduced in `v0.5.0` and fixed in `v0.5.8`.
