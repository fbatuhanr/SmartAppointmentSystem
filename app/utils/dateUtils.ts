export const getNextDays = (days: number): string[] => {
    const dates: string[] = [];
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric' };

    for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '');
        
        const [weekday, day] = formattedDate.split(' ');
        dates.push(`${day} ${weekday}`);
    }

    return dates;
};

export const getTimeSlots = (startHour: number, endHour: number): string[] => {
    const times: string[] = [];

    for (let hour = startHour; hour <= endHour; hour++) {
        const period = hour < 12 ? "AM" : "PM";
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // 12 saat formatı için
        times.push(`${formattedHour.toString().padStart(2, '0')}:00 ${period}`);
    }

    return times;
};