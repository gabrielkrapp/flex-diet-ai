export const isFoodDisabled = (selectedDiet: string, food: string) => {
    if (selectedDiet === "vegana" && ["Aves", "Peixe", "Carne", "Leite", "Ovo"].includes(food)) {
      return true;
    }
    if (selectedDiet === "vegetariana" && ["Aves", "Peixe", "Carne"].includes(food)) {
      return true;
    }
    return false;
};
  