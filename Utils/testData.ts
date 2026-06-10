export const USERS = {
    admin: {
        valid: {
            email: 'techadmin@exmp.com',
            password: 'admin'
        },
        invalid: {
            email: 'wrong@random.com',
            password: 'wrongPwd'
        }
    }
}

const timeStamp = Date.now();
export const ASSET_CONSTANTS = {
    testData: {
        civil: {
            amcName: 'CIVIL',
            assetName: `Civil Asset ${timeStamp}`,
            sapId: `CIV-${timeStamp}`,
            model: 'Civil',
            location: 'Terminal 1',
            contract: 'Civil'
            // Add other CIVIL specific fields here
        },
        beumer: {
            amcName: 'Beumer',
            assetName: `BHS Asset ${timeStamp}`,
            sapId: `BHS-${timeStamp}`,
            model: 'Beumer',
            location: 'Terminal 3',
            contract: 'Beumer'
            // Add other Beumer specific fields here
        },
        fire: {
            amcName: 'Fire',
            assetName: `Fire Asset ${timeStamp}`,
            sapId: `FIR-${timeStamp}`,
            model: 'Fire Maintenance',
            location: 'Terminal 2',
            contract: 'Fire Maintenace'
            // Add other Fire specific fields here
        },
        // Helper function to generate unique IDs on the fly
        generateUniqueSapId: (prefix = 'SAP') => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    }
}