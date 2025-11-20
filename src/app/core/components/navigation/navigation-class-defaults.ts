import type { NavigationClassesConfig } from './navigation-class-config';

export const DEFAULT_NAVIGATION_CLASSES: Readonly<NavigationClassesConfig> = {
    rootWrapper: '',
    desktopContainer: 'px-4 py-4 flex items-center justify-between',
    mobileTopBar: 'px-4 py-4 flex items-center justify-between border-b border-slate-700',
    mobileMenuPanel: 'bg-slate-900 text-end shadow-md p-4 border-b border-slate-700',
    logoAnchor: 'inline-flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded',
    languageSelectorWrapperDesktop: 'flex gap-4 items-center',
    languageSelectorWrapperMobile: 'mt-4',
    navLinkBase: 'w-full text-left inline-flex items-center gap-2 text-base transition-colors font-medium text-white hover:bg-slate-200/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded py-2 px-2',
    navLinkActive: 'text-indigo-300 bg-slate-200/20',
    socialLinkItem: 'inline-flex items-center justify-center p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 text-slate-200 hover:text-indigo-300 transition-colors',
    mobileToggleButton: 'rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-200',
};