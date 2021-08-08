import { Box, Button, CheckBox, Heading, Layer, Text } from 'grommet'
import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil';
import { menuOpen, mode } from '../../state/main';

function MenuItems() {
    const onClose = useResetRecoilState(menuOpen);
    const [color,setColor] = useRecoilState(mode)
    return (
        <Layer
            id="hello world"
            position="center"
            onClickOutside={() => onClose(false)}
            onEsc={() => onClose(false)}
            responsive={false}
        >
            <Box pad="medium" gap="small" width="medium">
                <Box justify="center" align="center">
                    <Heading
                        level={3} margin="none">
                        Menu
                    </Heading>
                </Box>
                <Box>
                <Text>Are you sure you want to delete?</Text>
                </Box>
                
                <Box
                    as="footer"
                    gap="small"
                    direction="column"
                    align="center"
                    justify="end"
                    pad={{ top: 'medium', bottom: 'small' }}
                >
                    <CheckBox
                        name="toggle"
                        toggle
                        reverse
                        checked={color === 'dark'? true : false}
                        label={color === 'dark'? "Dark Theme" : "Light Theme"}
                        onChange={event => setColor(color === 'light'? 'dark' : 'light')}
                    />
                    <Button
                        label={
                            <Text color="white">
                                <strong>Close</strong>
                            </Text>
                        }
                        onClick={onClose}
                        primary
                        color="status-critical"
                    />
                </Box>
            </Box>

        </Layer>
    )
}

export default MenuItems
