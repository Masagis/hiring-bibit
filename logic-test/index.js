const arrayString = ['kita', 'atik', 'tika', 'aku', 'makan', 'kia', 'kua']

function handleAnagram(inputArray) {
	const anagramList = []
	if (inputArray.length > 0) {
		inputArray.forEach((items) => {
			const anaSorted = items.split('').sort().join('')
			if (!anagramList[anaSorted]) {
				anagramList[anaSorted] = [items]
			} else {
				anagramList[anaSorted].push(items)
			}
		})
		return Object.values(anagramList)
	} else {
		return 'anagram undefined'
	}
}

console.log(handleAnagram(arrayString))
