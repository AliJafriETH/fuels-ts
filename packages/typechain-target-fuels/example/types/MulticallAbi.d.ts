/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  BytesLike,
  BigNumberish,
  InvokeFunction,
} from "fuels";

import type { Enum } from "./common";

export type ContractIdInput = { value: string };

export type ContractIdOutput = { value: string };

export type CallInput = {
  contract_id: ContractIdInput;
  fn_selector: BigNumberish;
  fn_arg: CallArgInput;
  amount: BigNumberish;
  asset_id: string;
};

export type CallOutput = {
  contract_id: ContractIdOutput;
  fn_selector: string;
  fn_arg: CallArgOutput;
  amount: string;
  asset_id: string;
};

export type ScriptDataInput = {
  calls: [OptionInput, OptionInput, OptionInput, OptionInput, OptionInput];
};

export type ScriptDataOutput = {
  calls: [OptionOutput, OptionOutput, OptionOutput, OptionOutput, OptionOutput];
};

export type ScriptReturnInput = {
  call_returns: [
    OptionInput,
    OptionInput,
    OptionInput,
    OptionInput,
    OptionInput
  ];
};

export type ScriptReturnOutput = {
  call_returns: [
    OptionOutput,
    OptionOutput,
    OptionOutput,
    OptionOutput,
    OptionOutput
  ];
};

export type CallArgInput = Enum<{
  Value: BigNumberish;
  Reference: BigNumberish;
}>;

export type CallArgOutput = Enum<{ Value: string; Reference: string }>;

export type OptionInput = Enum<{ Some: CallInput; None: [] }>;

export type OptionOutput = Enum<{ Some: CallOutput; None: [] }>;

export type CallReturnInput = Enum<{
  Value: BigNumberish;
  Reference: [BigNumberish, BigNumberish];
}>;

export type CallReturnOutput = Enum<{
  Value: string;
  Reference: [string, string];
}>;

interface MulticallAbiInterface extends Interface {
  functions: {
    main: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "main",
    values: [ScriptDataInput]
  ): Uint8Array;

  decodeFunctionData(functionFragment: "main", data: BytesLike): DecodedValue;
}

export class MulticallAbi extends Contract {
  interface: MulticallAbiInterface;
  functions: {
    main: InvokeFunction<[script_data: ScriptDataInput], ScriptReturnOutput>;
  };
}
