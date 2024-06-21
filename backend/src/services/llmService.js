const axios = require('axios');

const generateResponse = async (message) => {
  try {
    const response = await axios.post('LLM_API_ENDPOINT', {
      prompt: message,
      // Add any required parameters for the API
    });
    return response.data;
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
};

module.exports = { generateResponse };
