"use client"
import { MenuContext } from "../../../providers/MenuProvider";
import { useContext , useEffect, useState } from "react";
import CustomizeOrder from "./components/CustomizeOrder";
import TitleContainer from "./components/TitleContainer";
import "./styles/styles.css";
import { useParams, useRouter } from "next/navigation";


export default function OrderPage(){
    let router = useRouter()
    // when this page gets created 
    // first we get the item id
    let { id : itemID } = useParams();
    // once we find the item id get the thing from the menu
    // let { state } = useContext(MenuContext);
    // console.log("ENtering the id page")
    // console.log(useParams())

    // ! why not working
    // let { all } = state;

    let [ itemFound , setItemFound ] = useState({})

    useEffect(
        () => {
            //console.log('running the fetch')

            let getMenu = async() => {
                try{    
                    let result = await fetch('https://addis-eats-backend.onrender.com/menu/' , {revalidate : 3600});

                    if (!result || !result.ok) return alert('Problem fetching the menu');

                    // else then you can dispatch the event to create the menu list
                    // when it first loads it will set the menu
                    let res = await result.json();


                    let { data } = res;

                    // console.log("data")
                    // console.log(data)

                    let found = data.find(
                        menu => menu.id === String(itemID)
                    )


                    setItemFound(found)
                    

                }catch(err){
                    console.error("Error fetching menu:", err.message);
                    // setError(err.message)

                }
                
            }

            getMenu()
        } ,
        [itemID]

    
    )

    


    // console.log('itemFound');
    // console.log(itemFound)

    
    //console.log('item found ');
    //console.log(itemFound)

    // u shld have useEffect
    // if (!itemFound) return router.replace('/notFound')
    useEffect(() => {
        if (!itemFound) {
            router.replace('/notFound');
        }
    }, [itemFound, router]);

    let item = { id : itemFound.id ,name : itemFound.nameEn , description : itemFound.description  , price : itemFound.priceETB }


    return (
        
        <div>
            <TitleContainer item={item}/>
            <CustomizeOrder item={item}/>
        </div>
    )

}