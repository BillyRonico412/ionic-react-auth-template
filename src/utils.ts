import { GoogleAuthProvider, User } from "firebase/auth"
import { atom } from "jotai"

export const provider = new GoogleAuthProvider()

export interface ToastInterface {
	message: string
	type: "success" | "danger" | "warning"
}

export const toastAtom = atom<ToastInterface | undefined>(undefined)

export const userAtom = atom<User | undefined | null>(undefined)
