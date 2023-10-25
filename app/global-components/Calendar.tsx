export default function Calendar() {
    return (
        <div  style={{minWidth: '100%;' ,width: '100%'}} className="bg-white shadow-xl overflow-hidden rounded-lg mx-auto mt-8 text-gray-900 font-semibold text-center">
            <div className="flex items-center justify-around px-4 py-4">
                <button className="p-2 rounded-md bg-indigo-200 text-indigo-600">
                <svg className="w-3 h-3 stroke-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <div className="text-lg">May, 2020</div>
                <button className="p-2 rounded-md bg-indigo-200 text-indigo-600">
                <svg className="w-3 h-3 stroke-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
            <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-2 gap-1">
                <div className="text-indigo-600">Mon</div>
                <div className="text-indigo-600">Tue</div>
                <div className="text-indigo-600">Wed</div>
                <div className="text-indigo-600">Thu</div>
                <div className="text-indigo-600">Fri</div>
                <div className="text-indigo-600">Sat</div>
                <div className="text-indigo-600">Sun</div>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">27</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">28</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">29</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">30</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">1</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">2</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">3</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">4</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">5</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">6</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">7</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">8</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">9</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">10</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">11</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">12</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">13</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">14</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">15</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">16</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">17</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">18</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">19</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">20</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">21</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">22</a>
                <a href="#" className="hover:bg-indigo-600 rounded-md p-2 bg-indigo-500 text-white">23</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">24</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">25</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">26</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">27</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">28</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">29</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">30</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2">31</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">1</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">2</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">3</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">4</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">5</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">6</a>
                <a href="#" className="hover:bg-indigo-100 rounded-md p-2 text-gray-500">7</a>
            </div>
            </div>
        )
}