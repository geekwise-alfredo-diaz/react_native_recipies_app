// Native Imports
import React from 'react'

// Icon
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

const HeadButton = props => {
    return <HeaderButton {...props} 
                iconSize={20}
                IconComponent={Ionicons}
                color="white"
            />
}

export default HeadButton;