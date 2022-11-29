import crypto from 'crypto';

const iterations = 1500;
const keyLength = 64;
const digest = 'sha512'

export function encrypting(password: string, salt: string) {
    const passwordHash = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString(`hex`);
    return { passwordHash, salt }
}

export function createSalt() {
    return crypto.randomBytes(32).toString('hex');
}
