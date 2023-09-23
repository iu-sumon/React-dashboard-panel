import { useState } from 'react';

const UseBar = () => { 
    const [isCollapsed, setIsCollapsed] = useState(false);
    var newValue;
    const handleBar = (newCollapsedValue) => { 
        newValue = newCollapsedValue;
        setIsCollapsed(newCollapsedValue);
    };  
    
    return [isCollapsed, handleBar , newValue];
};

export default UseBar;
