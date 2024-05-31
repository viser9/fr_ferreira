import { CalendarForm } from "@/components/CalendarForm";
import CustButton from "@/components/custom-components/CustButton";
import { Calendar } from "@/components/ui/calendar";

export default function () {
    return (
        <>
            <CustButton label="hello"/>
            <Calendar />
            <CalendarForm/>
            
        </>
    )
}