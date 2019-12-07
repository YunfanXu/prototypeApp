const pre_URL = "http://10.72.64.109:8085/api/v1/";

class Product {
  static uploadImage(imgUri) {
    const url = pre_URL+'upload';
    let uri = imgUri;
    let formData = new FormData();
    let file = { uri, type: 'multipart/form-data', name: 'image.jpg' };
    formData.append("file", file);
    return fetch(url, {
      method: 'POST',
      headers:  {  
        'Content-Type': 'multipart/form-data; charset = utf-8'
      },
        body: formData
      })
      .then((response) => response.text())
      .then((responseData) => {
        return JSON.parse(responseData)
      })
      .catch((error) => {console.error('error', error)
    });
  }

  static imageEvaluate(data) {
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

module.exports = Product;