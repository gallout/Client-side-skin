export const dateToInputString = (date: Date | null | undefined): string => {
    if (date) {
        const now = new Date();
        const isoString = now.toISOString();
       // const isoString = date.toISOString();
        
        return isoString.substr(0, isoString.indexOf('T'));
        
    }
    return '';
}

