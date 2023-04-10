/**
 * Shuffles the array of type T.
 *
 * @param array - Array to shuffle
 * @returns shuffled array
 *
 * @see https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
export function shuffleArray<T>(array: T[]): T[] {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
