interface IMembers {
  name: string;
  picture: string;
  linkedIn: string;
}

export interface RoleProps {
  role: string;
  members: IMembers[];
}
