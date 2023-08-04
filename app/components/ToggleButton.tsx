'use client'

import { createContext, useContext, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from '@mui/system'
import { ColorModeContext } from '../providers/ThemesProvider'

const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false)
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={colorMode.toggleColorMode}
        className={`${theme.palette.mode == 'dark' ? 'bg-gray-500' : 'bg-gray-700'}
          relative inline-flex h-[23px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px]  transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default ToggleButton
