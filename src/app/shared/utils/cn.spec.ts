import { cn } from './cn';

describe('cn utility', () => {
    it('should merge simple classes', () => {
        expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
    });

    it('should handle undefined and null values', () => {
        expect(cn('px-4', undefined, 'py-2', null)).toBe('px-4 py-2');
    });

    it('should override conflicting Tailwind classes (later wins)', () => {
        const result = cn('text-3xl', 'text-sm');
        expect(result).toBe('text-sm');
    });

    it('should merge responsive variants correctly', () => {
        const result = cn('text-3xl md:text-4xl', 'text-sm');
        expect(result).toBe('md:text-4xl text-sm');
    });

    it('should handle multiple conflicting classes', () => {
        const result = cn('px-4 py-2', 'px-8');
        expect(result).toBe('py-2 px-8');
    });

    it('should handle array inputs', () => {
        expect(cn([
            'px-4',
            'py-2',
        ], 'bg-red-500')).toBe('px-4 py-2 bg-red-500');
    });

    it('should handle nested arrays', () => {
        expect(cn([
            'px-4',
            [
                'py-2',
                'bg-red-500',
            ],
        ])).toBe('px-4 py-2 bg-red-500');
    });

    it('should filter out false values', () => {
        expect(cn('px-4', false && 'py-2', 'bg-red-500')).toBe('px-4 bg-red-500');
    });

    it('should handle complex real-world scenario', () => {
        const baseClasses = 'text-3xl md:text-4xl font-bold';
        const customClasses = 'text-sm text-blue-500';
        const result = cn(baseClasses, customClasses);
        // text-sm should override text-3xl, md:text-4xl should remain, text-blue-500 should be added
        expect(result).toContain('text-sm');
        expect(result).toContain('text-blue-500');
        expect(result).toContain('font-bold');
    });
});

