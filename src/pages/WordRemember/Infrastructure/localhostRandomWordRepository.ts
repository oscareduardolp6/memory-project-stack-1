import { resolve } from "../../../Utils/Promise";
import { GetRandomWord } from "../Domain/RandomWordRepository";

export const getRandomWord: GetRandomWord = async (num = 0) => {
  let url = 'https://random-spanish-words.onrender.com/'
  if(num > 1) url += `?num=${num}`
  const [response, error] = await resolve(fetch(url))
  if(error) return [[], error]
  const [words, jsonError] = await resolve(response.json())
  if(jsonError) {
    alert(jsonError.message)
    return [null, jsonError]
  }
  return [words, null] as [string[], null]
}