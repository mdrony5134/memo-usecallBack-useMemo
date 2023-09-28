import { memo } from "react";

const title = () => {
    console.log('rendering title...')
    return (
        <div>
           <h1>Memo, useCallback and useMemo hook</h1> 
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(title);