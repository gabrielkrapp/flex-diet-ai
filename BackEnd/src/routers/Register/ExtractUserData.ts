export async function extractUserData(body: any) {
    const {
      firstName,
      lastName,
      dateOfBirth,
      height,
      weight,
      email,
      password,
      biotipo,
      diabetes,
      lactose,
      gluten,
    } = body;
  
    if (!firstName || !lastName || !dateOfBirth || !height || !weight || !email || !password) {
      throw new Error("Missing required fields");
    }
  
    return {
      firstName,
      lastName,
      dateOfBirth,
      height,
      weight,
      email,
      password,
      biotipo: biotipo || null,
      diabetes: !!diabetes,
      lactose: !!lactose,
      gluten: !!gluten,
    };
}