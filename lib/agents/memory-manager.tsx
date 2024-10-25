import { CoreMessage } from 'ai';

export const createMemoryManager = async (messages: CoreMessage[], userId?: string, agentId?: string) => {
  const apiKey = process.env.MEM0_API_KEY;
// Rename the function to createMemoryManager
export async function createMemoryManager(messages: CoreMessage[], userId?: string, agentId?: string) {
  const apiKey = process.env.MEM0_API_KEY;
  
  async function addMemory(content: string) {
    const memory = {
      content,
      user_id: userId,
      agent_id: agentId
    };

    await fetch('/api/mem0', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memory)
    });
  }

  async function searchMemories(query: string) {
    const searchBody = {
      query,
      user_id: userId,
      agent_id: agentId
    };

    const response = await fetch('/api/mem0/search', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchBody)
    });

    return response.json();
  }

  return {
    addMemory,
    searchMemories
  };
}