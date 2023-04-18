import React, { useEffect } from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, TriangleDownIcon } from '@radix-ui/react-icons';
import { useApp } from './AppProvider';
import { isCookieEnabled, getCookie, setCookie, removeCookie } from 'tiny-cookie'

type Props = {}

const ItemText = "uppercase text-[13px] rounded-[3px] leading-none text-gray-900 flex items-center h-[30px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-300";

const ItemIndicator = "absolute left-0 w-[25px] inline-flex items-center justify-center";

const ThemeSelector = (props: Props) => {

    const { theme, setTheme } = useApp();

    // useEffect(() => {
    //     console.log('ThemeSelector...');
    //     setCookie('theme', 'dark');
    //     console.log(getCookie('theme'));

    // }, [])




    const handleThemeSelector = (value: string) => {


        //document.body.className = value;
        setTheme(value);
    }

    return (
        <Select.Root value={theme} onValueChange={handleThemeSelector}>
            <Select.Trigger className="w-[90px] inline-flex items-center justify-center leading-none outline-none uppercase rounded hover:bg-gray-300">
                <Select.Value aria-label={theme}>
                    {theme}
                </Select.Value>
                <TriangleDownIcon className='ml-1' />
            </Select.Trigger>
            <Select.Portal>
                <Select.Content asChild={true} position="popper" className="overflow-hidden border border-gray-200 bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.Viewport className="p-[5px]">
                        <Select.Item value="default" className={ItemText}>
                            <Select.ItemText>default</Select.ItemText>
                            <Select.ItemIndicator className={ItemIndicator}>
                                <CheckIcon />
                            </Select.ItemIndicator>
                        </Select.Item>
                        <Select.Item value="dark" className={ItemText}>
                            <Select.ItemText>dark</Select.ItemText>
                            <Select.ItemIndicator className={ItemIndicator}>
                                <CheckIcon />
                            </Select.ItemIndicator>
                        </Select.Item>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );

};


export default ThemeSelector