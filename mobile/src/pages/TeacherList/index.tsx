import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {return teacher.id});
                
                setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(() => {
        // React.useCallback(() => {
            loadFavorites();
        // }, []);
    });

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}>
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <Picker
                            selectedValue={subject}
                            onValueChange={(itemValue) => setSubject(itemValue as string)}
                            style={styles.input}
                        >
                            <Picker.Item label="Qual a matéria?" value="" />
                            <Picker.Item label="Artes" value="Artes" />
                            <Picker.Item label="Biologia" value="Biologia" />
                            <Picker.Item label="Física" value="Física" />
                            <Picker.Item label="Química" value="Química" />
                            <Picker.Item label="Geografia" value="Geografia" />
                            <Picker.Item label="História" value="História" />
                            <Picker.Item label="Matemática" value="Matemática" />
                            <Picker.Item label="Português" value="Português" />
                            <Picker.Item label="Inglês" value="Inglês" />
                        </Picker>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <Picker
                                    selectedValue={week_day}
                                    onValueChange={(itemValue) => setWeekDay(itemValue as string)}
                                    style={styles.input}
                                >
                                    <Picker.Item label="Qual o dia?" value="" />
                                    <Picker.Item label="Domingo" value="0" />
                                    <Picker.Item label="Segunda-feira" value="1" />
                                    <Picker.Item label="Terça-feira" value="2" />
                                    <Picker.Item label="Quarta-feira" value="3" />
                                    <Picker.Item label="Quinta-feira" value="4" />
                                    <Picker.Item label="Sexta-feira" value="5" />
                                    <Picker.Item label="Sábado" value="6" />
                                </Picker>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;