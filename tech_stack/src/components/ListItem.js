import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native'
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions'

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex:1}}>
                        {library.item.description}
                    </Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;
        
        return (
            <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return {
        expanded,    
    }
}

export default connect(mapStateToProps, actions)(ListItem);