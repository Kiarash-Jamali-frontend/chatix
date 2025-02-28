import { FormatRelativeOptions } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const customFormatRelativeLocale = {
    lastWeek: "PP",
    yesterday: "'Yesterday'",
    today: "hh:mm a",
    tomorrow: "PP",
    nextWeek: "PP",
    other: 'PP',
}

export const customLocale: FormatRelativeOptions['locale'] = {
    ...enUS,
    formatRelative: (token, _date, _baseDate, _options) =>
        customFormatRelativeLocale[token],
};