'use client'
import { getAnimalsData } from "@/lib/dataFetch";

const Sort =  () => {
    const handleSort=async(e)=>{
        const sortValue=e.target.value;
        const animalData=await getAnimalsData();
        const sortedData=[...animalData].sort((a,b)=>{
            if(sortValue==='low'){
                return a.price -b.price
            }
            else if(sortValue === 'heigh'){
                return b.price-a.price
            }
            return 0;
        })
        
        setAData(sortValue);

    }

    return (
       <div className="">
         <fieldset onChange={handleSort} className="fieldset">
            <legend className="fieldset-legend">Sort By Price</legend>
            <select defaultValue="Pick a browser" className="select text-center flex items-center justify-center">
                <option value={''}>Mixed</option>
                <option value={'low'}>Low to Heigh</option>
                <option value={'heigh'}>Heigh to Low</option>
            </select>
        </fieldset>
       </div>
    );
};

export default Sort;



