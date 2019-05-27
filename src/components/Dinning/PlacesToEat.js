import React, { Component } from 'react';
import { Content } from 'native-base'; 
import { FlatList } from 'react-native';
import ResturantCard from './ResturantCard';

class PlacesToEat extends Component {
    render() {
        const places = [
            { name: 'FREDS', image: 'https://scontent.fphl2-3.fna.fbcdn.net/v/t1.0-9/56218238_2251044898293745_7793767467729289216_n.jpg?_nc_cat=104&_nc_ht=scontent.fphl2-3.fna&oh=26f9772767a865e9d74c57718da3c65f&oe=5D51B192' },
            { name: 'The Landings', image: 'https://static.wixstatic.com/media/70db0d_965819e6a13544f18128f089cecf28e7~mv2.jpg' },
            { name: 'Patterson Dining Facility', image: 'https://static.wixstatic.com/media/70db0d_dee0b305d0874b51a29e57f0cb5093fc~mv2_d_2048_1370_s_2.jpg' },
            { name: 'Mugs Coffe Bar', image: 'https://static.wixstatic.com/media/70db0d_3071b6437e5641f6b9c7b06eb6bd2160~mv2.jpg' },
            { name: 'The Grill at Eagle Creek', image: 'https://static.wixstatic.com/media/70db0d_ec5eb4d5d76a43f4918a199efd1259d6~mv2_d_2400_2400_s_4_2.png' }];
        return (
            <Content>
                <FlatList
                    data={places}
                    renderItem={({ item }) => <ResturantCard details={item} />}
                    horizontal={false}
                    numColumns={2}
                />
            </Content>

           
        );
    }
}

export default PlacesToEat;
