const pre_URL = "https://config.epm-wb2c.projects.epam.com/api/v1/";
// const pre_URL = "http://10.72.64.109:8085/api/v1/";

class ReviewAPI {
  static getImage() {
    const url = pre_URL+'retrieve';
    return fetch(url, {
      method: 'GET'
    })
      .then((response) => response.text())
      .then((responseData) => {
        return JSON.parse(responseData)
      })
      .catch((error) => {console.error('error', error)
    });
  }

  static uploadReview(data) {
    let jsonData = JSON.stringify(data)
    const url = pre_URL+'evaluate';
    return fetch(url, {
      method: 'POST',
      headers:  {  
        'Content-Type': 'application/json; charset = utf-8'
      },
        body: jsonData
      })
      .then((response) => response.text())
      .then((responseData) => {
        return responseData
      })
      .catch((error) => {console.error('error', error)
    });
  }
}

module.exports = ReviewAPI;