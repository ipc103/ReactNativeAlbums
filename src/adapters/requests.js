export function get(url)  {
  return fetch(url).then(res => res.json())
}

export function post(url, data){
  return sendRequest(url, 'POST', data)
}

export function put(url, data){
  return sendRequest(url, 'PUT', data)
}

export function patch(url, data){
  return sendRequest(url, 'PATCH', data)
}

export function destroy(url){
  return sendRequest(url, 'DELETE')
}

function sendRequest(url, method, data={}){
  return fetch(url, {method: method, headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json())
}
