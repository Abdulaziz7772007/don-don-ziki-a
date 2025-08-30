import { hands } from './constants.js'
import { modeChangeEl } from './html-selection.js'



export function aiChoose(level = 'easy') {
	const hard = 5
	const easy = 3
	const n = level =='easy' ? easy : hard
	const randomHand = Math.floor(Math.random*n)

	const ai = hands[randomHand]
}