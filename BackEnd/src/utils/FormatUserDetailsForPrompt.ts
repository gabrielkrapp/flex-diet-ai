export function formatUserDetailsForPrompt(userDetails: {
    dateOfBirth: Date;
    weight: number;
    biotipo: string;
    diabetes: boolean;
    lactose: boolean;
    gluten: boolean;
  }) {
    const age = new Date().getFullYear() - userDetails.dateOfBirth.getFullYear();
  
    const healthConditions = [
      userDetails.diabetes ? 'diabetes' : '',
      userDetails.lactose ? 'intolerância a lactose' : '',
      userDetails.gluten ? 'intolerância ao gluten' : '',
    ].filter(Boolean).join(', ');
  
    return `Idade: ${age}, Peso: ${userDetails.weight}, Biotipo: ${userDetails.biotipo}, ${healthConditions ? `Condições de saúde: ${healthConditions}` : ''}`;
  }
  