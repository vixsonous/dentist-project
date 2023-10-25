import DoctorNotes from "@/app/global-components/DoctorNotes";
import { PrismaClient } from "@prisma/client";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
const prisma = new PrismaClient();

type CardProps = {
    toothNo: number,
    patient_id: String,
    setOpen: Dispatch<SetStateAction<boolean>>,
    setChildren: Dispatch<SetStateAction<JSX.Element>>
}

export default function Tooth({toothNo, patient_id, setOpen, setChildren} : CardProps) {

    const onClickOdo = async (tooth_no:number, patient_id:String, tooth_position:number) => {
        

        const notes = await fetch(`/api/doctor-notes/?patient_id=${patient_id}&tooth_pos=${tooth_position}&doctor_id=${77}&tooth_no=${tooth_no}`).then((res) => res.json())

        let tooth_pos = '';
        switch(tooth_position) {
            case 0: tooth_pos = 'Center';break;
            case 1: tooth_pos = 'Front';break;
            case 2: tooth_pos = 'Left';break;
            case 3: tooth_pos = 'Right';break;
            case 4: tooth_pos = 'Back';break;
        }
        setChildren(<DoctorNotes doctor_notes={notes.responseBody} tooth_no={String(tooth_no)} tooth_pos={tooth_pos} />)
        setOpen(true);
        console.log(notes)
    }
    
    return (
        <div className="m-2 flex flex-col gap-1" style={{width:'75px'}}>
            <select className="p-1 bg-white opacity-60 bg-transparent border-0 border-b-2 border-gray-500 text-xs" style={{width:'74px'}}>
                <option></option>
                <option>Sample</option>
                <option>Sample</option>
            </select>
            <span className="flex justify-center text-xs">{toothNo}</span>
            <div className="wrapper opacity-30">
                <div className="sector" id="633" onClick={() => onClickOdo(toothNo, patient_id, 3)} style={{rotate: '135deg'}} ></div>
                <div className="sector" id="634" onClick={() => onClickOdo(toothNo, patient_id, 4)} style={{rotate: '225deg'}} ></div>
                <div className="sector" id="632" onClick={() => onClickOdo(toothNo, patient_id, 2)} style={{rotate: '315deg'}} ></div>
                <div className="sector" id="631" onClick={() => onClickOdo(toothNo, patient_id, 1)} style={{rotate: '405deg'}}></div>
                <div>
                    <div className="rating" id="630" onClick={() => onClickOdo(toothNo, patient_id, 0)}></div>
                </div>
            </div>
        </div>
    );
}