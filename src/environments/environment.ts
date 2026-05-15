/** Desarrollo local: usa el proxy de `ng serve` → json-server en puerto 3000 */
export const environment = {
  production: false,
  platformProviderApiBaseUrl: '/api/v1',
  platformProviderCategoriesEndpointPath: '/categories',
  platformProviderIngredientsEndpointPath: '/ingredients',
  platformProviderRecipesEndpointPath: '/recipes',
  platformProviderTypesEndpointPath: '/recipeTypes',
  platformProviderNutrientsEndpointPath: '/macronutrientValues',
  platformProviderIngredientQuantitiesEndpointPath: '/ingredientQuantities',
  logoProviderApiBaseUrl: 'https://logo.clearbit.com/',
};
