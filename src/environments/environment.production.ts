/**
 * Producción: sustituye la URL por la de tu API publicada.
 * Ejemplos:
 *   - API en Render/Railway: 'https://bitewise-api.onrender.com/api/v1'
 *   - Mismo dominio con proxy nginx: '/api/v1'
 */
export const environment = {
  production: true,
  platformProviderApiBaseUrl: '/api/v1',
  platformProviderCategoriesEndpointPath: '/categories',
  platformProviderIngredientsEndpointPath: '/ingredients',
  platformProviderRecipesEndpointPath: '/recipes',
  platformProviderTypesEndpointPath: '/recipeTypes',
  platformProviderNutrientsEndpointPath: '/macronutrientValues',
  platformProviderIngredientQuantitiesEndpointPath: '/ingredientQuantities',
  logoProviderApiBaseUrl: 'https://logo.clearbit.com/',
};
