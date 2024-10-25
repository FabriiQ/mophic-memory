interface Mem0Payload {
    messages: Array<{
      role: string;
      content: string;
    }>;
    user_id?: string;
    agent_id?: string;
    output_format: string;
  }
  
  export async function saveMem0Memory(payload: Mem0Payload) {
    const response = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MEM0_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return response.json();
  }