export interface Conversation {
    id: string; // warto dodać id dla kluczy w React
    title: string;
    reviewStatus: 'pending' | 'reviewed' | 'approved';
    lastUpdatedTime: string;
  }

export interface GeminiResponse {
    conversations: Conversation[];
}