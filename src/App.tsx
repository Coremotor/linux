import React from 'react'
import styled from 'styled-components'
import Header from 'components/header'
import SideBar from 'components/sidebar'
import wallpaper from 'assets/images/wallpaper.jpg'
import zIndex from 'styles/zIndexLevels'

function App() {
	return (
		<Container>
			<Header />
			<Main>
				<ImgWrapper>
					<img src={wallpaper} alt='wallpaper' />
				</ImgWrapper>
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
const ImgWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	position: fixed;
	z-index: ${zIndex.levelBottom};
	overflow: hidden;
`
const Content = styled.section`
	width: 100%;
`

export default App
