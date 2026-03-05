import React from 'react';

interface Props {
    data: any;
}

export default function StructuredData({ data }: Props) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
