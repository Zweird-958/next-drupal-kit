import axios from "axios"

type Response<T> = {
  data: T
}

const getObject = async <T>(name: string) => {
  try {
    const result = await axios.get<Response<T[]>>(
      `${process.env.BACKEND_URL}/jsonapi/node/${name}`,
    )

    return result.data.data
  } catch (error) {
    return null
  }
}

export default getObject
