import { create } from 'zustand';

import { User } from '../types/session.type';

interface FindFriendsStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  returnedUsers: User[];
  setReturnedUsers: (users: User[]) => void;
}

const useFindFriends = create<FindFriendsStore>(set => ({
  searchQuery: '',
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
  returnedUsers: [],
  setReturnedUsers: (users: User[]) => {
    set({ returnedUsers: users });
  },
}));

export default useFindFriends;
