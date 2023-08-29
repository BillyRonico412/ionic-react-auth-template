import {
	IonButton,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { logoGoogle } from "ionicons/icons"
import { useSetAtom } from "jotai"
import { tryit } from "radash"
import { useCallback } from "react"
import { provider, toastAtom, userAtom } from "../utils"

const Login = () => {
	const setToast = useSetAtom(toastAtom)
	const setUser = useSetAtom(userAtom)
	const onClickConnect = useCallback(async () => {
		const auth = getAuth()
		const [errResultSignIn, resultSignIn] = await tryit(signInWithPopup)(
			auth,
			provider,
		)
		if (errResultSignIn) {
			setToast({
				type: "danger",
				message: errResultSignIn.message,
			})
			return
		}
		const credential = GoogleAuthProvider.credentialFromResult(resultSignIn)
		if (!credential) {
			setToast({
				type: "danger",
				message: "Credential is null",
			})
			return
		}
		const user = resultSignIn.user
		setUser(user)
		setToast({
			type: "success",
			message: "Vous êtes connecté",
		})
	}, [setUser, setToast])
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<div className="w-full h-full px-4 py-8 flex flex-col justify-center">
					<IonButton onClick={onClickConnect}>
						Se connecter avec Google
						<IonIcon aria-hidden="true" icon={logoGoogle} className="ml-2" />
					</IonButton>
				</div>
			</IonContent>
		</IonPage>
	)
}

export default Login
