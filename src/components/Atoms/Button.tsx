import React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'icon';
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    icon?: React.ReactNode;
}

const Button = ({
    variant = 'primary',
    children,
    className = '',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    fullWidth = false,
    icon
}: ButtonProps) => {

    // Base classes that apply to all buttons
    const baseClasses = 'font-inter rounded-lg transition-all duration-200 flex items-center justify-center py-2.5 px-4 text-sm';

    // Full width class
    const widthClass = fullWidth ? 'w-full' : '';

    // Variant specific classes
    const variantClasses = {
        primary: ' bg-white hover:bg-gray text-black font-medium border border-[#E2E8F0] ',
        secondary: ' bg-black hover:bg-black/50 text-white font-medium shadow-sm hover:shadow ',
        outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
        text: ' bg-white hover:bg-gray text-muted hover:text-black  border border-[#E2E8F0] ',
        icon: 'p-2 hover:bg-gray-100 text-gray-700'
    };

    // Disabled state classes
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    // Loading state
    const renderContent = () => {
        if (loading) {
            return (
                <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {variant !== 'icon' && <span>Loading...</span>}
                </>
            );
        }

        return (
            <>
                {icon && <span className="mr-2">{icon}</span>}
                {variant !== 'icon' ? children : icon || children}
            </>
        );
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses}    whitespace-nowrap ${variantClasses[variant]} ${disabledClasses} ${widthClass} ${className}`}
        >
            {renderContent()}
        </button>
    );
};

export default Button;