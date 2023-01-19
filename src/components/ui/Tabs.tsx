import * as TabsPrimitive from '@radix-ui/react-tabs'
import { ComponentProps, forwardRef } from 'react';

// export const Tabs = TabsPrimitive.Root;

type TabsProps = ComponentProps<typeof TabsPrimitive["Tabs"]>;
export const Tabs = forwardRef<HTMLDivElement,TabsProps>(
    ({children,className="",...props}, forwardRef) =>(
        <TabsPrimitive.Tabs
            className={`  ${className}`}
            {...props}
            ref={forwardRef}
        >
            {children}
        </TabsPrimitive.Tabs>
    )
)


//Impleement as asChild also @skpjr001
type TabsTriggerProps = ComponentProps<typeof TabsPrimitive['Trigger']>;
export const TabsTrigger = forwardRef<HTMLButtonElement,TabsTriggerProps>(
    ({className="",...props},forwardRef)=>(
        <TabsPrimitive.Trigger
            className={` bg-blue-800 mx-1 p-3 rounded-full  ${className}`}
            {...props}
            ref={forwardRef}
        />
    )
)
TabsTrigger.displayName = "TabsTrigger"

type TabsListProps = ComponentProps<typeof TabsPrimitive['List']>;
export const TabsList = forwardRef<HTMLDivElement,TabsListProps>(
    ({children, className = "", ...props}, forwardRef) =>(
        <TabsPrimitive.List
            className={`w-fit shadow-gray-600  rounded-full text-gray-500 border border-gray-500   ${className}`}
            {...props}
            ref={forwardRef}
        >
            {children}
        </TabsPrimitive.List>
    )
);
TabsList.displayName = "TabsList";

type TabsContentProps = ComponentProps<typeof TabsPrimitive['Content']>;
export const TabsContent = forwardRef<HTMLDivElement,TabsContentProps>(
    ({children,className="", ...props},forwardRef) => (
        <TabsPrimitive.Content
            className={`  ${className}`}
            {...props}
            ref={forwardRef}
        >
            {children}
        </TabsPrimitive.Content>
    )
)
TabsContent.displayName = "TabsContent";






