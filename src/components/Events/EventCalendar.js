import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Agenda } from 'react-native-calendars';
import { fetchEvents } from '../../actions/events';
import AgendaItem from './AgendaItem';
import AgendaDayHeader from './AgendaDayHeader';


class EventCalendar extends Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

    render() {
      const dates = Object.keys(this.props.events);
      console.log(dates);
      return (
          <Agenda
            items={this.props.events}
            // callback that gets called when items for
            //  a certain month should be loaded (month became visible)
            loadItemsForMonth={(month) => { console.log('trigger items loading'); }}
            // callback that fires when the calendar is opened or closed
            onCalendarToggled={(calendarOpened) => { console.log(calendarOpened); }}
            // callback that gets called on day press
            onDayPress={(day) => { console.log('day pressed'); }}
            // callback that gets called when day changes while scrolling agenda list
            onDayChange={(day) => { console.log('day changed'); }}
            // initially selected day
            selected={Date()}
            /* Minimum date that can be selected, 
            dates before minDate will be grayed out. Default = undefined */
            minDate={this.props.minDate}
            /* Maximum date that can be selected, 
            dates after maxDate will be grayed out. Default = undefined */
            maxDate={this.props.maxDate}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // specify how each item should be rendered in agenda
            renderItem={(item, firstItemInDay) => (<AgendaItem 
                                                      title={item.eventTitle} 
                                                      description={item.eventDescription} 
            />)}
            // specify how each date should be rendered. 
            // Day can be undefined if the item is not first in that day.
            renderDay={(day, item) => { 
                    if (day && item) { return (<AgendaDayHeader day={day} />); } 
                  }}
            // specify how empty date content with no items should be rendered
            renderEmptyDate={() => (<View />)}
            
            // specify what should be rendered instead of ActivityIndicator
            renderEmptyData={() => (<ImageBackground 
                                      source={require('../images/dover_logo.png')} 
                                      style={{ width: '100%', height: '100%', opacity: 0.1 }} 
            />)}
            // specify your item comparison function for increased performance
            rowHasChanged={(r1, r2) => r1.text !== r2.text}
            // By default, agenda dates are marked if they have at least one item, 
            // but you can override this if needed
            markedDates={this.props.markedDates}
            /* If provided, a standard RefreshControl will be added for 
            "Pull to Refresh" functionality. 
             Make sure to also set the refreshing prop correctly. */
            onRefresh={() => console.log('refreshing...')}
            // Set this true while waiting for new data from a refresh
            refreshing={false}
            // Add a custom RefreshControl component, 
            // used to provide pull-to-refresh functionality for the ScrollView.
            refreshControl={null}
            // agenda theme
            theme={{
              agendaDayTextColor: 'yellow',
              agendaDayNumColor: 'green',
              agendaTodayColor: 'red',
              agendaKnobColor: '#f0dc82'
            }}
            // agenda container style
            style={{ flexDirection: 'column' }}
          />
        );
    }
}

const mapStateToProps = (state) => ({
     events: state.events.eventsArray,
     minDate: state.events.minDate,
     maxDate: state.events.maxDate,
     markedDates: state.events.markedDates
   });

export default connect(mapStateToProps, { fetchEvents })(EventCalendar);
