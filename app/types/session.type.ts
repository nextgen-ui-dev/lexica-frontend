export type Session = {
    user: User;
    expires: string;
    access_token: string;
  }
  
  export type User = {
    name: string;
    email: string;
    image: string;
  }
  