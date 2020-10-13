export const getWeekdayRu = date => {
    const milesecondsDate = new Date(Date.parse(date));
    const dateFormatter = new Intl.DateTimeFormat('ru', {
        weekday: "long",
    });

    return dateFormatter.format(milesecondsDate);
};

export const getWeekdayEn = date => {
    const milesecondsDate = new Date(Date.parse(date));
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        weekday: "long",
    });

    return dateFormatter.format(milesecondsDate);
};

export const getReadableDateRu = date => {
    const milesecondsDate = new Date(Date.parse(date));
    const dateFormatter = new Intl.DateTimeFormat('ru', {
        month: 'long',
        day: 'numeric'
    });

    return dateFormatter.format(milesecondsDate);
};
