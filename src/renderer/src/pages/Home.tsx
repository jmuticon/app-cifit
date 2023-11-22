import HomeNav from '@renderer/components/navs/HomeNav'
import loclalIcon from '../assets/img/localaization.svg'
import logoutIcon from '../assets/img/logout.svg'
import eagleImage from '../assets/img/Eagle.svg'
import setingIcon from '../assets/img/settingIcon.svg'
import qrcode from '../assets/img/qrcode.svg'
import ImgOverlay from '@renderer/components/cards/ImgOverlay'
import { cardProps } from '@renderer/types/proptypes'
import cardImage from '../assets/img/cardImg.svg'
import cardImgGirl from '../assets/img/cardbggirl.svg'
function Home(): JSX.Element {
  const navProperties = {
    rightText1: '측정 결과',
    rightLink1: '/bodyShape',
    rightIcon1: loclalIcon,
    rightText2: '로그아웃',
    rightLink2: '/login',
    rightIcon2: logoutIcon
  }
  const cardProps: cardProps = {
    cards: [
      {
        id: 1,
        cardTitle: 'Home',
        cardImage: cardImage,
        cardLink: '/home',
        cardText: '체형, 근력, 심폐지구력 등'
      },
      {
        id: 2,
        cardTitle: 'Login',
        cardImage: cardImgGirl,
        cardLink: '/login',
        cardText: '체형, 근력, 심폐지구력 등'
      },
      {
        id: 3,
        cardTitle: 'Measure',
        cardImage: cardImage,
        cardLink: '/measure',
        cardText: '체형, 근력, 심폐지구력 등'
      },
      {
        id: 4,
        cardTitle: 'Body Shape',
        cardImage: cardImgGirl,
        cardLink: '/bodyShape',
        cardText: '체형, 근력, 심폐지구력 등'
      },
      {
        id: 5,
        cardTitle: 'PrepBody',
        cardImage: cardImage,
        cardLink: '/prepbodymeasure',
        cardText: '체형, 근력, 심폐지구력 등'
      },
      {
        id: 6,
        cardTitle: 'BodyMeasure',
        cardImage: cardImgGirl,
        cardLink: '/bodymeasure',
        cardText: '체형, 근력, 심폐지구력 등'
      },
      {
        id: 7,
        cardTitle: '측정 결과',
        cardImage: cardImage,
        cardLink: '/home',
        cardText: '체형, 근력, 심폐지구력 등'
      }
    ]
  }
  return (
    <div className="flex flex-col w-screen p-0 m-0">
      <HomeNav {...navProperties} />
      <div className="flex justify-center w-full">
        <div className="w-[calc(100vw-144px)]">
          <div className="flex flex-row justify-between mt-20">
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-row">
                  <p className="font-plain text-[56px] font-bold">홍길동님 안녕하세요!</p>
                  <img src={setingIcon} className="ml-4" alt="CIFIT" />
                </div>
                <p className="text-[32px] text-[#4D5055] font-plain font-normal">
                  세종 경찰서 어쩌구 부서
                </p>
              </div>
              <div className="flex flex-row mt-[73px] ">
                <img src={qrcode} className="w-[161px] h-[161px]" alt="" />
                <div className="flex flex-col ml-[24px] justify-center">
                  <p className="text-[32px] text-[#4D5055] font-plain font-normal">
                    QR코드 인증하고
                  </p>
                  <p className="text-[32px] text-[#4D5055] font-plain font-normal">
                    어플에 간편하게 연동해보세요!
                  </p>
                </div>
              </div>
            </div>
            <img src={eagleImage} className="" alt="CIFIT" />
          </div>
          <div className="flex flex-col mt-[96px]">
            <ImgOverlay {...cardProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
