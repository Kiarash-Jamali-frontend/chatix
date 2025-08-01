# End-to-End Encryption Implementation

This document describes the end-to-end encryption implementation for text messages in the Chatix application.

## Overview

The encryption system provides end-to-end encryption for text messages in private chats between two users. Messages are encrypted on the client side before being sent to Firebase, and decrypted on the recipient's device.

## Features

- **End-to-End Encryption**: Text messages are encrypted using AES-GCM with a 256-bit key
- **Key Derivation**: Uses PBKDF2 with 100,000 iterations for secure key derivation
- **Shared Secrets**: Each chat pair has a unique shared secret derived from user emails
- **Transparent Operation**: Encryption works silently in the background with no UI indicators
- **Automatic Key Management**: Keys are stored locally and cleared on logout
- **Fallback Support**: Falls back to plain text if encryption fails

## Technical Implementation

### Encryption Algorithm
- **Algorithm**: AES-GCM (Galois/Counter Mode)
- **Key Size**: 256 bits
- **Key Derivation**: PBKDF2 with SHA-256
- **Salt**: 16-byte random salt per message
- **IV**: 12-byte random initialization vector per message

### Key Management
- **Shared Secret Generation**: Based on sorted user email addresses
- **Storage**: Local storage with automatic cleanup on logout
- **Scope**: Per-chat basis (each user pair has unique keys)

### Message Structure
Encrypted messages include:
```typescript
{
  encryptedContent: string;  // Base64 encoded encrypted content
  iv: string;               // Base64 encoded initialization vector
  salt: string;             // Hex encoded salt for key derivation
  isEncrypted: boolean;     // Flag indicating encryption status
  // ... other message fields
}
```

## Security Considerations

### Strengths
- **Client-side encryption**: Messages are encrypted before reaching the server
- **Unique keys per chat**: Each user pair has independent encryption
- **Secure key derivation**: Uses PBKDF2 with high iteration count
- **Random IVs**: Each message uses a unique initialization vector
- **Automatic key cleanup**: Keys are cleared on logout

### Limitations
- **Group chats**: Currently not encrypted (shows as "Group Chat" status)
- **Key persistence**: Keys are stored in localStorage (consider more secure storage for production)
- **Shared secret generation**: Uses simple hash function (consider more sophisticated key exchange)
- **No perfect forward secrecy**: Keys persist across sessions

## Usage

### For Users
1. **Private Chats**: Automatically encrypted with no visible indicators
2. **Group Chats**: Currently not encrypted
3. **Transparent Operation**: Users don't need to know about encryption - it just works

### For Developers
1. **Sending Messages**: Use `encryptMessage()` function for private chats
2. **Receiving Messages**: Use `decryptMessage()` function for encrypted messages
3. **Key Management**: Use `useEncryption()` hook for key operations

## Future Enhancements

1. **Group Chat Encryption**: Implement encryption for group messages
2. **Perfect Forward Secrecy**: Implement ephemeral keys
3. **Key Verification**: Add key verification mechanisms
4. **Secure Key Storage**: Implement more secure key storage (e.g., Web Crypto API key storage)
5. **Key Exchange**: Implement proper key exchange protocols
6. **Message Authentication**: Add message authentication codes

## Files Modified

- `src/utils/crypto.ts` - Core encryption utilities
- `src/hooks/useEncryption.ts` - Encryption key management hook
- `src/components/ChatInput.tsx` - Message encryption on send
- `src/components/Message/TextMessage.tsx` - Message decryption on display
- `src/components/Sidebar/Sidebar.tsx` - Key cleanup on logout
- `src/components/Sidebar/ChatListItem.tsx` - Last message decryption for preview

## Testing

To test the encryption:
1. Send a text message in a private chat
2. Verify the message displays normally (no encryption indicators)
3. Check that the message content is not visible in Firebase console
4. Verify decryption works on the recipient's device
5. Test logout and verify keys are cleared 