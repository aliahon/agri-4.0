export type SelectedProps = {
  id: string;
  img: string;
  name: string;
  desc: string;
  subItems: Array<{
    icon: any;
    name: string;
  }>;
};

export type SolutionsDetailsProps = {
  id: string;
  name: string;
  desc: React.ReactElement;
  imgUrl: string;
  services: Array<{
    id: string | number;
    name: string;
    desc: string;
    imgUrl: string;
    devices?: Array<{
      id: string | number;
      name: string;
      imgUrl: string;
    }>;
  }>;
};
