import { GoogleAuthProvider, User } from "firebase/auth"
import { atom } from "jotai"
import PasswordValidator from "password-validator"

export const provider = new GoogleAuthProvider()

export interface ToastInterface {
	message: string
	color: "success" | "danger" | "warning"
}

export const toastAtom = atom<ToastInterface | undefined>(undefined)

export const userAtom = atom<User | undefined | null>(undefined)

export const passwordSchema = new PasswordValidator()
	.is()
	.min(8)
	.is()
	.max(100)
	.has()
	.uppercase()
	.has()
	.lowercase()
	.has()
	.digits()
	.has()
	.not()
	.spaces()
