import MenuProvider from '../../providers/MenuProvider';
import CategoryFilterContainer from './components/CategoryFilterContainer';
import MenuContainer from './components/MenuContainer';
import SearchBar from './components/SearchBar';
import SelectedItemsContainer from './components/SelectedItemsContainer';
import TraditionalGursha from './components/TraditionalGurshaExperience';
import './style/style.css';

export default async function MenuPage({searchParams}){
    let searchParameters = await searchParams
    // console.log("seaarch Params")
    // console.log(searchParams)
    return (
        <div>
            <SearchBar></SearchBar>
            <TraditionalGursha></TraditionalGursha>
            <CategoryFilterContainer></CategoryFilterContainer>
            <MenuContainer searchParams={searchParameters}></MenuContainer>
            {/* then we will need the view basket button */}
            <SelectedItemsContainer></SelectedItemsContainer>
        </div>
        
    )

}