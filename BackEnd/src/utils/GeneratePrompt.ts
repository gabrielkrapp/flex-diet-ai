import { formatUserDetailsForPrompt } from "./formatUserDetailsForPrompt";
import { getUserDetails } from "./getUserDetails";


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
  
    const prompt = `Given the user details (${userDetailsFormatted}), generate a diet plan for diet type: ${dietType} with food selections: ${JSON.stringify(foodSelections)}.`;
  
    return prompt;
}  
