import React, { useState } from 'react';

const useBarger = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleBarger = () =>{
         setIsCollapsed(!isCollapsed)
    }
   
    return (
        <div>
            
        </div>
    );
};

export default useBarger;