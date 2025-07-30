import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account {
  'owner' : Principal,
  'subaccount' : [] | [Subaccount],
}
export type AccountId = Uint8Array | number[];
export interface Account__1 {
  'owner' : Principal,
  'subaccount' : [] | [Subaccount],
}
export type Address = string;
export interface CanisterArgs {
  'initArgs' : InitArgs,
  'upgradeArgs' : [] | [UpgradeArgs],
}
export type Gas = { 'token' : bigint } |
  { 'cycles' : bigint } |
  { 'noFee' : null };
export interface ICRC1Canister {
  'drc202_canisterId' : ActorMethod<[], Principal>,
  'drc202_events' : ActorMethod<[[] | [Address]], Array<TxnRecord>>,
  'drc202_getConfig' : ActorMethod<[], Setting>,
  'drc202_pool' : ActorMethod<[], Array<[Txid, bigint]>>,
  'drc202_txn' : ActorMethod<[Txid], [] | [TxnRecord]>,
  'drc202_txn2' : ActorMethod<[Txid], [] | [TxnRecord]>,
  'historySize' : ActorMethod<[], bigint>,
  'icrc1_balance_of' : ActorMethod<[Account__1], bigint>,
  'icrc1_decimals' : ActorMethod<[], number>,
  'icrc1_fee' : ActorMethod<[], bigint>,
  'icrc1_metadata' : ActorMethod<[], Array<[string, Value]>>,
  'icrc1_minting_account' : ActorMethod<[], [] | [Account__1]>,
  'icrc1_name' : ActorMethod<[], string>,
  'icrc1_supported_standards' : ActorMethod<
    [],
    Array<{ 'url' : string, 'name' : string }>
  >,
  'icrc1_symbol' : ActorMethod<[], string>,
  'icrc1_total_supply' : ActorMethod<[], bigint>,
  'icrc1_transfer' : ActorMethod<
    [TransferArgs],
    { 'Ok' : bigint } |
      { 'Err' : TransferError }
  >,
}
export interface InitArgs {
  'fee' : bigint,
  'decimals' : number,
  'owner' : Principal,
  'metadata' : [] | [Array<Metadata>],
  'name' : [] | [string],
  'totalSupply' : bigint,
  'symbol' : [] | [string],
}
export interface Metadata { 'content' : string, 'name' : string }
export type Operation = { 'approve' : { 'allowance' : bigint } } |
  {
    'lockTransfer' : {
      'locked' : bigint,
      'expiration' : Time,
      'decider' : AccountId,
    }
  } |
  {
    'transfer' : {
      'action' : { 'burn' : null } |
        { 'mint' : null } |
        { 'send' : null },
    }
  } |
  { 'executeTransfer' : { 'fallback' : bigint, 'lockedTxid' : Txid__1 } };
export interface Setting {
  'MAX_STORAGE_TRIES' : bigint,
  'EN_DEBUG' : boolean,
  'MAX_CACHE_NUMBER_PER' : bigint,
  'MAX_CACHE_TIME' : bigint,
}
export type Subaccount = Uint8Array | number[];
export type Time = bigint;
export type Timestamp = bigint;
export interface Transaction {
  'to' : AccountId,
  'value' : bigint,
  'data' : [] | [Uint8Array | number[]],
  'from' : AccountId,
  'operation' : Operation,
}
export interface TransferArgs {
  'to' : Account,
  'fee' : [] | [bigint],
  'memo' : [] | [Uint8Array | number[]],
  'from_subaccount' : [] | [Subaccount],
  'created_at_time' : [] | [Timestamp],
  'amount' : bigint,
}
export type TransferError = {
    'GenericError' : { 'message' : string, 'error_code' : bigint }
  } |
  { 'TemporarilyUnavailable' : null } |
  { 'BadBurn' : { 'min_burn_amount' : bigint } } |
  { 'Duplicate' : { 'duplicate_of' : bigint } } |
  { 'BadFee' : { 'expected_fee' : bigint } } |
  { 'CreatedInFuture' : { 'ledger_time' : bigint } } |
  { 'TooOld' : null } |
  { 'InsufficientFunds' : { 'balance' : bigint } };
export type Txid = Uint8Array | number[];
export type Txid__1 = Uint8Array | number[];
export interface TxnRecord {
  'gas' : Gas,
  'msgCaller' : [] | [Principal],
  'transaction' : Transaction,
  'txid' : Txid__1,
  'nonce' : bigint,
  'timestamp' : Time,
  'caller' : AccountId,
  'index' : bigint,
}
export type UpgradeArgs = {};
export type Value = { 'Int' : bigint } |
  { 'Nat' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Text' : string };
export interface _SERVICE extends ICRC1Canister {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
