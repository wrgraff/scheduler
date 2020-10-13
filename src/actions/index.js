export const fetchSessions = () => {
    return {
        type: 'FETCH_SESSIONS',
        payload: [
            {
                id: 1,
                isActive: true,
                date: '2020-10-05',
                type: 3,
                trainer: 7,
                hall: 1,
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
                type: 1,
                trainer: 1,
                hall: 3,
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
                type: 2,
                trainer: 3,
                hall: 1,
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
                type: 4,
                trainer: 3,
                hall: 1,
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
                type: 2,
                trainer: 5,
                hall: 1,
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
                type: 6,
                trainer: 5,
                hall: 1,
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
                type: 1,
                trainer: 6,
                hall: 3,
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
                type: 5,
                trainer: 5,
                hall: 1,
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
                type: 9,
                trainer: 3,
                hall: 1,
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
                type: 1,
                trainer: 3,
                hall: 1,
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
                type: 2,
                trainer: 2,
                hall: 1,
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
                type: 9,
                trainer: 2,
                hall: 2,
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
                type: 8,
                trainer: 2,
                hall: 1,
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
                type: 7,
                trainer: 4,
                hall: 1,
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
                type: 2,
                trainer: 2,
                hall: 1,
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
                type: 1,
                trainer: 1,
                hall: 3,
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
                id: 1,
                date: '2020-10-05',
                isActive: true
            },{
                id: 2,
                date: '2020-10-06',
                isActive: true
            },{
                id: 3,
                date: '2020-10-07',
                isActive: true
            },{
                id: 4,
                date: '2020-10-08',
                isActive: false
            }
        ]
    };
};

export const fetchSessionTypes = () => {
    return {
        type: 'FETCH_SESSION_TYPES',
        payload: [
            {
                id: 1,
                name: 'Бокс'
            },{
                id: 2,
                name: 'Super Sculpt'
            },{
                id: 3,
                name: 'Tabs+Flex'
            },{
                id: 4,
                name: 'Tabs+Flex'
            },{
                id: 5,
                name: 'Stretching'
            },{
                id: 6,
                name: 'Tae-bo'
            },{
                id: 7,
                name: 'Zumba'
            },{
                id: 8,
                name: 'Step 0'
            },{
                id: 9,
                name: 'Pilates'
            },{
                id: 10,
                name: 'Bums+Tabs'
            }
        ]
    };
};

export const fetchTrainers = () => {
    return {
        type: 'FETCH_TRAINERS',
        payload: [
            {
                id: 1,
                name: 'Денис'
            },{
                id: 2,
                name: 'Татьяна Ю.'
            },{
                id: 3,
                name: 'Ксения'
            },{
                id: 4,
                name: 'Николай'
            },{
                id: 5,
                name: 'Соня'
            },{
                id: 6,
                name: 'Дима'
            },{
                id: 7,
                name: 'Наталья'
            }
        ]
    };
};

export const fetchHalls = () => {
    return {
        type: 'FETCH_HALLS',
        payload: [
            {
                id: 1,
                name: 'Малый зал'
            },{
                id: 2,
                name: 'Большой зал'
            },{
                id: 3,
                name: 'Зал для единоборств'
            }
        ]
    };
};
