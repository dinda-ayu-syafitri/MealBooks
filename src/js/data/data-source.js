class DataSource {
  static searchMeal(keyword) {
    return fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=44ca2dc2498c455ebbb7c08181ba22ef&query=${keyword}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static getRecipe(id) {
    return fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=44ca2dc2498c455ebbb7c08181ba22ef&query`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        }
        return Promise.reject(`${id} is not found`);
      });
  }
}

export default DataSource;
