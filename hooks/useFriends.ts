import { create } from "zustand";

import { User } from "@/types/session";
import { FriendsConstants } from "@/constants/friends.constants";

interface FriendsStore {
  friendsCount: number;
  friends: User[];
  addFriends: (friend: User) => void;
  removeFriends: (email: string) => void;
  isFriend: (email: string) => boolean;
}

const useFriends = create<FriendsStore>((set) => ({
  friends: FriendsConstants,
  friendsCount: FriendsConstants.length,
  addFriends: (friend: User) => {
    set((state) => {
      const newFriends: User[] = [...state.friends, friend];

      localStorage.setItem("lexicaFriends", JSON.stringify(newFriends));

      return {
        friends: newFriends,
        friendsCount: newFriends.length,
      };
    });
  },
  removeFriends: (email: string) => {
    set((state) => {
      const newFriends: User[] = state.friends.filter(
        (friend) => friend.email !== email,
      );

      localStorage.setItem("lexicaFriends", JSON.stringify(newFriends));

      return {
        friends: newFriends,
        friendsCount: newFriends.length,
      };
    });
  },
  isFriend: (email: string) => {
    const friends: User[] = JSON.parse(
      localStorage.getItem("lexicaFriends") || "[]",
    );

    return friends.some((friend) => friend.email === email);
  },
}));

export default useFriends;
