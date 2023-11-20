/* eslint-disable react/no-unescaped-entities */
import TextNav from '@renderer/components/navs/TextNav'
import { CustomFlowbiteTheme, Tabs, TabsRef } from 'flowbite-react'
import { SetStateAction, useRef, useState } from 'react'
import fatfemail from '../assets/img/fatwomenImg.svg'
import skeleteton from '../assets/img/skeletonImg.svg'
import activeleftarrow from '../assets/img/activeleftarrow.svg'
import activerightarrow from '../assets/img/activeRightarraow.svg'
import BodyShapeBars from '@renderer/components/BodyShapeBars'
import { BodyShapeBarsProps } from '@renderer/types/proptypes'
function BodyShapeMeasurement(): JSX.Element {
  const tabsRef = useRef<TabsRef>(null)
  const [activeTab, setActiveTab] = useState(0)
  const navProperties = {
    text: '체형 측정 결과'
  }
  const bodyShapeBarsProps: BodyShapeBarsProps[] = [
    {
      title: '측면',
      leftWidth: 70,
      rightWidth: 30
    },
    {
      title: '목회전',
      leftWidth: 70,
      rightWidth: 30
    },
    {
      title: '후면',
      leftWidth: 20,
      rightWidth: 50
    }
  ]
  const customTheme: CustomFlowbiteTheme['tab'] = {
    base: 'flex flex-col gap-2',
    tablist: {
      base: 'flex justify-start text-center w-screen',
      styles: {
        default: 'border-b-[2px] border-b-[#4582E9]'
      },
      tabitem: {
        base: 'first:ml-[72px] mr-[22px] last:mr-[0px]',
        styles: {
          default: {
            base: 'w-[216px] rounded-t-2xl px-[40px] py-[32px] font-plain ',
            active: {
              on: 'bg-[#4582E9] text-[#FAFAFA]',
              off: 'bg-[#E1E1E1] text-[#4582E9]'
            }
          }
        }
      }
    },
    tabitemcontainer: {
      base: 'ml-[72px] w-[calc(100vw-144px)]'
    }
  }
  return (
    <div className="flex flex-col w-screen">
      <TextNav {...navProperties} />
      <Tabs.Group
        aria-label="Default tabs"
        theme={customTheme}
        style="default"
        ref={tabsRef}
        onActiveTabChange={(tab: SetStateAction<number>): void => setActiveTab(tab)}
      >
        <Tabs.Item active title="정면">
          <div className="flex flex-row justify-between">
            <img src={fatfemail} alt="" />
            <img src={skeleteton} alt="" />
          </div>
        </Tabs.Item>
        <Tabs.Item title="측면">
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the next. The tab
          JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="후면">
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the next. The tab
          JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item>
      </Tabs.Group>
      <div className="text-sm text-gray-500 dark:text-gray-400">Active tab: {activeTab}</div>
      <div className="flex flex-row justify-center">
        <img src={activeleftarrow} alt="" />
        <p className="px-[59px] font-plain font-medium text-[40px]">자세 측정 결과</p>
        <img src={activerightarrow} alt="" />
      </div>
      <div className="flex flex-row justify-center w-full">
        {bodyShapeBarsProps.map((props, index) => (
          <BodyShapeBars key={index} {...props} />
        ))}
      </div>
    </div>
  )
}

export default BodyShapeMeasurement
