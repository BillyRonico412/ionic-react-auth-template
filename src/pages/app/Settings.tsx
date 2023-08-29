import {
	IonButton,
	IonContent,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react"
import { getAuth, signOut } from "firebase/auth"
import { useSetAtom } from "jotai"
import { tryit } from "radash"
import { useCallback } from "react"
import { toastAtom } from "../../utils"

const Settings = () => {
	const setToast = useSetAtom(toastAtom)
	const onClickDisconnect = useCallback(async () => {
		const auth = getAuth()
		const [errSignOut] = await tryit(signOut)(auth)
		if (errSignOut) {
			setToast({
				type: "danger",
				message: errSignOut.message,
			})
			return
		}
		setToast({
			type: "success",
			message: "Vous êtes déconnecté",
		})
	}, [setToast])
	return (
		<IonPage>
			<IonToolbar>
				<IonTitle>Settings</IonTitle>
			</IonToolbar>
			<IonContent fullscreen>
				<div className="w-full h-full px-4 py-8 flex flex-col justify-center">
					<IonButton onClick={onClickDisconnect}>Deconnexion</IonButton>
				</div>
			</IonContent>
		</IonPage>
	)
}

export default Settings
