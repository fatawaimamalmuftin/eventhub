export default function UseGetItem(key, init) {
  const results = JSON.parse(localStorage.getItem(key)||init)
  return results  
}
