import React, { Component } from 'react';
import { Content } from 'native-base'; 
import { FlatList, Modal, Image, Button, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import ResturantCard from './ResturantCard';
import { closeModal } from '../../actions/Dining';

class PlacesToEat extends Component {
    _keyExtractor = (item, index) => item.name;

    render() {
        const places = [
            { name: 'FREDS', image: 'https://scontent.fphl2-3.fna.fbcdn.net/v/t1.0-9/56218238_2251044898293745_7793767467729289216_n.jpg?_nc_cat=104&_nc_ht=scontent.fphl2-3.fna&oh=26f9772767a865e9d74c57718da3c65f&oe=5D51B192' },
            { name: 'The Landings', image: 'https://static.wixstatic.com/media/70db0d_965819e6a13544f18128f089cecf28e7~mv2.jpg' },
            { name: 'Patterson Dining Facility', image: 'https://static.wixstatic.com/media/70db0d_dee0b305d0874b51a29e57f0cb5093fc~mv2_d_2048_1370_s_2.jpg' },
            { name: 'Mugs Coffee Bar', image: 'https://static.wixstatic.com/media/70db0d_3071b6437e5641f6b9c7b06eb6bd2160~mv2.jpg' },
            { name: 'The Grill at Eagle Creek', image: 'https://static.wixstatic.com/media/70db0d_ec5eb4d5d76a43f4918a199efd1259d6~mv2_d_2400_2400_s_4_2.png' }];
        return (
            <Content padder>
                 <Modal
                 style={{ marginTop: 50 }}
                animationType="slide"
                transparent={false}
                visible={this.props.showModal}
                onRequestClose={() => {
                    
                }}
                 >
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                        <FlatList
                        ListHeaderComponent={<Button title='Close' style={{ marginTop: 20 }} onPress={() => this.props.closeModal()} />}
                        style={{ padding: 10 }}
                        data={this.props.menuToDisplay}
                        renderItem={({ item, index }) => <Image key={index} style={{ flex: 1, width: null, height: 400 }} resizeMode='contain' source={item} />}
                        keyExtractor={this._keyExtractor}
                        />
                    </SafeAreaView>
    
                </Modal>
                <FlatList
                    data={places}
                    renderItem={({ item }) => <ResturantCard details={item} />}
                    horizontal={false}
                    keyExtractor={this._keyExtractor}
                    numColumns={2}
                />
            </Content>

           
        );
    }
}

const mapStateToProps = (state) => {
    return { showModal: state.dinning.showModal, menuToDisplay: state.dinning.menuToDisplay };
};

export default connect(mapStateToProps, { closeModal })(PlacesToEat);
