import { BigNumber } from 'ethers';
import { BountyStatus } from './bounty.enum';

export type AmbMessage = {
  messageIdentifier: string;
  amb: string;
  sourceChain: string;
  destinationChain: string;
  payload: string; // This is specifically Generalised Incentive payload.
  recoveryContext?: string; // Normally we would listen for the proofs but sometimes we might miss or somethings goes wrong. If this field is set, then it can be used to recover the tx. The encoding scheme depends entirely on the amb.
};

export type AmbPayload = {
  messageIdentifier: string;
  amb: string;
  destinationChainId: string;
  message: string;
  messageCtx?: string;
  priority?: boolean;
};

export type Bounty = {
  messageIdentifier: string;
  fromChainId: string;
  toChainId?: string;
  maxGasDelivery: number;
  maxGasAck: number;
  refundGasTo: string;
  priceOfDeliveryGas: BigNumber;
  priceOfAckGas: BigNumber;
  targetDelta: BigNumber;
  status: BountyStatus;
  sourceAddress: string;
  destinationAddress?: string;
  finalised?: boolean;
  submitTransactionHash?: string;
  execTransactionHash?: string;
  ackTransactionHash?: string;
};

export type BountyJson = {
  messageIdentifier: string;
  fromChainId?: string;
  toChainId?: string;
  maxGasDelivery?: number;
  maxGasAck?: number;
  refundGasTo?: string;
  priceOfDeliveryGas?: string;
  priceOfAckGas?: string;
  targetDelta?: string;
  status: BountyStatus;
  sourceAddress?: string;
  destinationAddress?: string;
  finalised?: boolean;
  submitTransactionHash?: string;
  execTransactionHash?: string;
  ackTransactionHash?: string;
};
