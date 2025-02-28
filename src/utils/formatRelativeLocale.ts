import { FormatRelativeOptions } from 'date-fns';
import { enUS } from 'date-fns/locale';
import FormatRelativeLocale from '../types/FormatRelativeLocale';

// All keys of the object must be initialized!
export const customFormatRelativeLocale: FormatRelativeLocale = {
    lastWeek: "PP",
    yesterday: "'Yesterday'",
    today: "hh:mm a",
    tomorrow: "PP",
    nextWeek: "PP",
    other: 'PP',
}

export const customformatRelativeLocale = (formatRelativeLocale?: FormatRelativeLocale): FormatRelativeOptions['locale'] => {
    let newFormatRelativeLocale = { ...customFormatRelativeLocale, ...formatRelativeLocale };
    return (
        {
            ...enUS,
            formatRelative: (token, _date, _baseDate, _options) =>
                newFormatRelativeLocale[token]!,
        }
    )
}