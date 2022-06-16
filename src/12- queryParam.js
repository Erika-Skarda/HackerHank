function getQueryString(url, param) {

  let parts = url.split("?")
  let queries
  let data = {}
  if(url.includes("&")) {
    queries = parts[1].split("&")
  } else {
    queries = parts[1]
  }
  
  queries.forEach(function(parte) {
    let keyValue = parte.split("=")
    let key = keyValue[0]
    let value = keyValue[1]
    data[key] = value
  })
  
  const keys = Object.keys(data)

  let p = keys.find(q => q === param)
  
  if(p) return data[p]
  else return "Não existe"

}

console.log(getQueryString("https://www.meli.com.br?company=meli&page=home", "company"))