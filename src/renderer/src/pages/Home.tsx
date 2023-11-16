import HomeNav from '@renderer/components/navs/HomeNav'
import loclalIcon from '../assets/localaization.svg'
import logoutIcon from '../assets/logout.svg'
import eagleImage from '../assets/Eagle.svg'
import setingIcon from '../assets/settingIcon.svg'
import qrcode from '../assets/qrcode.svg'
import ImgOverlay from '@renderer/components/cards/ImgOverlay'
import { cardProps } from '@renderer/types/proptypes'
import cardImage from '../assets/cardImg.svg'
function Home(): JSX.Element {
  const navProperties = {
    rightText1: '측정 결과',
    rightLink1: '/measure',
    rightIcon1: loclalIcon,
    rightText2: '로그아웃',
    rightLink2: '/login',
    rightIcon2: logoutIcon
  }
  const cardProps: cardProps = {
    cards: [
      {
        id: 1,
        cardImage: cardImage,
        cardLink: '/measure',
        cardText: '측정 결과'
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
