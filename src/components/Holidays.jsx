import React from 'react'
import { Link } from 'react-router-dom'

const Holidays = () => {
    return (
        <div className="container-fluid mt-4">

            {/* Top Row: Predefined Timers + Recently Used */}
            <div className="row Home_Main mb-5">
                {/* Left: Timer Links */}
                <div className="col-md-6 Holidays_Pg BTN_Timer bg-traslate p-3 border">
                    <div className="row">
                        <h4 className='H_Fonts p-2 text-center'>Holidays in the United States</h4>
                        <p className='Row_Bottom'></p>
                        <div className='col-md-2'></div>
                        <div className="col-md-5">
                            <p>New Year</p>
                            <p>Martin Luther King Day</p>
                            <p>Groundhog Day</p>
                            <p>Chinese New Year</p>
                            <p>Valentine's Day</p>
                            <p>Presidents Day</p>
                            <p>St. Patrick's Day</p>
                            <p>April Fool's Day</p>
                            <p>Good Friday</p>
                            <p>Easter</p>
                            <p>Easter Monday</p>
                            <p>Tax Day</p>
                            <p>Mother's Day</p>
                            <p>Memorial Day</p>
                            <p>Father's Day</p>
                            <p>Juneteenth</p>
                            <p>Independence Day</p>
                            <p>Labor Day</p>
                            <p>Programmers' Day</p>
                            <p>Columbus Day</p>
                            <p>Halloween</p>
                            <p>Day of the Dead</p>
                            <p>Veterans Day</p>
                            <p>Thanksgiving Day</p>
                            <p>Black Friday</p>
                            <p>Cyber Monday</p>
                            <p>Christmas</p>
                        </div>
                        <div className="col-md-2">
                            <p>Jan 1, 2026</p>
                            <p>Jan 19, 2026</p>
                            <p>Feb 2, 2026</p>
                            <p>Feb 17, 2026</p>
                            <p>Feb 14, 2026</p>
                            <p>Feb 16, 2026</p>
                            <p>Mar 17, 2026</p>
                            <p>Apr 1, 2026</p>
                            <p>Apr 3, 2026</p>
                            <p>Apr 5, 2026</p>
                            <p>Apr 6, 2026</p>
                            <p>Apr 15, 2026</p>
                            <p>May 10, 2026</p>
                            <p>May 25, 2026</p>
                            <p>Jun 21, 2026</p>
                            <p>Jun 19, 2026</p>
                            <p>Jul 4, 2025</p>
                            <p>Sep 1, 2025</p>
                            <p>Sep 13, 2025</p>
                            <p>Oct 13, 2025</p>
                            <p>Oct 31, 2025</p>
                            <p>Nov 2, 2025</p>
                            <p>Nov 11, 2025</p>
                            <p>Nov 27, 2025</p>
                            <p>Nov 28, 2025</p>
                            <p>Dec 1, 2025</p>
                            <p>Dec 25, 2025</p>
                        </div>
                        <div className="col-md-3">
                            <p>187 days</p>
                            <p>205 days</p>
                            <p>219 days</p>
                            <p>234 days</p>
                            <p>231 days</p>
                            <p>233 days</p>
                            <p>262 days</p>
                            <p>277 days</p>
                            <p>279 days</p>
                            <p>281 days</p>
                            <p>282 days</p>
                            <p>291 days</p>
                            <p>316 days</p>
                            <p>331 days</p>
                            <p>358 days</p>
                            <p>356 days</p>
                            <p>6 days</p>
                            <p>65 days</p>
                            <p>77 days</p>
                            <p>107 days</p>
                            <p>125 days</p>
                            <p>127 days</p>
                            <p>136 days</p>
                            <p>152 days</p>
                            <p>153 days</p>
                            <p>156 days</p>
                            <p>180 days</p>
                        </div>
                    </div>
                </div>

                {/* Right: Recently Used */}
                <div className="col-md-6 Holidays_Pg BTN_Timer32 bg-traslate p-3 border">
                    <h4 className="H_Fonts p-2 text-center">Holidays in the United Kingdom</h4>
                    <p className='Row_Bottom'></p>
                    <div className='row text-start'>
                        <div className='col-md-2'></div>
                        <div className="col-md-5 Holidays_Pg2 ">
                            <p>New Year</p>
                            <p>Epiphany</p>
                            <p>Ash Wednesday</p>
                            <p>Valentine's Day</p>
                            <p>Chinese New Year</p>
                            <p>Saint David's Day</p>
                            <p>Mothering Sunday</p>
                            <p>St. Patrick's Day</p>
                            <p>Palm Sunday</p>
                            <p>Maundy Thursday</p>
                            <p>Good Friday</p>
                            <p>Easter</p>
                            <p>Easter Monday</p>
                            <p>Saint George's Day</p>
                            <p>Pentecost</p>
                            <p>Father's Day</p>
                            <p>Halloween</p>
                            <p>Guy Fawkes Night</p>
                            <p>Remembrance Sunday</p>
                            <p>Christmas</p>
                            <p>Boxing Day</p>
                        </div>
                        <div className="col-md-2 Holidays_Pg2">
                            <p>Jan 1, 2026</p>
                            <p>Jan 6, 2026</p>
                            <p>Feb 18, 2026</p>
                            <p>Feb 14, 2026</p>
                            <p>Feb 17, 2026</p>
                            <p>Mar 1, 2026</p>
                            <p>Mar 15, 2026</p>
                            <p>Mar 17, 2026</p>
                            <p>Mar 29, 2026</p>
                            <p>Apr 2, 2026</p>
                            <p>Apr 3, 2026</p>
                            <p>Apr 5, 2026</p>
                            <p>Apr 6, 2026</p>
                            <p>Apr 23, 2026</p>
                            <p>May 24, 2026</p>
                            <p>Jun 21, 2026</p>
                            <p>Oct 31, 2025</p>
                            <p>Nov 5, 2025</p>
                            <p>Nov 9, 2025</p>
                            <p>Dec 25, 2025</p>
                            <p>Dec 26, 2025</p>
                        </div>
                        <div className="col-md-3 Holidays_Pg2">
                            <p>187 days</p>
                            <p>192 days</p>
                            <p>235 days</p>
                            <p>231 days</p>
                            <p>234 days</p>
                            <p>246 days</p>
                            <p>260 days</p>
                            <p>262 days</p>
                            <p>274 days</p>
                            <p>278 days</p>
                            <p>279 days</p>
                            <p>281 days</p>
                            <p>282 days</p>
                            <p>299 days</p>
                            <p>330 days</p>
                            <p>358 days</p>
                            <p>125 days</p>
                            <p>130 days</p>
                            <p>134 days</p>
                            <p>180 days</p>
                            <p>181 days</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row Home_Main text-start mb-5">
                {/* Left: Timer Links */}
                <div className="col-md-6 Holidays_Pg BTN_Timer bg-traslate p-3 border">
                    <div className="row">
                        <h4 className='H_Fonts p-2 text-center'>Holidays in Australia</h4>
                        <p className='Row_Bottom'></p>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <p>New Year</p>
                            <p>Epiphany</p>
                            <p>Australia Day</p>
                            <p>Chinese New Year</p>
                            <p>Valentine's Day</p>
                            <p>St. Patrick's Day</p>
                            <p>Harmony Day</p>
                            <p>Good Friday</p>
                            <p>Easter</p>
                            <p>Easter Monday</p>
                            <p>Anzac Day</p>
                            <p>Mother's Day</p>
                            <p>Father's Day in Australia</p>
                            <p>Halloween</p>
                            <p>Remembrance Day</p>
                            <p>Christmas</p>
                            <p>Boxing Day</p>
                        </div>
                        <div className="col-md-2">
                            <p>Jan 1, 2026	</p>
                            <p>Jan 6, 2026</p>
                            <p>Jan 26, 2026</p>
                            <p>Feb 17, 2026</p>
                            <p>Feb 14, 2026</p>
                            <p>Mar 17, 2026</p>
                            <p>Mar 21, 2026</p>
                            <p>Apr 3, 2026</p>
                            <p>Apr 5, 2026</p>
                            <p>Apr 6, 2026</p>
                            <p>Apr 25, 2026</p>
                            <p>May 10, 2026</p>
                            <p>Sep 7, 2025</p>
                            <p>Oct 31, 2025</p>
                            <p>Nov 11, 2025</p>
                            <p>Dec 25, 2025</p>
                            <p>Dec 26, 2025</p>
                        </div>
                        <div className="col-md-3">
                            <p>187 days</p>
                            <p>192 days</p>
                            <p>212 days</p>
                            <p>234 days</p>
                            <p>231 days</p>
                            <p>262 days</p>
                            <p>266 days</p>
                            <p>279 days</p>
                            <p>281 days</p>
                            <p>282 days</p>
                            <p>301 days</p>
                            <p>316 days</p>
                            <p>71 days</p>
                            <p>125 days</p>
                            <p>136 days</p>
                            <p>180 days</p>
                            <p>181 days</p>
                        </div>
                    </div>
                </div>

                {/* Right: Recently Used */}
                <div className="col-md-6 Holidays_Pg BTN_Timer32 bg-traslate p-3 border">
                    <h4 className="H_Fonts p-2 text-center">Holidays in Canada</h4>
                    <p className='Row_Bottom'></p>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className="col-md-5">
                            <p>New Year</p>
                            <p>Epiphany</p>
                            <p>Groundhog Day</p>
                            <p>Chinese New Year</p>
                            <p>Valentine's Day</p>
                            <p>St. Patrick's Day</p>
                            <p>Good Friday</p>
                            <p>Easter</p>
                            <p>Easter Monday</p>
                            <p>Mother's Day</p>
                            <p>Victoria Day</p>
                            <p>Father's Day</p>
                            <p>Canada Day</p>
                            <p>Labor Day</p>
                            <p>Thanksgiving Day in Canada</p>
                            <p>Halloween</p>
                            <p>Remembrance Day</p>
                            <p>Christmas</p>
                            <p>Boxing Day</p>
                        </div>
                        <div className="col-md-2 Holidays_Pg2">
                            <p>Jan 1, 2026</p>
                            <p>Jan 6, 2026</p>
                            <p>Feb 2, 2026</p>
                            <p>Feb 17, 2026</p>
                            <p>Feb 14, 2026</p>
                            <p>Mar 17, 2026</p>
                            <p>Apr 3, 2026</p>
                            <p>Apr 5, 2026</p>
                            <p>Apr 6, 2026</p>
                            <p>May 10, 2026</p>
                            <p>May 18, 2026</p>
                            <p>Jun 21, 2026</p>
                            <p>Jul 1, 2026</p>
                            <p>Sep 1, 2026</p>
                            <p>Oct 13, 2025</p>
                            <p>Oct 31, 2025</p>
                            <p>Nov 11, 2025</p>
                            <p>Dec 25, 2025</p>
                            <p>Dec 26, 2025</p>
                        </div>
                        <div className="col-md-3 Holidays_Pg2">
                            <p>187 days</p>
                            <p>192 days</p>
                            <p>219 days</p>
                            <p>234 days</p>
                            <p>231 days</p>
                            <p>262 days</p>
                            <p>279 days</p>
                            <p>281 days</p>
                            <p>282 days</p>
                            <p>316 days</p>
                            <p>324 days</p>
                            <p>358 days</p>
                            <p>3 days</p>
                            <p>65 days</p>
                            <p>107 days</p>
                            <p>125 days</p>
                            <p>136 days</p>
                            <p>180 days</p>
                            <p>181 days</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row Home_Main py-5'>
                    <div className='col-md-12 p-2 text-start bg-traslate border'>
                        <h1>Holidays in USA, UK, Australia and Canada</h1>
                        <div className='Row_Bottom'></div>
                        <p>List of holidays, memorable dates, religious holidays, and other popular holidays. The date of the holiday and the time remaining before the start of the holiday are displayed.</p>
                        <p>Some holidays are celebrated on a grand scale, while others are very modest, almost imperceptible.
                            In this list you can find out what holiday is today and see what holidays will be soon. 
                            You can open the page of any of the holidays to see the countdown timer to the holiday,
                            see the description of the holiday and the day of its celebration in any year.</p>
                        <p>The word holiday has differing connotations in different regions. In the United States the word is used exclusively to refer to the nationally,
                            religiously or culturally observed day(s) of rest or celebration, or the events themselves, whereas in the United Kingdom and other Commonwealth nations,
                            the word may refer to the period of time where leave from one's duties has been agreed, and is used as a synonym to the US preferred vacation.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Holidays