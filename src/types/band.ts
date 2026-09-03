export type Member = {
  id: number;
  name: string;
  image: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  members: Member[];
  recommended_songs: string[];
  image: string;
};