import axios from 'axios';
import { GenericCircuitBreaker } from '../utils/CircuitBreaker';

export class ChatGptService {
  private circuitBreaker: GenericCircuitBreaker;

  constructor() {
    this.circuitBreaker = GenericCircuitBreaker.getInstance();
  }

  public async generateDietPlan(prompt: string): Promise<any> {
    const fn = () => axios.post(`${process.env.OPENAI_API_URL}`, {
      model: "gpt-3.5-turbo-instruct",
      prompt,
      max_tokens: 200,
      temperature: 0.7
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    }).then(res => res.data);
    
    return this.circuitBreaker.execute(fn);
  }
}