import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ResturantCard from './ResturantCard';

class PlacesToEat extends Component {
    render() {
        const places = [
            { name: 'FREDS', image: 'https://scontent.fphl2-3.fna.fbcdn.net/v/t1.0-9/56218238_2251044898293745_7793767467729289216_n.jpg?_nc_cat=104&_nc_ht=scontent.fphl2-3.fna&oh=26f9772767a865e9d74c57718da3c65f&oe=5D51B192' },
            { name: 'The Landings', image: 'https://static.wixstatic.com/media/70db0d_965819e6a13544f18128f089cecf28e7~mv2.jpg/v1/crop/x_0,y_300,w_812,h_600/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01/The%20Landings.webp' },
            { name: 'Patterson Dining Facility', image: 'https://static.wixstatic.com/media/70db0d_dee0b305d0874b51a29e57f0cb5093fc~mv2_d_2048_1370_s_2.jpg/v1/crop/x_97,y_0,w_1855,h_1370/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01/Patterson.webp' },
            { name: 'Mugs Coffe Bar', image: 'https://static.wixstatic.com/media/70db0d_3071b6437e5641f6b9c7b06eb6bd2160~mv2.jpg/v1/crop/x_0,y_196,w_812,h_600/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01/mugs.webp' },
            { name: 'The Grill at Eagle Creek', image: 'https://static.wixstatic.com/media/70db0d_ec5eb4d5d76a43f4918a199efd1259d6~mv2_d_2400_2400_s_4_2.png/v1/crop/x_0,y_196,w_2400,h_1773/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01/2019_03_25%20Eagle%20Creek%20Grill%20logo%20workin.webp' }];
        return (
            <FlatList
                data={places}
                renderItem={({ item }) => <ResturantCard details={item} />}
                horizontal={false}
                numColumns={2}
            />

           
        );
    }
}

export default PlacesToEat;
