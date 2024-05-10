import { NavLink } from "react-router-dom"

const Search = ({state,setOpen,})=>{
    return (<div className='open'>
          {state.search.map((s, index) => (
            <NavLink key={index} to={`/${s.name.common}`} onClick={() => setOpen(false)}>
              <img src={s.flags.png} alt={s.name.common} />
            </NavLink>
          ))}
        </div>)

}

export default Search