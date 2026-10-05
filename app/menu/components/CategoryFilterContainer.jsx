"use client"
import { MenuContext } from "../../../providers/MenuProvider";
import { useContext, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import { usePathname , useRouter } from "next/navigation";
// we may have to use a different thing for showing the context

export default function CategoryFilterContainer(){
    // let {  dispatch } = useContext(MenuContext);
    let [activeCategory , setActiveCategory ] = useState('All');

    const categories = [
        { name: 'All', action: 'get_all' , type : 'all' },
        { name: 'Traditional Stews & Wat', action: 'Traditional Stews & Wat' , type : 'wet' },
        { name: 'Tibs & Grills', action: 'Tibs & Grills' , type : 'tibs'},
        { name: 'Raw & Cured Delicacies / Kitfo', action: 'Raw & Cured Delicacies / Kitfo' , type :'kitfo' },
        { name: 'Fasting & Vegan / Tsom', action: 'Fasting & Vegan / Tsom' , type : 'tsom'},
        { name: 'Beverages & Tej', action: 'Beverages & Tej' , type :'beverages' },
    ];

    let router = useRouter();
    let pathname = usePathname();
    let params = new URLSearchParams()

    const handleCategoryClick = (categoryName, actionType) => {
        setActiveCategory(categoryName);
        // this is the filter

        let setName = categories.find(item => item.name === categoryName)
        params.set('category' , setName.type);
        router.push(`${pathname}?${params.toString()}`)
        // dispatch({ type: actionType });
    };
    
    return (
        <div className="category-filter-contaienr">
            {/* on click add active classtype to them  */}
            {
                categories.map(
                    cat => (
                        <CategoryFilter 
                            key={cat.name}
                            type={cat.name}
                            isActive={activeCategory === cat.name}
                            onClick={() => handleCategoryClick(cat.name, cat.action) }
                        ></CategoryFilter>
                    )
                )
            }
        </div>
    )
}