class fetchRequest {

  static getData = (url='', data={}) => {
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
    .then(response => response.json()).catch( e => { console.log(e) }) // parses response to JSON
  }

  static postData = (url='', data={}) => {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then((response) => {
        if(response.length <= 0)
          return []
        return response.json()
      }
    ).then( r => {
      if(typeof r.original !=='undefined')
        return r.original
      return r
    })
    .catch( e => { console.log(e) }) // parses response to JSON
  }

  static putData = (url='', data={}) => {
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
    })
    .then((response) => {
        if(response.length <= 0)
          return []
        return response.json()
      }
    ).then( r => {
      if(typeof r.original !=='undefined')
        return r.original
      return r
    })
    .catch( e => { console.log(e) }) // parses response to JSON
  }

  static deleteData = (url='', data={}) => {
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
    })
    .then((response) => {
        if(response.length <= 0)
          return []
        return response.json()
      }
    ).then( r => {
      if(typeof r.original !=='undefined')
        return r.original
      return r
    })
    .catch( e => { console.log(e) }) // parses response to JSON
  }

}

export default fetchRequest
