import { useContext } from "react"; 
import GroupingContext from "./GroupingContext";

const useGrouping = () => {
    const { groupingId, setGroupingId } = useContext(GroupingContext);
    return { groupingId, setGroupingId };
}

export default useGrouping;
