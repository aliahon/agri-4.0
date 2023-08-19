export type SelectedProps = {
  id: string;
  img: string;
  name: string;
  desc: string;
  subItems: Array<{
    id: string;
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
    desc: React.ReactElement;
    imgUrl: string;
    devices?: Array<{
      id: string | number;
      title: string;
      image: string;
      description: string;
    }>;
  }>;
};
