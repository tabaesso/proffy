import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import TeacherList from '../pages/TeacherList';
import Favorites from '../Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator>
            <Screen name="TeacherList" component={TeacherList} />
            <Screen name="Favorites" component={Favorites} />
        </Navigator>
    );
}

export default StudyTabs;