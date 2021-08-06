// place your own credentials here for a vCenter or ESXi server
// this information will be used for connecting to a vCenter instance
// for module testing
// name the file config-test.js

var vCenterTestCreds = {
	'vCenterIP' : 'Ip address',
	'vCenterUser' : 'root',
	'vCenterPassword' : 'password',
	'vCenter' : true
};
exports.vCenterTestCreds = vCenterTestCreds;

var vCenterTestVars = {
  testVMs: {

    testVMLinux: 'test-centos-1',
    testVMWindows: 'test-win2k12-1'
  }
};
exports.vCenterTestVars = vCenterTestVars;