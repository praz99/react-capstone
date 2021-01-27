const CATEGORIES = ['Cocktail', 'Shot', 'Ordinary Drink', 'Punch / Party Drink'];

const selectCategories = CATEGORIES.map(category => (
  <option key={category} value={category}>{category}</option>
));

export default selectCategories;