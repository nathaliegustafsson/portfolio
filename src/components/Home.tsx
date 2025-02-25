import styled from 'styled-components';
import { media } from '../styles/breakpoints';
import { fonts } from '../styles/typography';

function Home() {
	return (
		<BigContainer>
			<div>
				<TitleName>Nathalie Gustafsson</TitleName>
				<RoleBox>
					<LineBox>
						<Line />
					</LineBox>
					<RoleTitle>FRONT END DEVELOPER</RoleTitle>
				</RoleBox>
				<ShortText>
					A Gothenburg-based Front End Developer with an interest in UX and UI.
					I enjoy both designing and developing user-friendly interfaces that
					make digital experiences visually appealing and easy to use.
				</ShortText>
			</div>
		</BigContainer>
	);
}

// Styling
const BigContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	width: auto;
	padding: 20px;
`;

const TitleName = styled.h1`
	display: inline-block;
	font-family: 'NewYork', sans-serif;
	font-size: 55px;
	font-weight: 100;
	margin-bottom: 5px;
	margin: 0;

	@media ${media.mobile} {
		font-size: 70px;
	}

	@media ${media.tablet} {
		font-size: 80px;
	}

	@media ${media.desktopXL} {
		font-size: 90px;
	}
`;

const RoleBox = styled.div`
	display: flex;
	gap: 10px;

	@media ${media.tablet} {
		gap: 20px;
	}

	@media ${media.desktopXL} {
		gap: 24px;
	}
`;

const LineBox = styled.div`
	display: flex;
	align-items: center;
	justify-items: center;
`;

const Line = styled.div`
	width: 40px;
	height: 2px;
	background-color: black;

	@media ${media.mobile} {
		width: 70px;
	}

	@media ${media.tablet} {
		width: 80px;
	}

	@media ${media.desktopXL} {
		width: 90px;
	}
`;

const RoleTitle = styled.h2`
	font-family: ${fonts.montserrat};
	font-size: 18px;
	font-weight: 400;
	margin: 0px;

	@media ${media.mobile} {
		font-size: 25px;
	}

	@media ${media.tablet} {
		font-size: 28px;
	}
`;

const ShortText = styled.h3`
	font-family: ${fonts.montserrat};
	font-size: 13px;
	font-weight: 400;
	margin-top: 10px;
	margin-bottom: 0;
	max-width: 700px;

	@media ${media.tablet} {
		font-size: 18px;
	}

	@media ${media.desktopXL} {
		font-size: 22px;
		max-width: 790px;
	}
`;

export default Home;
