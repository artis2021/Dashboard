import React from 'react';
import GroupingContext from './GroupingContext';

const GroupingProvider = ({ children }) => {
    // Grouping Ids:
    // 0 - Group by Status
    // 1 - Group by User
    // 2 - Group by Priority
    const [groupingId, setGroupingId] = React.useState(0);

    const value = {
        groupingId,
        setGroupingId
    };

    return (
        <GroupingContext.Provider value={value}>
            {children}
        </GroupingContext.Provider>
    );
}

export default GroupingProvider;