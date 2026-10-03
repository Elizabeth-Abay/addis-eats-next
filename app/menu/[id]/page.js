import { MenuContext } from "@/providers/MenuProvider";
import { useContext } from "react";
import CustomizeOrder from "./components/CustomizeOrder";
import TitleContainer from "./components/TitleContainer";
import "../styles/styles.css";
import { useRouter } from "next/navigation";


export default function OrderPage(){
    let router = useRouter()
    // when this page gets created 
    // first we get the item id
    const { itemId } = useParams();
    // once we find the item id get the thing from the menu
    let { state } = useContext(MenuContext);

    let { all } = state;
    let itemFound = all.find(
        menu => menu.id === itemId
    )

    //console.log('item found ');
    //console.log(itemFound)

    // u shld have useEffect
    if (!itemFound) return router.replace('/notFound')

    let item = { id : itemFound.id ,name : itemFound.nameEn , description : itemFound.description  , price : itemFound.priceETB }


    return (
        <div>
            <TitleContainer item={item}/>
            <CustomizeOrder item={item}/>
        </div>
    )

}