import { DietData } from "../interfaces/DietData";
import { Meals, MealKeys } from "../interfaces/Meals";

function parseDietPlanFromResponse(chatGptResponse: any): Meals {
    const textResponse: string = chatGptResponse.choices[0].text.trim();
    const dietData: DietData = JSON.parse(textResponse);
  
    const mealKeys: MealKeys = {
      breakfast: ["café da manhã", "Café da manhã", "cafe_da_manha", "breakfast"],
      lunch: ["almoço", "Almoço", "almoco", "lunch"],
      dinner: ["janta", "Janta", "jantar", "dinner", "supper"],
    };
  
    const meals: Meals = {
      breakfast: '',
      lunch: '',
      dinner: '',
    };
  
    Object.keys(mealKeys).forEach((meal) => {
        mealKeys[meal].forEach((key) => {
          if (dietData[key]) {
            const mealData = dietData[key];
            if (typeof mealData === 'string') {
              meals[meal as keyof Meals] = mealData;
            } else if (mealData && 'prato' in mealData) {
              meals[meal as keyof Meals] = mealData.prato || '';
            }
          }
        });
    });
  
    return meals;
}  