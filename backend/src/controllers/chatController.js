const {
  generateResponse,
  generateResponseStream,
} = require("../services/llmService");
const { saveChat } = require("../services/databaseService");

const handleChatRequest = async (req, res) => {
  const { message } = req.body;
  try {
    const response = await generateResponse(message);
    await saveChat(message, response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate response" });
  }
};

module.exports = { handleChatRequest };
