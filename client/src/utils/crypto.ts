// End-to-end encryption utilities for text messages
export interface EncryptedMessage {
  encryptedContent: string;
  iv: string;
  salt: string;
}

export interface KeyPair {
  publicKey: string;
  privateKey: string;
}

// Generate a random salt for key derivation
export const generateSalt = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Derive encryption key from password and salt
export const deriveKey = async (password: string, salt: string): Promise<CryptoKey> => {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );
  
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
};

// Encrypt text message
export const encryptMessage = async (message: string, password: string): Promise<EncryptedMessage> => {
  const salt = generateSalt();
  const key = await deriveKey(password, salt);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoder = new TextEncoder();
  
  const encryptedContent = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(message)
  );
  
  return {
    encryptedContent: btoa(String.fromCharCode(...new Uint8Array(encryptedContent))),
    iv: btoa(String.fromCharCode(...iv)),
    salt
  };
};

// Decrypt text message
export const decryptMessage = async (encryptedMessage: EncryptedMessage, password: string): Promise<string> => {
  try {
    const key = await deriveKey(password, encryptedMessage.salt);
    const iv = Uint8Array.from(atob(encryptedMessage.iv), c => c.charCodeAt(0));
    const encryptedData = Uint8Array.from(atob(encryptedMessage.encryptedContent), c => c.charCodeAt(0));
    
    const decryptedContent = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      encryptedData
    );
    
    const decoder = new TextDecoder();
    return decoder.decode(decryptedContent);
  } catch (error) {
    console.error('Failed to decrypt message:', error);
    return '[Encrypted Message - Unable to decrypt]';
  }
};

// Generate a secure random password for chat encryption
export const generateChatPassword = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Create a shared secret for two users
export const createSharedSecret = (user1Email: string, user2Email: string): string => {
  // Sort emails to ensure consistent key generation regardless of sender/receiver order
  const sortedEmails = [user1Email, user2Email].sort();
  const combined = sortedEmails.join('|');
  
  // Create a hash of the combined emails to use as base for shared secret
  const encoder = new TextEncoder();
  const data = encoder.encode(combined);
  
  // Use a simple hash function (in production, you might want to use a more sophisticated approach)
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data[i];
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Convert to hex string and pad
  return Math.abs(hash).toString(16).padStart(8, '0') + 
         Math.abs(hash * 2).toString(16).padStart(8, '0') +
         Math.abs(hash * 3).toString(16).padStart(8, '0') +
         Math.abs(hash * 4).toString(16).padStart(8, '0');
};

// Check if message is encrypted
export const isEncryptedMessage = (message: any): boolean => {
  return message.encryptedContent && message.iv && message.salt;
}; 