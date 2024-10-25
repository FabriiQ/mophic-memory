// route.ts for adding memories
export async function POST(request) {
    const authHeader = request.headers.get("authorization");
    const body = await request.json();
    
    return await fetch("https://api.mem0.ai/v1/memories/", {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });
  }
  
  // search.ts for searching memories
  export async function POST(request) {
    const authHeader = request.headers.get("authorization");
    const body = await request.json();
    
    return await fetch("https://api.mem0.ai/v1/memories/search/", {
      method: "POST", 
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  }