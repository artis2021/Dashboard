import { useContext } from "react"; 
import OrderingContext from "./OrderingContext";

const useOrdering = () => {
    const { orderingId, setOrderingId } = useContext(OrderingContext);
    return { orderingId, setOrderingId };
}

export default useOrdering;
