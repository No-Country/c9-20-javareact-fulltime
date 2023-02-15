import { SearchStyle } from '../styled-components/InputSearchComponent'
import { search } from '../../public/icons'

const InputSearch = () => {
  return (
    <SearchStyle>
      <input type="text" placeholder='Buscar' />
      <img src={search} alt="SVG search icon"></img>
    </SearchStyle>
  )
}

export default InputSearch