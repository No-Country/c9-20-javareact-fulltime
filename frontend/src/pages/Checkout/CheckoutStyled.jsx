import styled from 'styled-components'

export const CheckContainer = styled.div`
background-color: lightgray;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
div{
    margin: 10px;
    width: 400px;
}

`
export const CheckData = styled.div`
form{
    display: flex;
    flex-direction: column;
    margin: 15px;
    label{
        font-size: 1.2rem;
        margin: 15px;
    }
    input{
        height: 30px;
    }
}

`
export const CheckPayment = styled.div`
form{
    display: flex;
    flex-direction: column;
    margin: 15px;
    div{
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            height: 25px;
            width: 25px;
        }
    }
    label{
        font-size: 1.2rem;
        margin: 15px;
    }
    input{
        height: 30px;
    }
}

`
export const CheckCart = styled.div`
display: flex;
flex-direction: column;

`