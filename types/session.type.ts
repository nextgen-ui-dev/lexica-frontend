export type Session = {
  user?: User;
  expires?: string;
  access_token?: string;
}

export type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}
