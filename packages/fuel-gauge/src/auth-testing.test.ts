import type { Contract } from 'fuels';
import { ScriptResultDecoderError } from 'fuels';

import { getSetupContract, getWallet } from './utils';

const setupContract = getSetupContract('auth_testing_contract');

let contractInstance: Contract;

beforeAll(async () => {
  contractInstance = await setupContract();
});

describe('Auth Testing', () => {
  it('can get is_caller_external', async () => {
    const { value } = await contractInstance.functions.is_caller_external().call();

    expect(value).toBeTruthy();
  });

  it('can check_msg_sender [with correct id]', async () => {
    const wallet = getWallet();

    const { value } = await contractInstance.functions
      .check_msg_sender({ value: wallet.address.toB256() })
      .call();

    expect(value).toBeTruthy();
  });

  it('can check_msg_sender [with correct id, using get]', async () => {
    const wallet = getWallet();
    try {
      await contractInstance.functions.check_msg_sender({ value: wallet.address.toB256() }).get();

      throw new Error('it should have thrown');
    } catch (error) {
      if (error instanceof ScriptResultDecoderError) {
        return expect(error).toBeTruthy();
      }

      throw error;
    }
  });

  it('can check_msg_sender [with incorrect id]', async () => {
    const wallet = getWallet();

    try {
      await contractInstance.functions
        .check_msg_sender({ value: wallet.address.toB256().replace('a', 'b') })
        .call();

      throw new Error('it should have thrown');
    } catch (error) {
      if (error instanceof ScriptResultDecoderError) {
        return expect(error).toBeTruthy();
      }

      throw error;
    }
  });
});