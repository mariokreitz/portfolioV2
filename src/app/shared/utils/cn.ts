import { twMerge } from 'tailwind-merge';

type ClassValue = string | undefined | null | false | ClassValue[];

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution.
 * Similar to `cn` from shadcn/ui in React.
 *
 * This function intelligently merges Tailwind classes so that later classes
 * override earlier ones when they conflict (e.g., text-sm will override text-3xl).
 *
 * @example
 * cn('text-3xl', 'text-sm') // => 'text-sm' (later class wins)
 * cn('px-4 py-2', undefined, 'px-8') // => 'py-2 px-8'
 * cn('text-red-500', customClass()) // merge with signal value
 *
 * @param inputs - Class values to merge (strings, arrays, or falsy values)
 * @returns Merged class string with conflicts resolved
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(flattenClassValues(inputs));
}

/**
 * Flatten nested arrays and filter out falsy values
 */
function flattenClassValues(inputs: ClassValue[]): string {
    const classes: string[] = [];

    for (const input of inputs) {
        if (!input) continue;

        if (Array.isArray(input)) {
            const nested = flattenClassValues(input);
            if (nested) classes.push(nested);
        } else {
            classes.push(input);
        }
    }

    return classes.join(' ');
}

