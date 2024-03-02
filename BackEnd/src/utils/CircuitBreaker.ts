import CircuitBreaker from 'opossum';

export class GenericCircuitBreaker {
  private static instance: GenericCircuitBreaker;
  private circuit: CircuitBreaker;

  private constructor() {
    this.circuit = new CircuitBreaker(async (fn: () => Promise<any>) => await fn(), {
      timeout: 10000,
      errorThresholdPercentage: 50,
      resetTimeout: 30000,
    });
  }

  public static getInstance(): GenericCircuitBreaker {
    if (!GenericCircuitBreaker.instance) {
      GenericCircuitBreaker.instance = new GenericCircuitBreaker();
    }
    return GenericCircuitBreaker.instance;
  }

  public async execute(fn: () => Promise<any>) {
    return this.circuit.fire(fn);
  }
}
