import MenuProvider from '../../providers/MenuProvider';
import CategoryFilterContainer from './components/CategoryFilterContainer';
import MenuContainer from './components/MenuContainer';
import SearchBar from './components/SearchBar';
import SelectedItemsContainer from './components/SelectedItemsContainer';
import TraditionalGursha from './components/TraditionalGurshaExperience';
import './style/style.css';

export default function MenuPage(){
    return (
        <MenuProvider>
            <div>
            <SearchBar></SearchBar>
            <TraditionalGursha></TraditionalGursha>
            <CategoryFilterContainer></CategoryFilterContainer>
            <MenuContainer></MenuContainer>
            {/* then we will need the view basket button */}
            <SelectedItemsContainer></SelectedItemsContainer>
        </div>
        </MenuProvider>
        
    )

}