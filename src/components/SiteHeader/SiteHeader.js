import { Box, Button, Heading } from 'grommet'
import { Menu } from 'grommet-icons'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { menuOpen, siteNmae } from './../../state/main';
import MenuItems from './MenuItems';

function SiteHeader() {
    const name = useRecoilValue(siteNmae);
    const [ismenuOpen,setIsOpen] = useRecoilState(menuOpen)

    return (
        <Box
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background="primary"
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="medium"
            style={{ zIndex: "1" }}>
                
               <Heading level="3" style={{
                   padding: '10px',
                   margin: '0px' 
               }}>
                   {name}
               </Heading>
            {ismenuOpen && <MenuItems/>}
            <Button icon={<Menu />} onClick={()=>{
                setIsOpen(true)
            }}/>
        </Box >
    )
}

export default SiteHeader
