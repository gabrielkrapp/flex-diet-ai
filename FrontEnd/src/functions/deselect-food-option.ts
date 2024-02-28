interface FoodSelections {
    [key: string]: boolean;
}

export const deselectFoodOption = (selectedDiet: string, currentSelections: FoodSelections): FoodSelections => {
    const newSelections = { ...currentSelections };
    
    if (selectedDiet === "vegana") {
      Object.keys(newSelections).forEach(food => {
        if (["Aves", "Peixe", "Carne", "Leite", "Ovo"].includes(food)) {
          newSelections[food] = false;
        }
      });
    } else if (selectedDiet === "vegetariana") {
      Object.keys(newSelections).forEach(food => {
        if (["Aves", "Peixe", "Carne"].includes(food)) {
          newSelections[food] = false;
        }
      });
    }
    
    return newSelections;
};
  