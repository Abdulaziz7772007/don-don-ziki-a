import { aiChoose } from './ai-choose.js'
import { checkWinner } from './check-winner.js'
import { mode, modeChanger } from './constants.js'
import {
	aiChooseEl,
	handsEl,
	hideHandEl,
	modeChangeEl,
	returnGameEl,
	rulesBtnEl,
	showWinnerEl,
	ucerChooseEl,
} from './html-selection.js'
import { switchZone } from './switch-zone.js'

handsEl.forEach(el => {
	el.addEventListener('click', (e) => {
		const user = e.target.alt
		ucerChooseEl.src = e.target.src
		switchZone(true)

		setTimeout(() => {
			const ai = aiChoose(`${mode}`)

			showWinnerEl.classList.remove('hidden')
			aiChooseEl.src = `../images/${ai}.svg`

			const { result, winner } = checkWinner(ai, user)
			showWinnerEl.textContent = result

			// To‘g‘ri elementlardan foydalanish
			const targetEl =
				winner === 'user' ? ucerChooseEl : winner === 'ai' ? aiChooseEl : null
		}, 1000)
	})
})

returnGameEl.addEventListener("click" , () => {
	switchZone(false)
    aiChooseEl.src = `../images/hand-load.svg`
		showWinnerEl.classList.add('hidden')
})

modeChangeEl.addEventListener('click', () => {
	// console.log('1');
	if (mode === 'easy') {
		hideHandEl.forEach(el => {
			el.classList.remove('hidden')
		})
		rulesBtnEl.src = '../images/rules-pro.svg'
		modeChanger('hard')
		modeChangeEl.textContent = 'Hard mode'
	} else {
		hideHandEl.forEach(el => {
			el.classList.add('hidden')
		})

		modeChanger('easy')
		rulesBtnEl.src = '../images/rules.svg'

		modeChangeEl.textContent = 'Easy mode'
	}
})
