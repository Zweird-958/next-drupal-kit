import axios from "axios"

type Response<T> = {
  data: T
}

const getSingleObject = async <T>(name: string, id: string) => {
  try {
    const result = await axios.get<Response<T>>(
      `${process.env.BACKEND_URL}/jsonapi/node/${name}/${id}`,
    )

    return result.data.data
  } catch (error) {
    return null
  }
}

export default getSingleObject
