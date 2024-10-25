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
  
  export async function saveMem0Memory(payload: Mem0Payload) {
    const response = await fetch('https://api.mem0.ai/v1/memories', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MEM0_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    return response.json();
  }