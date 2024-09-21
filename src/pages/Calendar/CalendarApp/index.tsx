import { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';
import { ColorScheme } from '@styles/globalStyles';
import { ptBR } from '../../../utils/localeCalendarConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

// Function that returns styles based on cycle
function currentCycle(cycle: string) {
  if (cycle === 'firstDay') {
    return {
      customStyles: {
        container: {
          borderWidth: 1.9,
          borderColor: '#DCC1EE',
          backgroundColor: '#DCC1EE',
        },
        text: {
          color: '#000', // Text color on the first day
        },
      },
    };
  }

  if (cycle === 'fertile') {
    return {
      customStyles: {
        container: {
          borderWidth: 1.9,
          borderStyle: 'dotted',
          borderColor: '#8E37C9',
        },
        text: {
          color: '#000', // Text color on fertile days
        },
      },
    };
  }

  return {};
}

function CalendarApp() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  const handleDayPress = (day: DateData) => {
    const date = day.dateString;

    // Adds the date if it has not already been selected
    if (!selectedDates.includes(date)) {
      setSelectedDates([...selectedDates, date]);
    }
  };

  // Setting up scheduled dates
const markedDates = selectedDates.reduce((acc, date, index) => {
  if (index === 0) {
    // The first day selected is given the "firstDay" styles
    acc[date] = {
      ...currentCycle('firstDay'),
      customStyles: currentCycle('firstDay').customStyles, // Apply customStyles
    };
  } else {
    // Os outros dias recebem estilos de "fertile"
    acc[date] = {
      ...currentCycle('fertile'),
      customStyles: currentCycle('fertile').customStyles, 
    };
  }
  return acc;
}, {} as Record<string, any>);


  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        markingType="custom" // Mode that allows customStyles
        renderArrow={(direction: 'right' | 'left') => (
          <Feather size={24} color="#e8e8e8" name={`chevron-${direction}`} />
        )}
        headerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: '#e8e8e8',
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textMonthFontSize: 18,
          todayTextColor: ColorScheme.circle?.primary,
          selectedDayBackgroundColor: ColorScheme.circle?.primary,
          selectedDayTextColor: '#000',
          arrowColor: '#e8e8e8',
          textDayStyle: { color: '#000' },
          arrowStyle: {
            margin: 0,
            padding: 0,
          },
        }}
        minDate={new Date().toDateString()}
        hideExtraDays
        onDayPress={handleDayPress}
        markedDates={markedDates} // Applying the dates marked with customStyles
      />

      <Text style={styles.selected}>
        Data selecionada: {selectedDates.join(', ')}
      </Text>
    </View>
  );
}

export default CalendarApp;
