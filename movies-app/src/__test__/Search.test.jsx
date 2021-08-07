import Movies from '../components/Movies'
import { render, fireEvent } from '../setupTests'

let getByTestId
beforeEach(() => {
	const component = render(<Movies />)
	getByTestId = component.getByTestId
})

test('Title Check', () => {
	const titleEl = getByTestId('title')
	expect(titleEl.textContent).toBe('Movies App')
})

test('Sub Title Check', () => {
	const titleEl = getByTestId('subtitle')
	expect(titleEl.textContent).toBe('Search Title')
})

test('Input value is null', () => {
	const inputEl = getByTestId('input')
	expect(inputEl.value).toBe('')
})

test('Make sure input value changed', () => {
	const inputEl = getByTestId('input')

	fireEvent.change(inputEl, {
		target: { value: 'batman' },
	})
	expect(inputEl.value).toBe('batman')

	fireEvent.change(inputEl, {
		target: { value: 'KENSHIN' },
	})
	expect(inputEl.value).toBe('KENSHIN')

	fireEvent.change(inputEl, {
		target: { value: '&@!123' },
	})
	expect(inputEl.value).toBe('&@!123')
})
