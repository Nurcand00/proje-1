import { create } from "zustand/react";

interface State {
	loggedIn: boolean;
	setLoggedIn: (loggedIn: boolean) => void;
}

const useStore = create<State>((set) => ({
	loggedIn: false,
	setLoggedIn(loggedIn) {
		set({ loggedIn });
	},
}));

export default useStore;
