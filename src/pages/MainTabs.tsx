import {
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from "@ionic/react"
import { cog, gameController } from "ionicons/icons"
import { Redirect, Route } from "react-router"
import Game from "./app/Game"
import Settings from "./app/Settings"

const MainTabs = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Redirect exact path="/app" to="/app/game" />
				<Route exact path="/app/game" render={() => <Game />} />
				<Route exact path="/app/settings" render={() => <Settings />} />
			</IonRouterOutlet>
			<IonTabBar slot="bottom">
				<IonTabButton tab="game" href="/app/game">
					<IonIcon aria-hidden="true" icon={gameController} />
					<IonLabel>Game</IonLabel>
				</IonTabButton>
				<IonTabButton tab="settings" href="/app/settings">
					<IonIcon aria-hidden="true" icon={cog} />
					<IonLabel>Settings</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	)
}

export default MainTabs
