// migrations/2_deploy_Assist.js
const Assist = artifacts.require('Assist');

module.exports =  function (deployer) {
  deployer.deploy(Assist,'0xb05cB2b95e40A88661646AE64fa4C2B0B6233611');
};

