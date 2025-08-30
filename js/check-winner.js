import { lizard, paper, rock, scissors, spock } from './constants.js'
import { scoreEl } from './html-selection.js'

let score = 0
export function checkWinner(ai, ucer) {
	if (ai == ucer) {
		return { result: 'draw', winner: 'draw' }
	}
	const aiWins =
		(ai === rock && (ucer === scissors || ucer === lizard)) ||
		(ai === scissors && (ucer === paper || ucer === lizard)) ||
		(ai === paper && (ucer === rock || ucer === spock)) ||
		(ai === lizard && (ucer === spock || ucer === paper)) ||
		(ai === spock && (ucer === scissors || ucer === rock))
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
