import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeDeExtra from '@angular/common/locales/extra/de';
import localeEnExtra from '@angular/common/locales/extra/en';
import type { LanguageCode, LocaleData } from '../models/app-language';

export const availableLanguages: Readonly<Record<LanguageCode, LocaleData>> = {
    de: [
        localeDe,
        localeDeExtra,
    ],
    en: [
        localeEn,
        localeEnExtra,
    ],
} as const;

export const availableLanguagesCode: LanguageCode[] = Object.keys(availableLanguages) as LanguageCode[];