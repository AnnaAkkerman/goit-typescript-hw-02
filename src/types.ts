export type Photos = Photo[];

export type Photo = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description: string;
  likes: number;
};

export type ResponseType = {
  data: {
    results: Photos;
  };
};
