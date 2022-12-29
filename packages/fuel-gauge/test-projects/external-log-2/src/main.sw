contract;

use std::logging::log;

use external_log_2_abi::ExternalLog2;

impl ExternalLog2 for Contract {
  fn simple_log () {
    log("Hello world");
  }
}
