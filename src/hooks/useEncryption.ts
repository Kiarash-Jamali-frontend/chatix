import { useState, useEffect, useCallback } from 'react';
import { createSharedSecret } from '../utils/crypto';

interface ChatSecret {
  [chatId: string]: string;
}

export const useEncryption = () => {
  const [chatSecrets, setChatSecrets] = useState<ChatSecret>({});

  // Load chat secrets from localStorage on mount
  useEffect(() => {
    const savedSecrets = localStorage.getItem('chatix_chat_secrets');
    if (savedSecrets) {
      try {
        setChatSecrets(JSON.parse(savedSecrets));
      } catch (error) {
        console.error('Failed to load chat secrets:', error);
      }
    }
  }, []);

  // Save chat secrets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatix_chat_secrets', JSON.stringify(chatSecrets));
  }, [chatSecrets]);

  // Get or create a shared secret for a chat between two users
  const getChatSecret = useCallback((user1Email: string, user2Email: string): string => {
    // Create a consistent chat ID by sorting emails
    const sortedEmails = [user1Email, user2Email].sort();
    const chatId = sortedEmails.join('|');
    
    // If we already have a secret for this chat, return it
    if (chatSecrets[chatId]) {
      return chatSecrets[chatId];
    }
    
    // Create a new shared secret
    const newSecret = createSharedSecret(user1Email, user2Email);
    
    // Store the new secret
    setChatSecrets(prev => ({
      ...prev,
      [chatId]: newSecret
    }));
    
    return newSecret;
  }, [chatSecrets]);

  // Get chat ID for a pair of users
  const getChatId = useCallback((user1Email: string, user2Email: string): string => {
    const sortedEmails = [user1Email, user2Email].sort();
    return sortedEmails.join('|');
  }, []);

  // Clear all chat secrets (useful for logout)
  const clearAllSecrets = useCallback(() => {
    setChatSecrets({});
    localStorage.removeItem('chatix_chat_secrets');
  }, []);

  return {
    getChatSecret,
    getChatId,
    clearAllSecrets,
    chatSecrets
  };
}; 