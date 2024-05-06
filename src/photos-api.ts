import axios from "axios";
import { ResponseType } from "./types";
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotosWithTopic = async (
  topic: string,
  page: number
): Promise<ResponseType> => {
  const response: ResponseType = await axios.get(
    `/search/photos?client_id=DQJPNRnR63DeOVQPqBKcOn0pz9BRaEy0qyue2b3e7G0&&page=${page}&per_page=12&query='${topic}'`
  );

  return response;
};
