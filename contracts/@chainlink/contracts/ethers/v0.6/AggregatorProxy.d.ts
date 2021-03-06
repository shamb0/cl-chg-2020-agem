/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface AggregatorProxyInterface extends Interface {
  functions: {
    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    aggregator: TypedFunctionDescription<{ encode([]: []): string }>;

    confirmAggregator: TypedFunctionDescription<{
      encode([_aggregator]: [string]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    description: TypedFunctionDescription<{ encode([]: []): string }>;

    getAnswer: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getRoundData: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getTimestamp: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRound: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRoundData: TypedFunctionDescription<{ encode([]: []): string }>;

    latestTimestamp: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    phaseAggregators: TypedFunctionDescription<{
      encode([]: [BigNumberish]): string;
    }>;

    phaseId: TypedFunctionDescription<{ encode([]: []): string }>;

    proposeAggregator: TypedFunctionDescription<{
      encode([_aggregator]: [string]): string;
    }>;

    proposedAggregator: TypedFunctionDescription<{ encode([]: []): string }>;

    proposedGetRoundData: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    proposedLatestRoundData: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_to]: [string]): string;
    }>;

    version: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, updatedAt]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;

    NewRound: TypedEventDescription<{
      encodeTopics([roundId, startedBy, startedAt]: [
        BigNumberish | null,
        string | null,
        null
      ]): string[];
    }>;

    OwnershipTransferRequested: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;
  };
}

export class AggregatorProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): AggregatorProxy;
  attach(addressOrName: string): AggregatorProxy;
  deployed(): Promise<AggregatorProxy>;

  on(event: EventFilter | string, listener: Listener): AggregatorProxy;
  once(event: EventFilter | string, listener: Listener): AggregatorProxy;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): AggregatorProxy;
  removeAllListeners(eventName: EventFilter | string): AggregatorProxy;
  removeListener(eventName: any, listener: Listener): AggregatorProxy;

  interface: AggregatorProxyInterface;

  functions: {
    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    aggregator(): Promise<string>;

    confirmAggregator(
      _aggregator: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decimals(): Promise<number>;

    description(): Promise<string>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getRoundData(
      _roundId: BigNumberish
    ): Promise<{
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestRoundData(): Promise<{
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    latestTimestamp(): Promise<BigNumber>;

    owner(): Promise<string>;

    phaseAggregators(arg0: BigNumberish): Promise<string>;

    phaseId(): Promise<number>;

    proposeAggregator(
      _aggregator: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    proposedAggregator(): Promise<string>;

    proposedGetRoundData(
      _roundId: BigNumberish
    ): Promise<{
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    proposedLatestRoundData(): Promise<{
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    transferOwnership(
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    version(): Promise<BigNumber>;
  };

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  aggregator(): Promise<string>;

  confirmAggregator(
    _aggregator: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  decimals(): Promise<number>;

  description(): Promise<string>;

  getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

  getRoundData(
    _roundId: BigNumberish
  ): Promise<{
    roundId: BigNumber;
    answer: BigNumber;
    startedAt: BigNumber;
    updatedAt: BigNumber;
    answeredInRound: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

  latestAnswer(): Promise<BigNumber>;

  latestRound(): Promise<BigNumber>;

  latestRoundData(): Promise<{
    roundId: BigNumber;
    answer: BigNumber;
    startedAt: BigNumber;
    updatedAt: BigNumber;
    answeredInRound: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  latestTimestamp(): Promise<BigNumber>;

  owner(): Promise<string>;

  phaseAggregators(arg0: BigNumberish): Promise<string>;

  phaseId(): Promise<number>;

  proposeAggregator(
    _aggregator: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  proposedAggregator(): Promise<string>;

  proposedGetRoundData(
    _roundId: BigNumberish
  ): Promise<{
    roundId: BigNumber;
    answer: BigNumber;
    startedAt: BigNumber;
    updatedAt: BigNumber;
    answeredInRound: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  proposedLatestRoundData(): Promise<{
    roundId: BigNumber;
    answer: BigNumber;
    startedAt: BigNumber;
    updatedAt: BigNumber;
    answeredInRound: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  transferOwnership(
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  version(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      updatedAt: null
    ): EventFilter;

    NewRound(
      roundId: BigNumberish | null,
      startedBy: string | null,
      startedAt: null
    ): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransferred(from: string | null, to: string | null): EventFilter;
  };

  estimate: {
    acceptOwnership(): Promise<BigNumber>;

    aggregator(): Promise<BigNumber>;

    confirmAggregator(_aggregator: string): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    description(): Promise<BigNumber>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getRoundData(_roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestRoundData(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    phaseAggregators(arg0: BigNumberish): Promise<BigNumber>;

    phaseId(): Promise<BigNumber>;

    proposeAggregator(_aggregator: string): Promise<BigNumber>;

    proposedAggregator(): Promise<BigNumber>;

    proposedGetRoundData(_roundId: BigNumberish): Promise<BigNumber>;

    proposedLatestRoundData(): Promise<BigNumber>;

    transferOwnership(_to: string): Promise<BigNumber>;

    version(): Promise<BigNumber>;
  };
}
