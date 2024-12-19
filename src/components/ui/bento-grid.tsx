import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-8 w-full",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    component,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    component?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-xl group/bento hover:shadow-lg transition duration-300 p-6 bg-[#1E1E1E] border border-[#333333] flex flex-col gap-5 font-open_sans w-full",
                className
            )}
        >
            <div className="group-hover/bento:translate-x-2 transition duration-300 space-y-2">
                {title && (
                    <div className="text-white">
                        {title}
                    </div>
                )}
                {description && (
                    <div className="text-neutral-300 leading-relaxed">
                        {description}
                    </div>
                )}
            </div>
            {component && (
                <div className="">
                    {component}
                </div>
            )}
        </div>
    );
};
