import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;

        const { title } = this.props.library.item;
        
        return (
            <CardSection>
                <Text style={titleStyle}>{title}</Text>
            </CardSection>
        )
    }
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
});

export default ListItem;