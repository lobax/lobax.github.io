import crypto from 'crypto'; 
import fs from 'fs';

const privateKeyFile = process.env.PRIVATE_KEY_FILE || 
    console.log("PRIVATE_KEY_FILE not set!") && 
    process.exit(1);

const publicKeyFile = process.env.PUBLIC_KEY_FILE || 
    console.log("PUBLIC_KEY_FILE not set!") && 
    process.exit(1);

const privateKey = fs.readFileSync(privateKeyFile).toString('ascii');
const publicKey = fs.readFileSync(publicKeyFile).toString('ascii');

const signature = crypto.sign('RSA-SHA256', 'encoding_is_not_encryption', privateKey).toString("hex");

console.log(signature);

const verify = crypto.verify('RSA-SHA256', 'encoding_is_not_encryption', publicKey, Buffer.from(signature, "hex")); 
console.log("verify done", verify);



