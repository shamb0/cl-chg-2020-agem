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

interface CheckedMathTestHelperInterface extends Interface {
  functions: {
    add: TypedFunctionDescription<{
      encode([a, b]: [BigNumberish, BigNumberish]): string;
    }>;

    div: TypedFunctionDescription<{
      encode([a, b]: [BigNumberish, BigNumberish]): string;
    }>;

    mul: TypedFunctionDescription<{
      encode([a, b]: [BigNumberish, BigNumberish]): string;
    }>;

    sub: TypedFunctionDescription<{
      encode([a, b]: [BigNumberish, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class CheckedMathTestHelper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): CheckedMathTestHelper;
  attach(addressOrName: string): CheckedMathTestHelper;
  deployed(): Promise<CheckedMathTestHelper>;

  on(event: EventFilter | string, listener: Listener): CheckedMathTestHelper;
  once(event: EventFilter | string, listener: Listener): CheckedMathTestHelper;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): CheckedMathTestHelper;
  removeAllListeners(eventName: EventFilter | string): CheckedMathTestHelper;
  removeListener(eventName: any, listener: Listener): CheckedMathTestHelper;

  interface: CheckedMathTestHelperInterface;

  functions: {
    add(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<{
      result: BigNumber;
      ok: boolean;
      0: BigNumber;
      1: boolean;
    }>;

    div(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<{
      result: BigNumber;
      ok: boolean;
      0: BigNumber;
      1: boolean;
    }>;

    mul(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<{
      result: BigNumber;
      ok: boolean;
      0: BigNumber;
      1: boolean;
    }>;

    sub(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<{
      result: BigNumber;
      ok: boolean;
      0: BigNumber;
      1: boolean;
    }>;
  };

  add(
    a: BigNumberish,
    b: BigNumberish
  ): Promise<{
    result: BigNumber;
    ok: boolean;
    0: BigNumber;
    1: boolean;
  }>;

  div(
    a: BigNumberish,
    b: BigNumberish
  ): Promise<{
    result: BigNumber;
    ok: boolean;
    0: BigNumber;
    1: boolean;
  }>;

  mul(
    a: BigNumberish,
    b: BigNumberish
  ): Promise<{
    result: BigNumber;
    ok: boolean;
    0: BigNumber;
    1: boolean;
  }>;

  sub(
    a: BigNumberish,
    b: BigNumberish
  ): Promise<{
    result: BigNumber;
    ok: boolean;
    0: BigNumber;
    1: boolean;
  }>;

  filters: {};

  estimate: {
    add(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;

    div(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;

    mul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;

    sub(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
  };
}