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

interface OracleInterfaceInterface extends Interface {
  functions: {
    fulfillOracleRequest: TypedFunctionDescription<{
      encode([
        requestId,
        payment,
        callbackAddress,
        callbackFunctionId,
        expiration,
        data
      ]: [
        Arrayish,
        BigNumberish,
        string,
        Arrayish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    getAuthorizationStatus: TypedFunctionDescription<{
      encode([node]: [string]): string;
    }>;

    setFulfillmentPermission: TypedFunctionDescription<{
      encode([node, allowed]: [string, boolean]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([recipient, amount]: [string, BigNumberish]): string;
    }>;

    withdrawable: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export class OracleInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): OracleInterface;
  attach(addressOrName: string): OracleInterface;
  deployed(): Promise<OracleInterface>;

  on(event: EventFilter | string, listener: Listener): OracleInterface;
  once(event: EventFilter | string, listener: Listener): OracleInterface;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): OracleInterface;
  removeAllListeners(eventName: EventFilter | string): OracleInterface;
  removeListener(eventName: any, listener: Listener): OracleInterface;

  interface: OracleInterfaceInterface;

  functions: {
    fulfillOracleRequest(
      requestId: Arrayish,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: Arrayish,
      expiration: BigNumberish,
      data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getAuthorizationStatus(node: string): Promise<boolean>;

    setFulfillmentPermission(
      node: string,
      allowed: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdrawable(): Promise<BigNumber>;
  };

  fulfillOracleRequest(
    requestId: Arrayish,
    payment: BigNumberish,
    callbackAddress: string,
    callbackFunctionId: Arrayish,
    expiration: BigNumberish,
    data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getAuthorizationStatus(node: string): Promise<boolean>;

  setFulfillmentPermission(
    node: string,
    allowed: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdraw(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdrawable(): Promise<BigNumber>;

  filters: {};

  estimate: {
    fulfillOracleRequest(
      requestId: Arrayish,
      payment: BigNumberish,
      callbackAddress: string,
      callbackFunctionId: Arrayish,
      expiration: BigNumberish,
      data: Arrayish
    ): Promise<BigNumber>;

    getAuthorizationStatus(node: string): Promise<BigNumber>;

    setFulfillmentPermission(
      node: string,
      allowed: boolean
    ): Promise<BigNumber>;

    withdraw(recipient: string, amount: BigNumberish): Promise<BigNumber>;

    withdrawable(): Promise<BigNumber>;
  };
}
