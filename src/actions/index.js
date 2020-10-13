export const fetchSessions = () => {
    return {
        type: 'FETCH_SESSIONS',
        payload: [
            {
                id: 1,
                isActive: true,
                date: '2020-10-05',
                type: 'yoga',
                trainer: 'natalya',
                hall: 'small',
                time: {
                    start: '9:30',
                    end: '11:00'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 2,
                isActive: true,
                date: '2020-10-05',
                type: 'box',
                trainer: 'denis',
                hall: 'martial',
                time: {
                    start: '10:00',
                    end: '11:00'
                },
                labels: {
                    special: '',
                    isPaid: true,
                    isCancelled: false
                }
            },{
                id: 3,
                isActive: true,
                date: '2020-10-05',
                type: 'super-sculpt',
                trainer: 'xenia',
                hall: 'small',
                time: {
                    start: '11:30',
                    end: '12:30'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 4,
                isActive: true,
                date: '2020-10-05',
                type: 'tabs-flex',
                trainer: 'xenia',
                hall: 'small',
                time: {
                    start: '13:00',
                    end: '14:00'
                },
                labels: {
                    special: 'Смена тренера',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 5,
                isActive: true,
                date: '2020-10-05',
                type: 'super-sculpt',
                trainer: 'sonya',
                hall: 'small',
                time: {
                    start: '18:00',
                    end: '19:00'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 6,
                isActive: true,
                date: '2020-10-05',
                type: 'tae-bo',
                trainer: 'sonya',
                hall: 'small',
                time: {
                    start: '19:30',
                    end: '20:30'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 7,
                isActive: true,
                date: '2020-10-05',
                type: 'box',
                trainer: 'dima',
                hall: 'martial',
                time: {
                    start: '20:00',
                    end: '21:30'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 8,
                isActive: false,
                date: '2020-10-05',
                type: 'stretching',
                trainer: 'sonya',
                hall: 'small',
                time: {
                    start: '21:00',
                    end: '22:00'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 9,
                isActive: true,
                date: '2020-10-06',
                type: 'pilates',
                trainer: 'xenia',
                hall: 'small',
                time: {
                    start: '9:00',
                    end: '10:00'
                },
                labels: {
                    special: 'Смена тренера',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 10,
                isActive: true,
                date: '2020-10-06',
                type: 'bums-tabs',
                trainer: 'xenia',
                hall: 'small',
                time: {
                    start: '10:30',
                    end: '11:30'
                },
                labels: {
                    special: 'Смена тренера',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 11,
                isActive: true,
                date: '2020-10-06',
                type: 'super-sculpt',
                trainer: 'tatyana-yu',
                hall: 'small',
                time: {
                    start: '18:00',
                    end: '19:00'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 12,
                isActive: false,
                date: '2020-10-06',
                type: 'pilates',
                trainer: 'tatyana-yu',
                hall: 'large',
                time: {
                    start: '19:00',
                    end: '20:00'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 13,
                isActive: true,
                date: '2020-10-06',
                type: 'step-0',
                trainer: 'tatyana-yu',
                hall: 'small',
                time: {
                    start: '19:30',
                    end: '20:30'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 14,
                isActive: true,
                date: '2020-10-06',
                type: 'zumba',
                trainer: 'nikolai',
                hall: 'small',
                time: {
                    start: '21:00',
                    end: '22:00'
                },
                labels: {
                    special: 'Смена тренера',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 15,
                isActive: true,
                date: '2020-10-07',
                type: 'super-sculpt',
                trainer: 'tatyana-yu',
                hall: 'small',
                time: {
                    start: '10:00',
                    end: '11:00'
                },
                labels: {
                    special: '',
                    isPaid: false,
                    isCancelled: false
                }
            },{
                id: 16,
                isActive: false,
                date: '2020-10-07',
                type: 'box',
                trainer: 'denis',
                hall: 'martial',
                time: {
                    start: '10:00',
                    end: '11:00'
                },
                labels: {
                    special: '',
                    isPaid: true,
                    isCancelled: false
                }
            }
        ]
    };
};

export const fetchDays = () => {
    return {
        type: 'FETCH_DAYS',
        payload: [
            {
                date: '2020-10-05',
                isActive: true
            },{
                date: '2020-10-06',
                isActive: true
            },{
                date: '2020-10-07',
                isActive: true
            },{
                date: '2020-10-08',
                isActive: false
            }
        ]
    };
};

export const fetchSessionTypes = () => {
    return {
        type: 'FETCH_SESSION_TYPES',
        payload: {
            'box': 'Бокс',
            'super-sculpt': 'Super Sculpt',
            'yoga': 'Yoga',
            'tabs-flex': 'Tabs+Flex',
            'stretching': 'Stretching',
            'tae-bo': 'Tae-bo',
            'zumba': 'Zumba',
            'step-0': 'Step 0',
            'pilates': 'Pilates'
        }
    };
};

export const fetchTrainers = () => {
    return {
        type: 'FETCH_TRAINERS',
        payload: {
            'denis': 'Денис',
            'tatyana-yu': 'Татьяна Ю.',
            'xenia': 'Ксения',
            'nikolai': 'Николай',
            'sonya': 'Соня',
            'dima': 'Дима',
            'natalya': 'Наталья'
        }
    };
};

export const fetchHalls = () => {
    return {
        type: 'FETCH_HALLS',
        payload: {
            'small': 'Малый зал',
            'large': 'Большой зал',
            'martial': 'Зал для единоборств'
        }
    };
};
