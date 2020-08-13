import React, { useState } from 'react';
import { Button, Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
function SidebarModule() {
    const [visible, setVisisble] = useState(true);

    const visiChange = () => {
        (visible == true) ? setVisisble(false) : setVisisble(true);
    }
    return (

        <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
            <Sidebar
                as={Menu}
                animation="push"
                direction="left"
                icon='labeled'
                inverted
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as='a'>
                    <Icon name='home' />
      Home
    </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
      Games
    </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
      Channels
    </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher >
                <Button onClick={visiChange} icon basic>
                    <Icon name='angle left' />
                </Button>

                <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='/images/wireframe/paragraph.png' />
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>

    )
}

export default SidebarModule;
