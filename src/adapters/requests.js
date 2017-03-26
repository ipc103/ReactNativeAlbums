export function get(url)  {
  return fetch(url).then(res => res.json())
}

export function post(url, data){
  return sendRequest(url, 'POST', data).then(res => res.json())
}

export function put(url, data){
  return sendRequest(url, 'PUT', data).then(res => res.json())
}

export function patch(url, data){
  return sendRequest(url, 'PATCH', data).then(res => res.json())
}

export function delete(url){
  return sendRequest(url, 'DELETE', {}).then(res => res.json())
}

function sendRequest(url, method, data){
  return fetch(url, {method: method, headers: {'Content-Type': 'application/json'}}, body: JSON.stringify(data))
}
