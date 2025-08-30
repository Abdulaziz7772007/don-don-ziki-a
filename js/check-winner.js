import { scoreEl } from './html-selection'

let score = 0
export function checkWinner(ai, ucer) {
	if (ai == ucer) {
		return { result: 'draw', winner: 'draw' }
	}
	aiWins =
		(ai === rock && (user === scissors || user === lizard)) ||
		(ai === scissors && (user === paper || user === lizard)) ||
		(ai === paper && (user === rock || user === spock)) ||
		(ai === lizard && (user === spock || user === paper)) ||
		(ai === spock && (user === scissors || user === rock))
	if (aiWins) {
		if (score > 0) {
			score--
		}
		scoreEl.textContent = score
		return { result: 'AI wins', winner: 'ai' }
	} else {
		score ++ 
		scoreEl.textContent = score
		return { result : 'Ucer wins', winner: 'ucer'}
	}
}
