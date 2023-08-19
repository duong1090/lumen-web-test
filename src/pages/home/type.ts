export type ListProps = {
  title: string;
  data: ListData[];
};

export type ListData = {
  name: string;
  description: string;
  coin: number;
  thumbnail: string;
};
