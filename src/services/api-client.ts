import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1818a0586ce94e92b6278bed005db175',
  },
})
