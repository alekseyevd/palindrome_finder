class Http {
  get(url) {
    return sendRequest('GET', url)
  }

  post (url, data) {
    return sendRequest('POST', url, data)
  }
}

function sendRequest(method, url, data = {}) {
  switch (method) {
    case 'GET':
      return fetch(url, {method: 'GET'}).then(response => response.json())

    case 'POST':
      return fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
          ['Content-Type'] : 'application/json'
        }
    }).then(response => response.json())
  } 
}

export const http = new Http()