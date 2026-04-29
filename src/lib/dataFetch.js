export const getAnimalsData = async() => {
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/animalData.json`);
    const data = await res.json();
    return data

}