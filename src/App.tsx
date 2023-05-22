import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from 'components/header'
import SideBar from 'components/sidebar'
import wallpaper from 'assets/images/wallpaper.jpg'
import zIndex from 'styles/zIndexLevels'
import Desktop from 'components/desktop'
import { createPortal } from 'react-dom'
import TextView from 'components/textView'

function App() {
	const [showInfo, setShowInfo] = useState(false)
	const hideInfo = () => setShowInfo(false)

	useEffect(() => {
		setShowInfo(true)
	}, [])
	return (
		<Container>
			<Header />
			<Main>
				<ImgWrapper>
					<img src={wallpaper} alt='wallpaper' />
				</ImgWrapper>
				<SideBar />
				<Desktop />
			</Main>
			{showInfo &&
				createPortal(
					<TextView
						onClose={hideInfo}
						content={
							<>
								<p>Сайт находится в стадии ленивой разработки :)</p>
								<p>Сайт задумывался как некое резюме frontend разработчика</p>
								<p>
									На данный момент можно поперемещать папочки по рабочему столу,
									двойным кликом открыть, так же открыть вложенные файлы в
									папках, почитать про рабочие проекты, созданные мной с нуля,
									посмотреть скриншоты некоторых экранов.
								</p>
								<p>
									Telegram:
									<a
										href='https://t.me/coremotor'
										target='_blank'
										rel='noreferrer'
									>
										@coremotor
									</a>
								</p>
							</>
						}
					/>,
					document.body
				)}
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
	overflow: hidden;
`
const ImgWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	position: fixed;
	z-index: ${zIndex.levelBottom};
`

export default App
