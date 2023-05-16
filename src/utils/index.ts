import axios from './fetch';

const handleDate = (inputDate: string): string => {
    const [datePart] = inputDate.split('T');
    const [year, month, day] = datePart.split('-');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

export {
    axios,
    handleDate
}
