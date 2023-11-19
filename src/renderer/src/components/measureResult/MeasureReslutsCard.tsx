// const { ipcRenderer } = require('electron')
// const { exec } = require('child_process')

// ipcRenderer.on('open-keyboard', () => {
//   // Open the system keyboard using a system command
//   if (process.platform === 'win32') {
//     // For Windows
//     exec('osk')
//   } else if (process.platform === 'darwin') {
//     // For macOS
//     exec('open -a "KeyboardViewer"')
//   } else {
//     // For Linux (GNOME)
//     exec('gnome-screen-keyboard')
//     // You may need to adjust the command based on the desktop environment used on Linux
//   }
// })
import MRImage from '../../assets/img/MRImage.svg'
function MeasureResultCard(): JSX.Element {
  return (
    <div className="mt-[53px]">
      <div className="shadow-[0px_4px_8px_0px_rgba(0,0,0,0.16)] rounded-[37px] bg-[#FAFAFA]">
        <div className="flex flex-row mt-[112px]">
          <img
            src={MRImage}
            alt="MRImage"
            className="rounded-[26px] w-[412px] h-[272px] shrink-0 pr-5 pt-5 pb-[31px]"
          />
          <div className="flex flex-col">
            <p className="text-[#4582E9] text-[40px] font-plain">측정 결과</p>
            <p className="text-[40px] font-plain">조회하려는</p>
            <p className="text-[40px] font-plain">측정 결과를</p>
            <p className="text-[40px] font-plain">선택하세요.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeasureResultCard
