import styled from 'styled-components'
import Icon from './assets/Icon.jsx'
import { useState } from 'react'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 30%;
  min-width: 300px;
  margin: auto;
  padding: 1em;
`

const Label = styled.label`
  /* margin: 10px; */
`

const Input = styled.input`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 20px;
  margin-left: 0;
  &:ms-reveal {
    border: 1px solid transparent;
    border-radius: 50%;
    box-shadow: 0 0 3px currentColor;
  }
`

const PasswordInput = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`

const PaswordContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  position: relative;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  margin-bottom: 20px;
  margin-left: 0;
 `

const Button = styled.button`
  background-color: #49454F;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-top: 40px;
 `

const ShowPasswordIcon = styled.button`
  &:focus {
    outline: none;
    background: none;
  }
  background: none;
  border: none;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`



const Title =  styled.h3`

`

function AuthForm() {
  const [showPassword, setShowPassword] = useState(true)
  const [showPassword2, setShowPassword2] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <FormWrapper>
      <Title>Signup</Title>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name='email'
         />

        <Label htmlFor="name">Nombre</Label>
        <Input type="text" id="name" name='name'/>


        <Label htmlFor="password">Contraseña</Label>
        <PaswordContainer>
          <PasswordInput
            type={showPassword ? 'password' : 'text'}
            id="password"
            name='password'
          />
          <ShowPasswordIcon type='button' onClick={() => setShowPassword(!showPassword)}>
            <Icon />
          </ShowPasswordIcon>
        </PaswordContainer>

        <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
        <PaswordContainer>
          <PasswordInput
            type={showPassword2 ? 'password' : 'text'}
            id="password"
            name='password'
            />
          <ShowPasswordIcon type='button' onClick={() => setShowPassword2(!showPassword2)}>
            <Icon />
          </ShowPasswordIcon>
        </PaswordContainer>


        <Button type='submit'>Register</Button>  
      </Form>
      
    </FormWrapper>
  )
}

export default AuthForm