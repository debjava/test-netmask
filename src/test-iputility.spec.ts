import { IPUtility } from "./IPUtility";

export class TestIPUtility {

    public testCase1(): void {
        const test = new IPUtility();
        let checkIP: string = "192.168.1.20"; // IP to check and generate the range of IP addresses
        let subnetMask: string = "128.0.0.0"; // Subnet Mask, you can also write "128.0.0.0/1"
        let totalIPs2Generate = 1024; // Total number of IPs to generate


        let flag: boolean = test.isIPInSubnetRange(checkIP, subnetMask);
        console.log("Is IP ", checkIP, "within the subnet mask ", subnetMask, " range? ", flag);

        let generatedIPs: string[] = test.getRangeOfIPAddress(checkIP, subnetMask, totalIPs2Generate);
        console.log("Total Number of IP generated: ", generatedIPs.length);
        console.log("************ Generated IPs ***********");
        for (let i = 0; i < generatedIPs.length; i++) {
            let generatedIP = "Generated IP " + "(" + i + ")" + ": " + generatedIPs[i];
            console.log(generatedIP);
        }
    }

    public testCase2(): void {
        const test = new IPUtility();
        // let checkIP: string = "255.255.255.225"; // IP to check and generate the range of IP addresses
        let checkIP: string = "192.168.1.20";
        let subnetMask: string = "255.255.255.224"; // Subnet Mask, you can also write "128.0.0.0/1"
        let totalIPs2Generate = 1024; // Total number of IPs to generate


        let flag: boolean = test.isIPInSubnetRange(checkIP, subnetMask);
        console.log("Is IP ", checkIP, "within the subnet mask ", subnetMask, " range? ", flag);

        let generatedIPs: string[] = test.getRangeOfIPAddress(checkIP, subnetMask, totalIPs2Generate);
        console.log("Total Number of IP generated: ", generatedIPs.length);
        console.log("************ Generated IPs ***********");
        for (let i = 0; i < generatedIPs.length; i++) {
            let generatedIP = "Generated IP " + "(" + i + ")" + ": " + generatedIPs[i];
            console.log(generatedIP);
        }
    }
    
     public testCase3(): void {
        const test = new IPUtility();
        // let checkIP: string = "255.255.255.225"; // IP to check and generate the range of IP addresses
        let checkIP: string = "255.255.255.254";
        let subnetMask: string = "255.255.255.254"; // Subnet Mask, you can also write "128.0.0.0/1"
        let totalIPs2Generate = 64; // Total number of IPs to generate


        let flag: boolean = test.isIPInSubnetRange(checkIP, subnetMask);
        console.log("Is IP ", checkIP, "within the subnet mask ", subnetMask, " range? ", flag);

        let generatedIPs: string[] = test.getRangeOfIPAddress(checkIP, subnetMask, totalIPs2Generate);
        console.log("Total Number of IP generated: ", generatedIPs.length);
        console.log("************ Generated IPs ***********");
        for (let i = 0; i < generatedIPs.length; i++) {
            let generatedIP = "Generated IP " + "(" + i + ")" + ": " + generatedIPs[i];
            console.log(generatedIP);
        }
    }
}