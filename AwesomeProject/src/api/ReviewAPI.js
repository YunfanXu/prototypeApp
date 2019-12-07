const pre_URL = "http://10.72.64.109:8085/api/v1/";

class ReviewAPI {
  static getImage(imgUri) {
    const url = pre_URL+'retrieve';
    return fetch(url, {
      method: 'GET',
      headers:  {  
        'Content-Type': 'application/json; charset = utf-8'
      },
        body: {}
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