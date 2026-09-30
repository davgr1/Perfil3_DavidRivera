import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../config/theme';
import PlanetsScreen from '../screens/PlanetsScreen';
import StudentScreen from '../screens/StudentScreen';

const Stack = createNativeStackNavigator();

const theme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: COLORS.background, primary: COLORS.primary, card: COLORS.surface },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.surface },
          headerTintColor: COLORS.text,
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Estudiante' }} />
        <Stack.Screen name="Planets" component={PlanetsScreen} options={{ title: 'Planetas Dragon Ball' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
