export interface IJourney {
  id: number;
  image: string[];
  user: IUser;
  userId: number;
  title: string;
  createdAt: date;
  description: string;
}

export interface IRegister {
  email: string;
  fullname: string;
  password: string;
  phone: string;
}

export interface IUser {
  id: number;
  fullname: string;
  email: string;
}

export interface IProfile {
  id: number;
  user: IUser;
  avatar: string;
}
