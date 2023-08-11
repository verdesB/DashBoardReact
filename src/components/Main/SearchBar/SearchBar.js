import './searchBar.scss';
export const SearchBar = () => {
    return(
        <div class="main__searchContainer">
            <form class="main__search">
                <input class="main__inputSearch" type="text" placeholder="Rechercher"></input>
                <button class="main__buttonSearch" type="submit"></button>
            </form>
        </div>
    )
}