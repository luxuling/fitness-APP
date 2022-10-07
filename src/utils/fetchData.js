import axios from 'axios'

export const optionsRapid = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '48770c843cmshdca2289cc48f3c0p1576d3jsn91458f889214',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, option) => {
  const data = await axios.request(url, option)
  return data
}