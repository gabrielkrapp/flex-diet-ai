export const prompt = (dietType: string, foodSelections: string) => {
    return `Generate a diet plan for diet type: ${dietType} with food selections: ${JSON.stringify(foodSelections)}.`;
} 