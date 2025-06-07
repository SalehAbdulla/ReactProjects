type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoList = Info & {
  role: string;
  lastDateLogIn: Date;
};

export { type AdminInfoList, type Info };
