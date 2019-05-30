export function displayMenu(resturantName) {
    switch (resturantName.toUpperCase()) {
        case 'THE LANDINGS':
            return {
                type: 'MENU_LIST',
                payload: [require('../images/Landings_Breakfast.jpg')]
            };
        case 'MUGS COFFEE BAR':
            return {
                type: 'MENU_LIST',
                payload: [require('../images/MUGS_Menu.jpg')]
            };
        case 'THE GRILL AT EAGLE CREEK':
            return {
                type: 'MENU_LIST',
                payload: [require('../images/Grill_menu_1.jpg'), require('../images/Grill_menu_2.jpg')]
            };
        default:
            return {
                type: 'MENU_LIST',
                payload: [require('../images/FREDS_1.jpg'), require('../images/FREDS_2.jpg')]
            };
    }
}

export function closeModal() {
    return {
        type: 'CLOSE_MODAL'
    };
}
