import React from 'react'
import styled from 'styled-components'
import Header from 'components/header'
import SideBar from 'components/sidebar'
import wallpaper from 'assets/images/wallpaper.png'

function App() {
	return (
		<Container>
			<Header />
			<Main>
				<Image src={wallpaper} alt='wallpaper' />
				<SideBar />
				<Content>Content</Content>
			</Main>
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`
const Main = styled.main`
	display: flex;
	flex: 1 1 auto;
`
const Image = styled.img`
	height: 100%;
	z-index: -10;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
const Content = styled.section`
	width: 100%;
`

export default App
