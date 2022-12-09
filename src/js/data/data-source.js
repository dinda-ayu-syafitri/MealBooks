class DataSource {
  static searchMeal(keyword) {
    return fetch(
      ` https://api.spoonacular.com/recipes/complexSearch?apiKey=e5561e8d361742d2a9cdb94e28a7df5c&query=${keyword}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static getRecipe(id) {
    return fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=e5561e8d361742d2a9cdb94e28a7df5c&query`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${id} is not found`);
        }
      });
  }
}

export default DataSource;
