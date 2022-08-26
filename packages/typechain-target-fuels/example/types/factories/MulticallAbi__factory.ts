/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { MulticallAbi, MulticallAbiInterface } from "../MulticallAbi";
const _abi = [
  {
    type: "function",
    inputs: [
      {
        name: "script_data",
        type: "struct ScriptData",
        components: [
          {
            name: "calls",
            type: "[enum Option; 5]",
            components: [
              {
                name: "__array_element",
                type: "enum Option",
                components: [
                  {
                    name: "Some",
                    type: "struct Call",
                    components: [
                      {
                        name: "contract_id",
                        type: "struct ContractId",
                        components: [
                          {
                            name: "value",
                            type: "b256",
                            components: null,
                          },
                        ],
                      },
                      {
                        name: "fn_selector",
                        type: "u64",
                        components: null,
                      },
                      {
                        name: "fn_arg",
                        type: "enum CallArg",
                        components: [
                          {
                            name: "Value",
                            type: "u64",
                            components: null,
                          },
                          {
                            name: "Reference",
                            type: "u64",
                            components: null,
                          },
                        ],
                      },
                      {
                        name: "amount",
                        type: "u64",
                        components: null,
                      },
                      {
                        name: "asset_id",
                        type: "b256",
                        components: null,
                      },
                    ],
                  },
                  {
                    name: "None",
                    type: "()",
                    components: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    name: "main",
    outputs: [
      {
        name: "",
        type: "struct ScriptReturn",
        components: [
          {
            name: "call_returns",
            type: "[enum Option; 5]",
            components: [
              {
                name: "__array_element",
                type: "enum Option",
                components: [
                  {
                    name: "Some",
                    type: "enum CallReturn",
                    components: [
                      {
                        name: "Value",
                        type: "u64",
                        components: null,
                      },
                      {
                        name: "Reference",
                        type: "(u64, u64)",
                        components: [
                          {
                            name: "__tuple_element",
                            type: "u64",
                            components: null,
                          },
                          {
                            name: "__tuple_element",
                            type: "u64",
                            components: null,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "None",
                    type: "()",
                    components: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export class MulticallAbi__factory {
  static readonly abi = _abi;
  static createInterface(): MulticallAbiInterface {
    return new Interface(_abi) as MulticallAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: Wallet | Provider
  ): MulticallAbi {
    return new Contract(id, _abi, walletOrProvider) as MulticallAbi;
  }
}
