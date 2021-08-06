const arrayString = ['kita', 'atik', 'tika', 'aku', 'makan', 'kia', 'kua']

function anagram(inputArray) {
	const anagramList = []
	if (inputArray.length > 0) {
		inputArray.forEach((list) => {
			const wordSorted = list.split('').sort().join('')
			if (!anagramList[wordSorted]) {
				anagramList[wordSorted] = [list]
			} else {
				anagramList[wordSorted].push(list)
			}
		})

		return Object.values(anagramList)
	} else {
		return 'anagram undefined'
	}
}

console.log(anagram(arrayString))
