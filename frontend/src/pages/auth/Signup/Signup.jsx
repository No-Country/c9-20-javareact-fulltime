import styled from 'styled-components'
import AuthForm from '../../../components/AuthForm/AuthForm'

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
`

const Signup = () => {
  return (
    <SignupBox>
      <AuthForm />
    </SignupBox>
  )
}

export default Signup