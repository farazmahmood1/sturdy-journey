const ARABIC_NUMERALS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];



export const toArabicNumerals = (value: string | number): string =>
  String(value).replace(/[0-9]/g, (d) => ARABIC_NUMERALS[parseInt(d)]);

export const localizeNumber = (value: string | number, lang: string): string =>
  lang === 'ar' ? toArabicNumerals(value) : String(value);
