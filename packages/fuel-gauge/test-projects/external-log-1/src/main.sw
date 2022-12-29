contract;

use std::logging::log;

use external_log_2_abi::ExternalLog2;

abi ExternalLog1 {
  fn test_external_simple_log(contract_id: b256);
}

impl ExternalLog1 for Contract {
  fn test_external_simple_log(contract_id: b256) {
    let external_contract = abi(ExternalLog2, contract_id);
    external_contract.simple_log();
  }
}
