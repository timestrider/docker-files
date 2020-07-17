class fetchRequest {

  static parseJSON(response) {
    // console.log(response)
    return response.json()
  }

  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      let error = new Error(response.status +'.'+ response.statusText)
      error.response = response
      throw error
    }
  }

  static handleErrors(error) {
      console.log('request failed', error)
  }


  static get = (url='', data={}) => {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, same-origin, *omit
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(this.checkStatus).then(this.parseJSON).catch(this.handleErrors)
  }

  static post = (url='', data={}) => {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(this.checkStatus).then(this.parseJSON).catch(this.handleErrors)
  }

  static put = (url='', data={}) => {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    }).then(this.checkStatus).then(this.parseJSON).catch(this.handleErrors)
  }

  static delete = (url='', data={}) => {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    }).then(this.checkStatus).then(this.parseJSON).catch(this.handleErrors)
  }

}

export default fetchRequest
