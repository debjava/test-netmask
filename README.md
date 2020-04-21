# Check IP Address with Subnetmask using Node

This is an example project which performs the followings

* Check whether a particular IP address is in a subnet mask range
* Generate a range of IP address from an initial IP address, subnetmask and range

# How to run

Use the following command to test.

`yarn install && yarn build && yarn start`

# Technicalities
Refer to the class `IPUtility.ts`

Refer to the script docs for the following.

`isIPInSubnetRange(ipAddress: string, subnetMask: string)`

The above method provides the information in boolean type whether IP address is in subnet mask range or not.

`getRangeOfIPAddress(initialIPAddress: string, subnetMask: string, range: number)`

The above method provides an array of IP addresses for a range with initial IP address, subnet mask and the number of IP addresses to generate.

# Comments
Since I am not using Karma/Jasmine for test framework, you can refer to the class `test-iputility.spec.ts` for various test cases.

# Author
Debadatta Mishra