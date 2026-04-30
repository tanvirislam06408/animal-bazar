export const getAnimalsData = async() => {
    const res = await fetch(`https://raw.githubusercontent.com/tanvirislam06408/animal-bazar/refs/heads/main/public/animalData.json`);
    const data = await res.json();
    return data
    

}