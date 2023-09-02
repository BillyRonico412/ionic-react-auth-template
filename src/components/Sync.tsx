import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useSetAtom } from "jotai"
import { useEffect } from "react"
import { userAtom } from "../utils"

const Sync = () => {
	const setUser = useSetAtom(userAtom)
	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, (user) => {
			setUser(user)
		})
	}, [setUser])
	return <></>
}

export default Sync
