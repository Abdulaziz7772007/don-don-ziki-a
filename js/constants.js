import { zoneGridEl } from './html-selection.js'

export const {paper, spock, lizard, scissors, rock } = {
	rock: 'rock',
	scissors: 'scissors',
	paper: 'paper',
	spock: 'spock',
	lizard: 'lizard',
}
export const hands = [paper, scissors, rock, lizard, spock]

export let mode = zoneGridEl.dataset.mode
export function modeChanger(value) {
	mode = value
	zoneGridEl.dataset.mode = value
}
