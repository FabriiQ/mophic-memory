import { CoreMessage } from 'ai';
import { memoryManager as importedMemoryManager } from '@/lib/agents/memory-manager';

export async function localMemoryManager(messages: CoreMessage[], userId?: string, agentId?: string) {
  const apiKey = process.env.MEM0_API_KEY;
  
  async function addMemory(content: string) {
    const memory: Mem0Payload = {
      infer: true,
      user_id: userId || '',
      messages: [{
        role: 'user',
        content: content
      }],
      project_name: 'morphic',
      output_format: 'v1.1'
    };

    await fetch('/api/add', {
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
      agent_id: agentId,
      project_name: 'morphic'
    };

    const response = await fetch('/api/search', {
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

interface Mem0Payload {
  infer: boolean;
  user_id: string;
  messages: Array<{
    role: string;
    content: string;
  }>;
  project_name: string;
  output_format: string;
}