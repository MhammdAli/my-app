import { format } from 'date-fns';
export function isTrivialHref(href?: string) {
    return !href || href.trim() === '#';
}
  

export function isUndefined(value : any) : boolean{
    return typeof value === 'undefined'
}
 
export function isDefined(value : any) : boolean{
    return not(typeof value === 'undefined')
}
 
export function not(value : boolean) : boolean{
    return !value
}


export function formatDate(date : string , formatDate : string) : string{
    return format(new Date(date), formatDate);
}