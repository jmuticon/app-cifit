/* eslint-disable react/no-unescaped-entities */
import TextNav from '@renderer/components/navs/TextNav'
import { CustomFlowbiteTheme, Tabs, TabsRef } from 'flowbite-react'
import { SetStateAction, useRef, useState } from 'react'
import fatfemail from '../assets/img/fatwomenImg.svg'
import skeleteton from '../assets/img/skeletonImg.svg'
import { BodyShapeBarsProps, ItemProps } from '@renderer/types/proptypes'
import BodyShapeTabs from '@renderer/components/bodyShape/BodyshapeTabs'
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
      rightWidth: 30,
      leftText: '좌측',
      rightText: '우측'
    },
    {
      title: '목회전',
      leftWidth: 70,
      rightWidth: 30,
      leftText: 'X다리',
      rightText: '오다리'
    },
    {
      title: '후면',
      leftWidth: 20,
      rightWidth: 50,
      leftText: 'X다리',
      rightText: '오다리'
    },
    {
      title: '측면',
      leftWidth: 70,
      rightWidth: 30,
      leftText: 'X다리',
      rightText: '오다리'
    },
    {
      title: '측면',
      leftWidth: 70,
      rightWidth: 30,
      leftText: 'X다리',
      rightText: '오다리'
    }
  ]
  const tabItemProps: ItemProps = {
    barprops: bodyShapeBarsProps,
    img1: fatfemail,
    img2: skeleteton,
    pageInnerContent2: [
      {
        title: '왼쪽',
        buttons: [
          {
            text: '위등세모근',
            onClick: (): void => {}
          },
          {
            text: '뒤통수 밑근',
            onClick: (): void => {}
          },
          {
            text: '목갈비근',
            onClick: (): void => {}
          },
          {
            text: '목빗근',
            onClick: (): void => {}
          },
          {
            text: '어깨올림근',
            onClick: (): void => {}
          },
          {
            text: '작은가슴근',
            onClick: (): void => {}
          }
        ]
      },
      {
        title: '오른쪽',
        buttons: [
          {
            text: '위등세모근',
            onClick: (): void => {}
          },
          {
            text: '뒤통수 밑근',
            onClick: (): void => {}
          },
          {
            text: '목갈비근',
            onClick: (): void => {}
          },
          {
            text: '목빗근',
            onClick: (): void => {}
          },
          {
            text: '어깨올림근',
            onClick: (): void => {}
          },
          {
            text: '작은가슴근',
            onClick: (): void => {}
          }
        ]
      }
    ]
  }
  const tabItemProps2: ItemProps = {
    barprops: bodyShapeBarsProps,
    img1: skeleteton,
    img2: fatfemail,
    pageInnerContent2: [
      {
        title: '왼쪽',
        buttons: [
          {
            text: '위등세모근',
            onClick: (): void => {}
          },
          {
            text: '뒤통수 밑근',
            onClick: (): void => {}
          },
          {
            text: '목갈비근',
            onClick: (): void => {}
          },
          {
            text: '목빗근',
            onClick: (): void => {}
          },
          {
            text: '어깨올림근',
            onClick: (): void => {}
          },
          {
            text: '작은가슴근',
            onClick: (): void => {}
          }
        ]
      },
      {
        title: '오른쪽',
        buttons: [
          {
            text: '위등세모근',
            onClick: (): void => {}
          },
          {
            text: '뒤통수 밑근',
            onClick: (): void => {}
          },
          {
            text: '목갈비근',
            onClick: (): void => {}
          },
          {
            text: '목빗근',
            onClick: (): void => {}
          },
          {
            text: '어깨올림근',
            onClick: (): void => {}
          },
          {
            text: '작은가슴근',
            onClick: (): void => {}
          }
        ]
      }
    ]
  }
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
      base: 'm-auto w-[calc(100vw-144px)]'
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
          <BodyShapeTabs {...tabItemProps} />
        </Tabs.Item>
        <Tabs.Item title="측면">
          <BodyShapeTabs {...tabItemProps2} />
        </Tabs.Item>
        <Tabs.Item title="후면">
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the next. The tab
          JavaScript swaps classes to control the content visibility and styling.
        </Tabs.Item>
      </Tabs.Group>

      <div className="text-sm text-gray-500 dark:text-gray-400">Active tab: {activeTab}</div>
    </div>
  )
}

export default BodyShapeMeasurement
