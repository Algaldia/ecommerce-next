import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import { toogleProductAvailability } from "../../_actions/products";

export function ActiveToogleDropdownItem({ 
    id, isAvaliableForPurchase 
} : { 
    id: string, 
    isAvaliableForPurchase : boolean 
}) {
    const [isPendeng, startTransition] = useTransition()
    return (
        <DropdownMenuItem 
            disabled={isPendeng}
            onClick={() => {
                startTransition(async () => {
                    await toogleProductAvailability(id, !isAvaliableForPurchase)
                })
        }}>
            {isAvaliableForPurchase ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
    )
}

/*export function DeleteDropdownItem({
    id, disabled
} : {
    id: string,
    disabled: boolean
}){
    const [isPendeng, startTransition] = useTransition()
    return (
        <DropdownMenuItem 
            disabled={disabled || isPendeng}
            onClick={() => {
                startTransition(async () => {
                    await toogleProductAvailability(id, !isAvaliableForPurchase)
                })
        }}>
            {isAvaliableForPurchase ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
    )
}*/