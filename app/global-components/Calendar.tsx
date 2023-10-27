import { SetStateAction, useState } from "react"

type MonthEnum = {
    [key: string] : string
}

export default function Calendar() {

    const [curDays, setCurDays] = useState(
        <>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">27</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">30</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">29</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">28</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">1</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">2</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">3</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">4</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">5</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">6</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">7</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">8</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">9</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">10</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">11</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">12</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">13</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">14</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">15</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">16</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">17</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">18</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">19</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">20</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">21</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">22</a>
        <a href="#" className="dayEl hover:bg-indigo-600 rounded-md p-2 bg-indigo-500 text-white">23</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">24</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">25</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">26</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">27</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">28</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">29</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">30</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2">31</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">1</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">2</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">3</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">4</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">5</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">6</a>
        <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">7</a>
        </>
    );

    const [curMonth, setCurMonth] = useState(new Date().getMonth() + 1);
    const [curYr, setCurYr] = useState(2023);

    const changeDt = (curM:SetStateAction<number>, curY:SetStateAction<number>) => {
        const beforeDt = new Date(curYr, curMonth, 0);
        setCurMonth(curM);
        setCurYr(curY);
        const curDate = new Date(Number(curY), Number(curM), 0);
        
        const strtDt = new Date(Number(curY) - 1, Number(curM) - 1, 1);
        const noDays = curDate.getDate();
        const noBeforeDays = beforeDt.getDate();
        const strtDay = strtDt.getDay();
        let daysEl = Array.from(Array(noDays).keys());
        let beforeDaysEl = Array.from(Array(strtDay + 1).keys());
        let remaining = Array.from(Array(42 - (daysEl.length + beforeDaysEl.length)).keys());

        setCurDays(
            <>
            {
                beforeDaysEl.toReversed().map((el) => {
                    return <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">{noBeforeDays - el}</a>
                })
            }
            {
                daysEl.map((el) => {
                    return <a href="#" className={`dayEl ${ (el + 1) === new Date().getDate() &&  curDate.getMonth() === new Date().getMonth() ? 'hover:bg-indigo-600 rounded-md p-2 bg-indigo-500 text-white' : 'hover:bg-indigo-100 rounded-md p-2'}`}>{el + 1}</a>
                })
            }
            {
                remaining.map((el) => {
                    return <a href="#" className="dayEl hover:bg-indigo-100 rounded-md p-2 text-gray-500">{el + 1}</a>
                })
            }
            </>
        )
    }

    const nextMonth = () => {
        const curM = curMonth + 1 <= 12 ? curMonth + 1 : 1;
        const curY = curMonth + 1 <= 12 ? curYr : curYr + 1;
        changeDt(curM, curY);
    }

    const prevMonth = () => {
        const curM = curMonth - 1 >= 1 ? curMonth - 1 : 12;
        const curY = curMonth - 1 >= 1 ? curYr : curYr - 1;
        changeDt(curM, curY);
    }

    const months:MonthEnum = {
        1 : 'January',
        2 : 'February',
        3 : 'March',
        4 : 'April',
        5 : 'May',
        6 : 'June',
        7 : 'July',
        8 : 'August',
        9 : 'September',
        10 : 'October',
        11 : 'November',
        12 : 'December',
    }
    return (
        <div className="bg-white shadow-xl overflow-hidden rounded-lg mx-auto text-gray-900 text-center">
            <div className="flex items-center justify-around px-4 py-4">
                <button onClick={prevMonth} className="p-2 rounded-md text-indigo-600">
                <svg className="w-3 h-3 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <div className="text-lg">{months[String(curMonth)]}, {curYr}</div>
                <button onClick={nextMonth} className="p-2 rounded-md text-indigo-600">
                <svg className="w-3 h-3 stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
            <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-2 gap-1">
                <div className="text-indigo-600">Sun</div>
                <div className="text-indigo-600">Mon</div>
                <div className="text-indigo-600">Tue</div>
                <div className="text-indigo-600">Wed</div>
                <div className="text-indigo-600">Thu</div>
                <div className="text-indigo-600">Fri</div>
                <div className="text-indigo-600">Sat</div>
                {curDays}
            </div>
            </div>
        )
}