import axios from 'axios';
import CircuitBreaker from 'opossum';

class ChatGptService {
  private circuitBreaker: CircuitBreaker;

  constructor() {
    this.circuitBreaker = new CircuitBreaker(this.callChatGptApi, {
      timeout: 10000,
      errorThresholdPercentage: 50,
      resetTimeout: 30000,
    });
  }

  private async callChatGptApi(prompt: string) {
    const response = await axios.post(`${process.env.OPENAI_API_URL}`, {
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      max_tokens: 200,
      temperature: 0.7
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return response.data;
  }

  public async generateDietPlan(prompt: string) {
    return this.circuitBreaker.fire(prompt);
  }
}

export const chatGptService = new ChatGptService();
