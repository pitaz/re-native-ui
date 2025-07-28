import React from 'react';
export interface TagInputProps {
    label?: string;
    tags: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    error?: string;
    maxTags?: number;
}
export declare const TagInput: React.FC<TagInputProps>;
