import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

export default function PageHeader({ title, subtitle, bgImage }: PageHeaderProps) {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-60" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                {bgImage && (
                    <div
                        className="absolute inset-0 opacity-20 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                )}
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>
                {subtitle && (
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
