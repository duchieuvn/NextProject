interface UserModel {
  name: string;
  email: string;
  type: "USER" | "ADMIN";
  phone: string;
  age: number;
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

interface UserListResponseItem
  extends Pick<UserModel, "name" | "email" | "age" | "address"> {}

interface UserAllInfoButType extends Omit<UserModel, "type"> {}

interface UserInformationWithIsVerified extends UserModel {
  isVerified: boolean;
}
