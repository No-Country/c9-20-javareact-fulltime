import { HomeContainer } from "../pages/home/styled-components/HomeComponents"
import InputSearch from "./InputSearch"
import Footer from "./Footer"
import { Div } from "../styled-components"

const NotFound = () => {
  return (
    <HomeContainer >
      <InputSearch />
      <Div style={{color: "#FFF", textAlign: "center"}}>
        No hay publicaciones que coincidan con tu búsqueda.
        <br />
        Te invitamos a navegar por las categorías para encontrar el plato que buscas.
      </Div>
      <Footer />
    </HomeContainer>
  )
}

export default NotFound