import { formatUserDetailsForPrompt } from "./FormatUserDetailsForPrompt";
import { getUserDetails } from "./GetUserDetails";



export async function generatePromptForDietPlan(userId: string, dietType: string, foodSelections: Record<string, boolean>) {
    const userDetails = await getUserDetails(userId);

    if (!userDetails) {
        throw new Error('User not found');
    }

    const userDetailsWithDate = {
        ...userDetails,
        dateOfBirth: new Date(userDetails.dateOfBirth),
    };

    const userDetailsFormatted = formatUserDetailsForPrompt(userDetailsWithDate);
  
    const prompt = `Crie uma dieta contendo 3 refeições: café da manhã, almoço e janta.
    Essas refeições só podem ter 1 prato cada.
    De acordo com os detalhes: (${userDetailsFormatted}), 
    gere um plano alimentar de acordo com a dieta: ${dietType} 
    com a seleção de alimentos: ${JSON.stringify(foodSelections)}.
    Por favor, formate a resposta como JSON, separando as refeições em café da manhã, almoço e janta.`;
  
    return prompt;
}  
