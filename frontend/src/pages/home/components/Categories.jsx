import { useState } from 'react';
import { Div } from "../../../styled-components";
import Card from "./Card";
import { SectionStyled } from "../styled-components";
import HeaderSubTitle from "../../../components/HeaderSubTitle";
import { useEffect } from 'react';
import { Footer } from '../../../components';

const Categorias = () => {
  const [categorias, setCategorias] = useState()

  useEffect(() => {
    fetch("../../../../api/fooView.json")
      .then(res => res.json())
      .then(json => {
        const cat = json.food.map((cat) => cat.name)
        setCategorias(cat);
      })
      .catch(err => console.log(err));
    }, [])

  return (
    <>
      <SectionStyled>
        <HeaderSubTitle
          title=' Conoce nuestra Carta'
          textAlign='center'
          level={2}
        />
      </SectionStyled>
      <Div>
        {!categorias ? <span>Loading...</span> :
        categorias.map((cat, i)=>{
          return <Card key={i} name={cat} link={cat} />
        })}
      </Div>

      <Footer />
    </>

  )
}

export default Categorias