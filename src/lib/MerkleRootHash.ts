import * as hashJS from "hash.js";

export class HashBlock {
    private static hashString(data: string): string {
       return hashJS.sha256().update(data).digest('hex');
    }
    
    public static computeMerkleRootHash(txns: Array<string>): string {
        let hashedTxns = txns.map(txn => HashBlock.hashString(txn));
        
        while (hashedTxns.length > 1) {
            let trials: string[] = [];

            for (let i=0; i<hashedTxns.length; i+=2) {
                if (!hashedTxns[i + 1]) {
                    trials.push(HashBlock.hashString(hashedTxns[i] + hashedTxns[i]));
                } else {
                    trials.push(HashBlock.hashString(hashedTxns[i] + hashedTxns[i + 1]));
                }
            }

            hashedTxns = trials;
            trials = [];
        }
        
        return hashedTxns[0];
    }
}