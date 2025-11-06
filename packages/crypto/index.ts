import nacl from 'tweetnacl';
export function generateKeypair() {
  const kp = nacl.sign.keyPair();
  return { publicKey: Buffer.from(kp.publicKey).toString('base64') };
}
