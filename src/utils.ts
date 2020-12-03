/**
 * 
 * @param dateString date in format 'dd/mm/yyyy'
 */
export const parseDate = (dateString: string): Date => {
    const parts = dateString.split('/').map(part => parseInt(part));
    return new Date(parts[2], parts[1] - 1, parts[0]);
}