export const sendChatMessage = async (messages, rolePrompt = '') => {
  try {
    const response = await fetch('http://localhost:5001/api/cohere-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: messages.map(msg => ({
          from: msg.type === 'user' ? 'user' : 'assistant',
          text: msg.content
        })),
        rolePrompt
      })
    });

    if (!response.ok) {
      throw new Error('Cohere API request failed');
    }

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error('Error in Cohere API call:', error);
    throw error;
  }
};
