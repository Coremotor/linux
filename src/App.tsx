import React from 'react'
import GlobalStyle from 'styles/globalStyles'
import styled from 'styled-components'
import Header from 'components/header'
import SideBar from 'components/sidebar'
import wallpaper from 'assets/images/wallpaper.png'

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`
const Main = styled.main`
	display: flex;
	flex: 1 1 auto;
	background-image: url(${wallpaper});
	background-position: center;
	background-size: cover;
`
const Content = styled.section`
	width: 100%;
`

function App() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
				<Main>
					<SideBar />
					<Content>Content</Content>
				</Main>
			</Container>
		</>
	)
}

export default App
