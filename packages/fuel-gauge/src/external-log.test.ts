import { getSetupContract } from './utils';

describe('External Log', () => {
  const setupContract = getSetupContract('external-log-1');
  const setupContractTwo = getSetupContract('external-log-2');

  it('should parse logs coming from external calls', async () => {
    const contract1 = await setupContract();
    const contract2 = await setupContractTwo({ cache: false });

    try {
      const { logs } = await contract1.functions
        .test_external_simple_log(contract2.id)
        .addContracts([contract2.id])
        .call();

      expect(logs).toBeTruthy();
      expect(logs[0]).toEqual('Hello world');
    } catch (err) {
      expect(err).toBeFalsy();
    }
  });
});
