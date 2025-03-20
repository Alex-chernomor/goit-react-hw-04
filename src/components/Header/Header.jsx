import SearchBar from "../SearchBar/SearchBar";
// import css from './Header.module..css';

export default function Header({onSearch}) {
  return (
    <header 
    // className={css.header}
    >
        <SearchBar onSearch={onSearch}/>
    </header>
  )
}

