import { chooseZoneEl, winnerZoneEl } from './html-selection.js'

export function switchZone(boolean) {
	if (boolean) {
		chooseZoneEl.classList.add('hidden')
		winnerZoneEl.classList.remove('hidden')
	} else {
		chooseZoneEl.classList.remove('hidden')
		winnerZoneEl.classList.add('hidden')
	}
}