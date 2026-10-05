// "use client"
import FullPageSpinner from "../../../components/Spinner";
// import { useMenu } from "../../../providers/MenuProvider";
// import { useEffect  } from "react";
import MenuBox from "./MenuBox";

// what if i do like this - a contianer for the search bar and the filters to pass the props

export default async function MenuContainer({ searchParams}){
    // let { state , dispatch } = useMenu();

    // { loading &&
    //     <FullPageSpinner />
    // }

    // {
    //     error != '' &&
    //     <div className="error">
    //         Error happened {error}
    //     </div>
    // }

    // run the menu loading only once when the container is rendered

    let { name , category } = searchParams;
    // if it is not there


    let rendered;
    

    try{    
        let result = await fetch('https://addis-eats-backend.onrender.com/menu/' , { revalidate : 3600});

        if (!result || !result.ok) return alert('Problem fetching the menu');

        // else then you can dispatch the event to create the menu list
        // when it first loads it will set the menu
        let res = await result.json();

        // then check the way to filter the thing
        // is it name or category
        

        let { data } = res;



        if (name) {
            const escapedInput = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const searchRegex = new RegExp(escapedInput, 'i');
            rendered = data.filter(
                item => {
                    if(searchRegex.test(item.nameEn)) {
                        return item
                }}
            )
            console.log("Rendering items from name")
            console.log(rendered)
        } else {
            switch (category){
                case 'wet':
                        rendered = data.filter(
                        (item) => item.category.toLowerCase().trim() === 'traditional stews & wat'
                        )
                        break
                case 'tibs':
                    rendered = data.filter(
                        (item) => item.category.toLowerCase().trim() === 'tibs & grills'
                        )
                        break

                case 'kitfo':
                    rendered = data.filter(
                        (item) => item.category.toLowerCase().trim() === 'raw & cured delicacies / kitfo'
                        )
                        break

                
    
                case 'tsom':
                    rendered = data.filter(
                        (item) => item.category.toLowerCase().trim() === 'fasting & vegan / tsom'
                        )
                        break

                    
                case 'beverages':
                    rendered = data.filter(
                        (item) => item.category.toLowerCase().trim() === 'beverages & tej'
                        )
                        break

                    
                default:
                    rendered = data
            }
        }
        
            
            




        // console.log('running get menu')
        // console.log('result is');
        // console.log(res.data);


        //console.log(typeof dispatch)

        // dispatch({type : 'add-menu' , menu : res.data })
        // setLoading(false)
        console.log("rendered")
        console.log(rendered)

    }catch(err){
        //console.error("Error fetching menu:", err);
        // setError(err.message)
        console.log(`error during menu ${err.message}`)

    }

    // then loop through the rendered items and then create the menuBox
    // //console.log('menu , sta')
    // //console.log(state)]\
    let addingId = 1;
    return (
        <div className="menu-container">
            {
                // let idNew = `${item.id}${addin}`
                rendered?.map(
                    item => {
                        let idNew = `${item.id}${addingId++}`
                        return <MenuBox key={idNew} dish={item}></MenuBox>
                    }
                )
            }
        </div>
    )
}