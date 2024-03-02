import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export const parseDate = (date: string): string => {
  return format(parseISO(date), "LLLL d, yyyy", { locale: es });
};
