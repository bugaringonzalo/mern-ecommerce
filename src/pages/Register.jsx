import styled from "styled-components"

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background: url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
`
const Wrapper = styled.div `

`
const Form = styled.div `

`
const Title = styled.div `

`
const Input = styled.div `

`
const Agreement = styled.div `

`

const Button = styled.button `

`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consents blabsldkabslkab
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register