export function getRandomElement(verbList) {
    const randomIndex = Math.floor(Math.random() * verbList.length);
    return verbList[randomIndex];
}