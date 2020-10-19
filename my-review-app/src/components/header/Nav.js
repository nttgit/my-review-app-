import React from 'react';
import {Button, ButtonGroup} from '@shopify/polaris';

const Nav = () => {
    return (
        <div style={{float: 'right'}}>
            <ButtonGroup>
                <Button>Settings</Button>
                <Button>Instructions</Button>
            </ButtonGroup>
        </div>
    );
}

export default Nav;